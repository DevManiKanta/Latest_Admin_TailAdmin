import { forwardRef, useImperativeHandle, useState } from "react";
import toast from "react-hot-toast";
import API from "../../../utils/apiInstance";

const StepMeta = forwardRef(({ productId }, ref) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const addTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags((prev) => [...prev, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  // 🔥 THIS WILL BE CALLED BY PARENT
  useImperativeHandle(ref, () => ({
    async saveStep() {
      console.log("SEO saveStep called"); // 🔥 debug
      if (!productId) {
        toast.error("Product ID missing");
        return false;
      }
      try {
        await API.post(`/admin-dashboard/product-seo-meta/${productId}`, {
          meta_title: title,
          meta_description: description,
          meta_tags: tags.join(","), // ✅ must be string
        });
        return true;
      } catch (err) {
        console.error(err);
        toast.error("Failed to save SEO meta");
        return false;
      }
    },
  }));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900">SEO Meta Information</h3>
        <p className="text-gray-600 mt-2">Optimize how this product appears on search engines</p>
      </div>

      {/* Meta Title */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-gray-800">Meta Title</label>
          <span className="text-xs font-medium text-gray-500">{title.length}/60</span>
        </div>
        <input
          type="text"
          maxLength={60}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter SEO title"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        />
        <p className="text-xs text-gray-500">Recommended: 50-60 characters for optimal display</p>
      </div>

      {/* Meta Description */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-gray-800">Meta Description</label>
          <span className="text-xs font-medium text-gray-500">{description.length}/160</span>
        </div>
        <textarea
          rows={4}
          maxLength={160}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter SEO description"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
        />
        <p className="text-xs text-gray-500">Recommended: 150-160 characters for optimal display</p>
      </div>

      {/* Meta Tags */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-gray-800">Meta Tags</label>
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={addTag}
          placeholder="Type tag & press Enter"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        />
        <p className="text-xs text-gray-500">Add relevant keywords separated by pressing Enter</p>
        
        {/* Tags Display */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium hover:shadow-md transition"
              >
                {tag}
                <button
                  onClick={() => removeTag(i)}
                  className="text-indigo-500 hover:text-indigo-700 transition font-bold"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

StepMeta.displayName = "StepMeta";

export default StepMeta;
