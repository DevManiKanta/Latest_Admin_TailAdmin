import { useState, useRef, useEffect } from "react";

export default function VariantSelect({
  label,
  options,
  selected,
  onChange,
  disabled,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) =>
      ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleToggle = (option) => {
    const isSelected = selected.some((s) => s.id === option.id);
    if (isSelected) {
      onChange(selected.filter((s) => s.id !== option.id));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="relative" ref={ref}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <button
        type="button"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        className="input mt-1 flex justify-between items-center w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="text-sm">
          {selected.length > 0
            ? `${selected.length} selected`
            : "Select options"}
        </span>
        <span>▾</span>
      </button>

      {open && !disabled && (
        <div className="absolute z-40 w-full mt-1 border bg-white shadow-lg max-h-52 overflow-y-auto rounded-lg">
          {options.length > 0 ? (
            options.map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-2 px-3 py-2 hover:bg-indigo-50 cursor-pointer transition"
              >
                <input
                  type="checkbox"
                  checked={selected.some((s) => s.id === option.id)}
                  onChange={() => handleToggle(option)}
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600"
                />
                <span className="text-sm">{option.value}</span>
                {option.color_code && (
                  <div
                    className="w-4 h-4 rounded border border-gray-300"
                    style={{ backgroundColor: option.color_code }}
                  />
                )}
              </label>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No options available
            </div>
          )}
        </div>
      )}
    </div>
  );
}
