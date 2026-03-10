import { useState } from "react";
import API from "../utils/apiInstance";
import { toast } from "react-hot-toast";

export default function BulkAddVariation({ variationId, onClose, reload }) {
  const [values, setValues] = useState([""]);
  const [loading, setLoading] = useState(false);

  const addMore = () => {
    setValues([...values, ""]);
  };

  const updateValue = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const removeValue = (index) => {
    setValues(values.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      for (const value of values) {
        if (!value.trim()) continue;
        await API.post(`/admin-dashboard/add-variation-value/${variationId}`, {
          value: value,
        });
      }
      toast.success("Values added successfully");
      reload();
      onClose();
    } catch (err) {
      if (err.response?.data?.errors) {
        toast.error(err.response.data.errors);
      } else {
        toast.error("Failed to save");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[500px] rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">Bulk Add Values</h2>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {values.map((val, index) => (
            <div key={index} className="flex gap-2">
              <input
                value={val}
                onChange={(e) => updateValue(index, e.target.value)}
                placeholder={`Value ${index + 1}`}
                className="input flex-1"
              />
              {values.length > 1 && (
                <button
                  onClick={() => removeValue(index)}
                  className="text-red-500 hover:text-red-700 px-2"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={addMore}
          className="text-indigo-600 text-sm hover:underline"
        >
          + Add More
        </button>
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save All"}
          </button>
        </div>
      </div>
    </div>
  );
}
