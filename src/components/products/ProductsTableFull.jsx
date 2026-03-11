import { PencilIcon, TrashBinIcon } from "../../icons";
import StatusBadge from "./StatusBadge";

export default function ProductsTableFull({
  products,
  loading,
  onEdit,
  onDelete,
  onSections,
  currentPage,
  totalPages,
  onPageChange,
  perPage,
  onPerPageChange,
}) {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center justify-center gap-3">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <p className="text-gray-500 font-medium">No products found</p>
            <p className="text-gray-400 text-sm">Try adjusting your search or add a new product</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <th className="px-6 py-4 text-left font-semibold text-gray-700">S No</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Image</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Product Name</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Category</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Price</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Sections</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, idx) => (
              <tr
                key={p.id}
                className="border-b border-gray-100 hover:bg-blue-50 transition duration-200"
              >
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-semibold text-sm">
                    {(currentPage - 1) * perPage + idx + 1}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {p.image_url ? (
                    <img
                      src={p.image_url}
                      alt={p.name}
                      className="w-14 h-14 rounded-xl object-cover border border-gray-200 hover:shadow-lg transition"
                      onError={(e) => {
                        e.target.src = "/logo/noimage.jfif";
                      }}
                    />
                  ) : (
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400 font-medium">
                      No Image
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-900 truncate max-w-xs">{p.name}</p>
                </td>
                <td className="px-6 py-4">
                  {p.category_main ? (
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500 text-sm">{p.category_main}</span>
                      <span className="text-gray-300">/</span>
                      <span className="font-medium text-gray-800 text-sm">{p.category_name}</span>
                    </div>
                  ) : (
                    <span className="font-medium text-gray-800 text-sm">{p.category_name || "-"}</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-lg bg-green-100 text-green-700 font-semibold text-sm">
                    ₹{p.final_price}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={p.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {p.sections && p.sections.length > 0 ? (
                      <>
                        {p.sections.slice(0, 2).map((section) => (
                          <span
                            key={section.id}
                            className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-semibold"
                          >
                            {section.name}
                          </span>
                        ))}
                        {p.sections.length > 2 && (
                          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 font-semibold">
                            +{p.sections.length - 2}
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-gray-400 text-xs">—</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(p)}
                      className="px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition flex items-center gap-1"
                    >
                      <PencilIcon className="w-4 h-4" />
                      Edit
                    </button>
                    {/* <button
                      type="button"
                      onClick={() => onSections(p)}
                      className="px-3 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition"
                    >
                      Sections
                    </button> */}
                    <button
                      type="button"
                      onClick={() => onDelete(p.id)}
                      className="px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <TrashBinIcon className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* PAGE SIZE SELECTOR */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Show</span>
            <select
              value={perPage}
              onChange={(e) => onPerPageChange(Number(e.target.value))}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm font-medium text-gray-700">entries per page</span>
          </div>

          {/* PAGINATION CONTROLS */}
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              ← Prev
            </button>

            <div className="flex items-center gap-1">
              {currentPage > 3 && (
                <>
                  <button
                    onClick={() => onPageChange(1)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    1
                  </button>
                  {currentPage > 4 && <span className="px-2 py-2 text-gray-400">...</span>}
                </>
              )}

              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition transform hover:scale-110 ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {currentPage < totalPages - 2 && (
                <>
                  {currentPage < totalPages - 3 && <span className="px-2 py-2 text-gray-400">...</span>}
                  <button
                    onClick={() => onPageChange(totalPages)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next →
            </button>
          </div>

          {/* PAGE INFO */}
          <div className="text-sm text-gray-600 font-medium">
            Page <span className="font-bold text-gray-900">{currentPage}</span> of{" "}
            <span className="font-bold text-gray-900">{totalPages}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
