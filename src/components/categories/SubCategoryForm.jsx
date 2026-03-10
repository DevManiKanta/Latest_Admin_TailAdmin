import { useState } from "react";
import api from "../../utils/apiInstance";

export default function SubCategoryForm({ category, onClose, onSaved }) {
  const [subCategories, setSubCategories] = useState([""]);
  const [loading, setLoading] = useState(false);

  /* ADD FIELD */
  const addField = () => {
    setSubCategories([...subCategories, ""]);
  };

  /* REMOVE FIELD */
  const removeField = (index) => {
    setSubCategories(subCategories.filter((_, i) => i !== index));
  };

  /* CHANGE */
  const handleChange = (index, value) => {
    const updated = [...subCategories];
    updated[index] = value;
    setSubCategories(updated);
  };

  /* SUBMIT */
  const handleSubmit = async () => {
    const clean = subCategories.filter((v) => v.trim() !== "");
    if (!clean.length) return alert("Enter at least one sub category");

    try {
      setLoading(true);

      await api.post("/admin-dashboard/add-sub-category", {
        parent_id: category.id,
        subcategories: clean,
      });

      onSaved();
      onClose();
    } catch (e) {
      alert(e.response?.data?.message || "Failed to add sub categories");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* OVERLAY */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
      />

      {/* MODAL */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Add Sub-Categories
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Create sub-categories under <span className="font-semibold">{category.name}</span>
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
          <div className="px-6 py-6 space-y-4 max-h-[60vh] overflow-y-auto">
            {subCategories.map((value, i) => (
              <div key={i} className="flex gap-3 animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="flex-1">
                  <input
                    value={value}
                    onChange={(e) => handleChange(i, e.target.value)}
                    placeholder={`Sub-category ${i + 1}`}
                    className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                {subCategories.length > 1 && (
                  <button
                    onClick={() => removeField(i)}
                    className="h-11 w-11 flex items-center justify-center rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}

            {/* ADD MORE BUTTON */}
            <button
              onClick={addField}
              className="w-full h-11 border-2 border-dashed border-blue-300 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition flex items-center justify-center gap-2 mt-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add More
            </button>
          </div>

          {/* FOOTER */}
          <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
            <button 
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
              {loading ? "Saving..." : "Save Sub-Categories"}
            </button>
          </div>
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
    </>
  );
}
