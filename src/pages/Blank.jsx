// import React from "react";
// import PageBreadcrumb from "../components/common/PageBreadCrumb";
// import PageMeta from "../components/common/PageMeta";

// export default function Blank() {
//   return (
//     <div>
//       <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
//         <div className="mx-auto w-full max-w-[630px] text-center">
//           <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
//             Card Title Here
//           </h3>

//           <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
//             Category page 
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CategoryForm from ".././components/categories/CategoryForm";
import SubCategoryForm from ".././components/categories/SubCategoryForm";
import useDynamicTitle from "../hooks/useDynamicTitle";
import api from "../utils/apiInstance";

const PAGE_SIZES = [5, 10, 20];

export default function Blank() {
  useDynamicTitle("Categories");

  /* ================= STATE ================= */
  const [categories, setCategories] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const [openSubForm, setOpenSubForm] = useState(false);
  const [parentCategory, setParentCategory] = useState(null);

  /* 🔥 Parent autosuggest states */
  const [parentSearch, setParentSearch] = useState("");
  const [parentSuggestions, setParentSuggestions] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);

  /* ================= FETCH ================= */
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await api.get("/admin-dashboard/list-category", {
        params: { search, page, perPage },
      });
      const data = res?.data?.data;
      const pagination = res?.data?.pagination;
      setCategories(Array.isArray(data) ? data : []);
      setTotalPages(
        typeof pagination?.totalPages === "number" ? pagination.totalPages : 1
      );
    } catch (e) {
      setCategories([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [search, page, perPage]);

  const safeCategories = Array.isArray(categories) ? categories : [];

  /* ================= AUTO SUGGEST ================= */
  useEffect(() => {
    if (!parentSearch.trim()) {
      setParentSuggestions([]);
      return;
    }

    const parents = safeCategories.filter(
      (c) =>
        !c.parent_id &&
        c.name.toLowerCase().includes(parentSearch.toLowerCase()),
    );

    setParentSuggestions(parents);
  }, [parentSearch, categories]);

  /* ================= CRUD ================= */
  const handleAdd = () => {
    setEditData(null);
    setOpenForm(true);
  };

  const handleEdit = (cat) => {
    setEditData(cat);
    setOpenForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this category?")) return;
    try {
      await api.delete(`/admin-dashboard/delete-category/${id}`);
      fetchCategories();
    } catch (e) {
      toast.error(e.response?.data?.message || "Delete failed");
    }
  };

  const handleSave = async (formData, id) => {
    try {
      if (id) {
        await api.post(`/admin-dashboard/update-category/${id}`, formData);
      } else {
        await api.post("/admin-dashboard/add-category", formData);
      }
      setOpenForm(false);
      setEditData(null);
      fetchCategories();
    } catch (e) {
      toast.error(e.response?.data?.message || "Save failed");
    }
  };

  const handleAddSubCategory = (cat) => {
    setParentCategory(cat);
    setOpenSubForm(true);
  };

  /* ================= FILTER RESULT ================= */
  const displayedCategories = selectedParent
    ? safeCategories.filter(
        (c) => c.id === selectedParent.id || c.parent_id === selectedParent.id,
      )
    : safeCategories;

  /* ================= UI ================= */
  return (
    <div className="space-y-6">
      {/* SEARCH & FILTER SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Search */}
        <div className="lg:col-span-2">
          <div className="relative">
            <input
              placeholder="Search categories..."
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

        {/* Parent Category Filter */}
        <div className="relative">
          <input
            value={parentSearch}
            onChange={(e) => {
              setParentSearch(e.target.value);
              setSelectedParent(null);
            }}
            placeholder="Filter by parent..."
            className="w-full h-12 px-4 pl-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
          <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>

          {parentSuggestions.length > 0 && (
            <div className="absolute z-30 bg-white border border-gray-200 rounded-xl shadow-lg w-full mt-2 max-h-56 overflow-auto">
              {parentSuggestions.map((p, idx) => (
                <div
                  key={p.id}
                  onClick={() => {
                    setSelectedParent(p);
                    setParentSearch(p.name);
                    setParentSuggestions([]);
                  }}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition animate-fade-in"
                  style={{ animationDelay: `${idx * 30}ms` }}
                >
                  <p className="font-medium text-gray-900">{p.name}</p>
                  <p className="text-xs text-gray-500">Parent Category</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Button */}
        <button
          onClick={handleAdd}
          className="h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Category
        </button>
      </div>

      {/* ACTIVE FILTER BADGE */}
      {selectedParent && (
        <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl animate-fade-in">
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-900">
              Filtering by parent: <span className="font-bold">{selectedParent.name}</span>
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedParent(null);
              setParentSearch("");
            }}
            className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-sm font-medium transition"
          >
            Clear Filter
          </button>
        </div>
      )}

      {/* CATEGORIES TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
        {/* TABLE HEADER */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Image</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Category Name</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Parent Category</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan="4" className="text-center py-16">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                      <p className="text-gray-500 font-medium">Loading categories...</p>
                    </div>
                  </td>
                </tr>
              )}

              {!loading && displayedCategories.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-16">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <p className="text-gray-500 font-medium">No categories found</p>
                      <p className="text-gray-400 text-sm">Try adjusting your search or add a new category</p>
                    </div>
                  </td>
                </tr>
              )}

              {!loading && displayedCategories.map((cat, idx) => (
                <tr 
                  key={cat.id} 
                  className="border-b border-gray-100 hover:bg-blue-50 transition duration-200 animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <td className="px-6 py-4">
                    <div className="w-16 h-16 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 hover:shadow-lg transition">
                      {cat.full_image_url ? (
                        <img src={cat.full_image_url} className="w-full h-full object-cover" alt={cat.name} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 font-medium">
                          No Image
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">{cat.name}</p>
                    {cat.parent_id && (
                      <p className="text-xs text-gray-500 mt-1">Sub-category</p>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {cat.parent_name ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                        {cat.parent_name}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                        Main Category
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(cat)}
                        className="px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        Delete
                      </button>

                      {!cat.parent_id && (
                        <button
                          onClick={() => handleAddSubCategory(cat)}
                          className="px-3 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg transition"
                        >
                          Add Sub
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PAGINATION SECTION */}
      {totalPages > 1 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* PAGE SIZE SELECTOR */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Show</span>
              <select
                value={perPage}
                onChange={(e) => {
                  setPerPage(+e.target.value);
                  setPage(1);
                }}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                {PAGE_SIZES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <span className="text-sm font-medium text-gray-700">entries per page</span>
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

            {/* PAGE INFO */}
            <div className="text-sm text-gray-600 font-medium">
              Page <span className="font-bold text-gray-900">{page}</span> of <span className="font-bold text-gray-900">{totalPages}</span>
            </div>
          </div>
        </div>
      )}

      {/* MODALS */}
      {openForm && (
        <CategoryForm
          data={editData}
          onClose={() => setOpenForm(false)}
          onSave={handleSave}
        />
      )}

      {openSubForm && parentCategory && (
        <SubCategoryForm
          category={parentCategory}
          onClose={() => setOpenSubForm(false)}
          onSaved={fetchCategories}
        />
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

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

/* ================= IMAGE ================= */
function CategoryImage({ image }) {
  return (
    <div className="w-16 h-16 border rounded-xl bg-gray-100 overflow-hidden">
      {image ? (
        <img src={image} className="w-full h-full object-cover" alt="category" />
      ) : (
        <div className="text-xs text-gray-400 flex items-center justify-center h-full">
          No Image
        </div>
      )}
    </div>
  );
}
