import { useEffect, useState } from "react";
import api from "../../utils/apiInstance";

export default function CategoryForm({ data, onClose, onSave }) {
  const [form, setForm] = useState({
    name: "",
    parent_id: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [parents, setParents] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= LOAD PARENTS ================= */
  useEffect(() => {
    api
      .get("/admin-dashboard/list-category", { params: { perPage: 100 } })
      .then((res) => {
        const mainCats = res.data.data.filter(
          (c) => !c.parent_id && c.id !== data?.id,
        );
        setParents(mainCats);
      });
  }, [data]);

  /* ================= EDIT MODE ================= */
  useEffect(() => {
    if (data) {
      setForm({
        name: data.name || "",
        parent_id: data.parent_id || "",
        image: null,
      });
      setPreview(data.full_image_url || null);
    }
  }, [data]);

  /* ================= HANDLERS ================= */
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleImage = (file) => {
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    const fd = new FormData();
    fd.append("name", form.name);
    if (form.parent_id) fd.append("parent_id", form.parent_id);
    if (form.image) fd.append("image", form.image);

    setLoading(true);
    await onSave(fd, data?.id);
    setLoading(false);
  };

  /* ================= UI ================= */
  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
      />

      {/* DRAWER */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* HEADER */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-50 to-slate-100 z-10 px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {data ? "Edit Category" : "Create New Category"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {data ? "Update category details" : "Add a new product category"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="h-10 w-10 rounded-full hover:bg-gray-200 flex items-center justify-center text-xl text-gray-600 transition"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* IMAGE UPLOAD */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Category Image</label>

            <label className="group cursor-pointer block">
              <div className="relative w-full h-48 rounded-2xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden transition hover:border-blue-400 hover:bg-blue-50">
                {preview ? (
                  <>
                    <img src={preview} className="w-full h-full object-cover" alt="preview" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
                      Change Image
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium text-gray-700">Click to upload image</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP up to 5MB</p>
                  </div>
                )}
              </div>

              <input
                type="file"
                hidden
                onChange={(e) => handleImage(e.target.files[0])}
              />
            </label>
          </div>

          {/* CATEGORY NAME */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Category Name</label>
            <input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="e.g., Electronics, Clothing, Home & Garden"
              className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <p className="text-xs text-gray-500 mt-2">Enter a descriptive name for this category</p>
          </div>

          {/* PARENT CATEGORY */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Parent Category (Optional)</label>
            <select
              value={form.parent_id}
              onChange={(e) => handleChange("parent_id", e.target.value)}
              className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            >
              <option value="">Main Category</option>
              {parents.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-2">Select a parent to create a sub-category</p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            disabled={loading || !form.name.trim()}
            onClick={handleSubmit}
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
            {loading ? "Saving..." : "Save Category"}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
