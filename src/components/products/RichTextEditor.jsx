import { useState } from "react";

export default function RichTextEditor({ value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const applyFormat = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex gap-1 p-2 bg-gray-100 rounded-t-lg border border-gray-300 flex-wrap">
        <button
          type="button"
          onClick={() => applyFormat("bold")}
          className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium"
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => applyFormat("italic")}
          className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium"
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => applyFormat("underline")}
          className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium"
          title="Underline"
        >
          <u>U</u>
        </button>
        <div className="border-l border-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => applyFormat("insertUnorderedList")}
          className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium"
          title="Bullet List"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => applyFormat("insertOrderedList")}
          className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium"
          title="Numbered List"
        >
          1. List
        </button>
        <div className="border-l border-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => applyFormat("createLink", prompt("Enter URL:"))}
          className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium"
          title="Link"
        >
          🔗 Link
        </button>
        <button
          type="button"
          onClick={() => applyFormat("removeFormat")}
          className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium"
          title="Clear Format"
        >
          ✕ Clear
        </button>
      </div>

      {/* Editor */}
      <div
        contentEditable
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full min-h-64 p-3 border rounded-b-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          isFocused ? "border-indigo-500" : "border-gray-300"
        }`}
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
        suppressContentEditableWarning
      >
        {value}
      </div>
    </div>
  );
}
