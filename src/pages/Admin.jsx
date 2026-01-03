import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Admin() {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  /* ======================
     FETCH ENQUIRIES
  ====================== */
  const fetchEnquiries = useCallback(async () => {
    try {
      const res = await fetch(
        "https://glovira-backend.onrender.com/api/admin/enquiries",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      if (res.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
        return;
      }

      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data);
      }
    } catch (err) {
      console.error("Fetch enquiries error", err);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  /* ======================
     AUTH + AUTO REFRESH
  ====================== */
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetchEnquiries();
    const interval = setInterval(fetchEnquiries, 5000);
    return () => clearInterval(interval);
  }, [fetchEnquiries, navigate]);

  /* ======================
     ACTIONS
  ====================== */
  const markRead = async (id) => {
    await fetch(
      `https://glovira-backend.onrender.com/api/admin/enquiry/${id}/read`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      }
    );
    fetchEnquiries();
  };

  const deleteEnquiry = (id) => {
    toast(
      (t) => (
        <div className="space-y-3">
          <p className="font-medium text-sm">
            This enquiry will be permanently deleted.
          </p>

          <div className="flex justify-end gap-2">
            <button
              onClick={async () => {
                try {
                  await fetch(
                    `https://glovira-backend.onrender.com/api/admin/enquiry/${id}`,
                    {
                      method: "DELETE",
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                          "adminToken"
                        )}`,
                      },
                    }
                  );

                  toast.dismiss(t.id);
                  toast.success("Enquiry deleted successfully");
                  fetchEnquiries();
                } catch {
                  toast.dismiss(t.id);
                  toast.error("Failed to delete enquiry");
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>

            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { position: "top-right", duration: 6000 }
    );
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-6 sticky top-0 bg-gray-100 py-4 z-10">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-gray-500">
              🔄 Auto updating every 5 seconds
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <p>Loading enquiries...</p>
        ) : enquiries.length === 0 ? (
          <p className="text-center py-16 text-gray-500">
            📭 No enquiries yet.
          </p>
        ) : (
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Product</th>
                  <th className="border px-4 py-2">Message</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.map((e) => (
                  <tr key={e._id}>
                    <td className="border px-4 py-2">{e.name}</td>
                    <td className="border px-4 py-2">{e.product}</td>
                    <td className="border px-4 py-2">{e.message}</td>
                    <td className="border px-4 py-2">
                      {new Date(e.createdAt).toLocaleString()}
                    </td>
                    <td className="border px-4 py-2">
                      {e.isRead ? "Read" : "Unread"}
                    </td>
                    <td className="border px-4 py-2 flex gap-2">
                      {!e.isRead && (
                        <button
                          onClick={() => markRead(e._id)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                        >
                          Mark Read
                        </button>
                      )}
                      <button
                        onClick={() => deleteEnquiry(e._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
