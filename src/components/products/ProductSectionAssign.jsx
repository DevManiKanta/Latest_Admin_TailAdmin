import { useState, useEffect } from "react";
import API from "../../utils/apiInstance";

export default function ProductSectionAssign({ product, onSaved }) {
  const [sections, setSections] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      fetchSections();
      setSelectedSections(product.sections?.map((s) => s.id) || []);
    }
  }, [product]);

  const fetchSections = async () => {
    try {
      const res = await API.get("/admin-dashboard/sections");
      setSections(res.data.data || []);
    } catch (error) {
      console.error("Failed to fetch sections", error);
    }
  };

  const handleToggleSection = (sectionId) => {
    setSelectedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await API.post(`/admin-dashboard/product/${product.id}/assign-sections`, {
        sectionIds: selectedSections,
      });
      onSaved();
    } catch (error) {
      console.error("Failed to assign sections", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {sections.map((section) => (
          <label
            key={section.id}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition"
          >
            <input
              type="checkbox"
              checked={selectedSections.includes(section.id)}
              onChange={() => handleToggleSection(section.id)}
              className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div>
              <p className="font-medium text-gray-900">{section.name}</p>
              <p className="text-sm text-gray-500">{section.description}</p>
            </div>
          </label>
        ))}
      </div>
      <button
        onClick={handleSave}
        disabled={loading}
        className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Sections"}
      </button>
    </div>
  );
}
