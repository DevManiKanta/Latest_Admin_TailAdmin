

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../utils/apiInstance";

export default function POSOrders() {
  const navigate = useNavigate();

  /* ================= STATE ================= */
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  /* ================= LOCAL COURIER ================= */
  const [localOpen, setLocalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [localCourier, setLocalCourier] = useState({
    partner: "",
    awb: "",
    tracking_url: "",
    shipping_amount: "",
  });

  /* ================= FETCH ORDERS ================= */
  const loadOrders = async (pageNum = 1, searchQuery = "") => {
    try {
      setLoading(true);
      const res = await api.get("/admin-dashboard/orders", {
        params: {
          page: pageNum,
          perPage,
          search: searchQuery,
        },
      });
      setOrders(res.data.data || []);
      setTotalPages(res.data.pagination?.totalPages || 1);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders(page, search);
  }, [page, perPage, search]);

  /* ================= SHIPROCKET ================= */
  const sendToShiprocket = async (orderId) => {
    if (!window.confirm("Send this order to Shiprocket?")) return;

    try {
      const res = await api.post(
        `/admin-dashboard/shiprocket/create/${orderId}`,
      );

      toast.success(`Shipment created! AWB: ${res.data.data?.awb_code || "-"}`);
      loadOrders();
    } catch (err) {
      toast.error(err.response?.data?.message || "Shiprocket failed");
    }
  };

  /* ================= LOCAL COURIER SAVE ================= */
  const saveLocalCourier = async () => {
    try {
      await api.post(
        `/admin-dashboard/orders/${selectedOrderId}/local-shipping`,
        localCourier,
      );

      toast.success("Local courier added");
      setLocalOpen(false);
      setLocalCourier({
        partner: "",
        awb: "",
        tracking_url: "",
        shipping_amount: "",
      });
      loadOrders(page, search);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed");
    }
  };

  /* ================= STATUS BADGE ================= */
  const shipmentBadge = (status) => {
    if (!status)
      return <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">Not shipped</span>;
    const map = {
      pending: "bg-yellow-100 text-yellow-700",
      created: "bg-blue-100 text-blue-700",
      shipped: "bg-indigo-100 text-indigo-700",
      delivered: "bg-green-100 text-green-700",
      cancelled: "bg-red-100 text-red-700",
    };
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${map[status] || "bg-gray-100 text-gray-700"}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  /* ================= UI ================= */
  return (
    <div className="space-y-6">
      {/* SEARCH SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="relative">
            <input
              placeholder="Search by order ID, customer name, or phone..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full h-12 px-4 pl-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Show</span>
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(+e.target.value);
              setPage(1);
            }}
            className="h-12 px-4 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            {[5, 10, 20, 50].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <span className="text-sm font-medium text-gray-700">per page</span>
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
        {/* LOADING STATE */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-blue-600 animate-spin"></div>
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">Loading orders...</p>
              <p className="text-gray-500 text-sm mt-1">Please wait while we fetch your data</p>
            </div>
          </div>
        ) : orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" />
            </svg>
            <div className="text-center">
              <p className="text-gray-700 font-medium">No orders found</p>
              <p className="text-gray-500 text-sm mt-1">Try adjusting your search criteria</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">#</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Order ID</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Customer</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Phone</th>
                  <th className="px-6 py-4 text-right font-semibold text-gray-700">Amount</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Shipment Status</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((o, i) => (
                  <tr 
                    key={o.id} 
                    className="border-b border-gray-100 hover:bg-blue-50 transition duration-200 animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-semibold text-sm">
                        {(page - 1) * perPage + i + 1}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm">
                        ORD-{o.id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">{o.user?.name || "-"}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-600">{o.user?.phone || "-"}</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                        ₹{o.total_amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        {shipmentBadge(o.shipment_status)}
                        {o.awb_code && (
                          <div className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            AWB: {o.awb_code}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => navigate(`/pos/orders/${o.id}`)}
                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* PAGINATION SECTION */}
      {!loading && orders.length > 0 && totalPages > 1 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* RESULTS INFO */}
            <div className="text-sm text-gray-600 font-medium">
              Page <span className="font-bold text-gray-900">{page}</span> of <span className="font-bold text-gray-900">{totalPages}</span>
            </div>

            {/* PAGINATION CONTROLS */}
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                ← Prev
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {/* First Page */}
                {page > 3 && (
                  <>
                    <button
                      onClick={() => setPage(1)}
                      className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                      1
                    </button>
                    {page > 4 && <span className="px-2 py-2 text-gray-400">...</span>}
                  </>
                )}

                {/* Page Range */}
                {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (page <= 3) {
                    pageNum = i + 1;
                  } else if (page >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = page - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition transform hover:scale-110 ${
                        page === pageNum
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Last Page */}
                {page < totalPages - 2 && (
                  <>
                    {page < totalPages - 3 && <span className="px-2 py-2 text-gray-400">...</span>}
                    <button
                      onClick={() => setPage(totalPages)}
                      className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>

              {/* Next Button */}
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOCAL COURIER MODAL */}
      {localOpen && (
        <>
          {/* OVERLAY */}
          <div
            onClick={() => setLocalOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
          />

          {/* MODAL */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
              {/* HEADER */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Add Local Courier</h2>
                  <p className="text-sm text-gray-500 mt-1">Enter shipping details</p>
                </div>
                <button
                  onClick={() => setLocalOpen(false)}
                  className="h-10 w-10 rounded-full hover:bg-gray-200 flex items-center justify-center text-xl text-gray-600 transition"
                >
                  ✕
                </button>
              </div>

              {/* BODY */}
              <div className="px-6 py-6 space-y-4">
                {["partner", "awb", "tracking_url", "shipping_amount"].map((f, idx) => (
                  <div key={f} className="animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {f.replace(/_/g, " ")}
                    </label>
                    <input
                      placeholder={`Enter ${f.replace(/_/g, " ")}`}
                      value={localCourier[f]}
                      onChange={(e) =>
                        setLocalCourier({
                          ...localCourier,
                          [f]: e.target.value,
                        })
                      }
                      className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
                <button
                  onClick={() => setLocalOpen(false)}
                  className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={saveLocalCourier}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Save Courier
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
