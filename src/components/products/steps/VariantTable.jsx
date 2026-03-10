import { useRef } from "react";

export default function VariantTable({ variants, data, setData }) {
  const fileInputRefs = useRef({});

  const handleInputChange = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    setData(updated);
  };

  const handleImageUpload = (index, files) => {
    const updated = [...data];
    updated[index] = {
      ...updated[index],
      images: [...(updated[index]?.images || []), ...Array.from(files)],
    };
    setData(updated);
  };

  const removeImage = (index, imgIndex) => {
    const updated = [...data];
    updated[index].images = updated[index].images.filter(
      (_, i) => i !== imgIndex
    );
    setData(updated);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-800">Variant Details</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2 text-left">Variant</th>
              <th className="px-4 py-2 text-left">SKU</th>
              <th className="px-4 py-2 text-left">Purchase Price</th>
              <th className="px-4 py-2 text-left">Sell Price</th>
              <th className="px-4 py-2 text-left">Discount %</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Low Qty Alert</th>
              <th className="px-4 py-2 text-left">Images</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-800">
                  {variant}
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    className="input text-sm"
                    placeholder="SKU"
                    value={data[index]?.sku || ""}
                    onChange={(e) =>
                      handleInputChange(index, "sku", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    className="input text-sm"
                    placeholder="0.00"
                    value={data[index]?.purchase_price || ""}
                    onChange={(e) =>
                      handleInputChange(index, "purchase_price", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    className="input text-sm"
                    placeholder="0.00"
                    value={data[index]?.price || ""}
                    onChange={(e) =>
                      handleInputChange(index, "price", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    className="input text-sm"
                    placeholder="0"
                    value={data[index]?.discount || ""}
                    onChange={(e) =>
                      handleInputChange(index, "discount", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    className="input text-sm"
                    placeholder="0"
                    value={data[index]?.qty || ""}
                    onChange={(e) =>
                      handleInputChange(index, "qty", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    className="input text-sm"
                    placeholder="0"
                    value={data[index]?.low_qty || ""}
                    onChange={(e) =>
                      handleInputChange(index, "low_qty", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2 items-center">
                    <button
                      type="button"
                      onClick={() =>
                        fileInputRefs.current[index]?.click()
                      }
                      className="px-2 py-1 text-xs bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                      Upload
                    </button>
                    <input
                      ref={(el) => (fileInputRefs.current[index] = el)}
                      type="file"
                      accept="image/*"
                      multiple
                      hidden
                      onChange={(e) =>
                        handleImageUpload(index, e.target.files)
                      }
                    />
                    <span className="text-xs text-gray-500">
                      {data[index]?.images?.length || 0}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* IMAGE PREVIEW */}
      <div className="space-y-3">
        {variants.map((variant, index) => (
          data[index]?.images?.length > 0 && (
            <div key={index} className="space-y-2">
              <p className="text-sm font-medium text-gray-700">{variant}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {data[index].images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative rounded-lg overflow-hidden border"
                  >
                    <img
                      src={URL.createObjectURL(img)}
                      alt="variant"
                      className="h-20 w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index, imgIndex)}
                      className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
