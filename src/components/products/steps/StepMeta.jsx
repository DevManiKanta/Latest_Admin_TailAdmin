import { forwardRef, useImperativeHandle, useState } from "react";
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
        alert("Product ID missing");
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
        alert("Failed to save SEO meta");
        return false;
      }
    },
  }));

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          SEO Meta Information
        </h3>
        <p className="text-sm text-gray-500">
          Optimize how this product appears on search engines
        </p>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Meta Title</label>
        <input
          className="input mt-1"
          maxLength={60}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter SEO title"
        />
        <p className="text-xs text-gray-400 mt-1">{title.length}/60</p>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Meta Description
        </label>
        <textarea
          rows={3}
          className="input mt-1"
          maxLength={160}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter SEO description"
        />
        <p className="text-xs text-gray-400 mt-1">{description.length}/160</p>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Meta Tags</label>
        <input
          className="input mt-1"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={addTag}
          placeholder="Type tag & press Enter"
        />
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium flex items-center gap-2"
            >
              {tag}
              <button
                onClick={() => removeTag(i)}
                className="hover:text-indigo-900 transition"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

StepMeta.displayName = "StepMeta";

export default StepMeta;
