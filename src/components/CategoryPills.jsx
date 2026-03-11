import { useState, useRef } from "react";

export default function CategoryPills({ items, active, onChange }) {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  const itemsPerPage = 6;

  const itemsArray = items || [];
  const totalPages = Math.ceil(itemsArray.length / itemsPerPage);
  const paginatedItems = itemsArray.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  return (
    <div className="space-y-3">
      {/* CAROUSEL */}
      <div className="flex items-center justify-center gap-2">
        {/* LEFT ARROW */}
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className="flex-shrink-0 p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition bg-white h-10 w-10 flex items-center justify-center font-bold text-gray-600"
        >
          ◀
        </button>

        {/* CAROUSEL CONTAINER */}
        <div
          ref={containerRef}
          className="flex gap-3 flex-1 overflow-hidden justify-center"
        >
          {paginatedItems.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onChange(item.id)}
                className={`
                  flex flex-col items-center justify-center
                  w-[100px] h-[120px]
                  px-2 py-3
                  rounded-xl border-2 transition flex-shrink-0
                  ${
                    isActive
                      ? "bg-blue-50 border-blue-600 shadow-md"
                      : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  }
                `}
              >
                {/* IMAGE */}
                <div
                  className={`
                    w-14 h-14 rounded-full
                    overflow-hidden
                    border-2 flex items-center justify-center
                    ${isActive ? "border-blue-600 shadow-sm" : "border-gray-200"}
                  `}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs">
                      N/A
                    </div>
                  )}
                </div>

                {/* LABEL */}
                <span className="text-[11px] mt-2 font-semibold leading-tight text-center line-clamp-2 text-gray-700">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className="flex-shrink-0 p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition bg-white h-10 w-10 flex items-center justify-center font-bold text-gray-600"
        >
          ▶
        </button>
      </div>

      {/* BULLET INDICATORS */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-2 rounded-full transition ${
                i === currentPage
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
