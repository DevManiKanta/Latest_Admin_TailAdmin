

import { useEffect, useRef, useState } from "react";

export default function ProductCard({ product, onClick }) {
  const images = product.image_url ? [{ image_url: product.image_url }] : [];

  const variants = product.variants || [];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startHover = () => {
    if (images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 900);
  };

  const stopHover = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setIndex(0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div
      onMouseEnter={startHover}
      onMouseLeave={stopHover}
      onClick={() => onClick(product)}
      // className="bg-white rounded-xl border cursor-pointer hover:shadow-lg transition overflow-hidden w-[100px] h-[108px] flex flex-col"
      className="bg-white rounded-xl border cursor-pointer hover:shadow-lg transition overflow-hidden w-[100px] h-[120px]  flex flex-col"
    >
      {/* IMAGE */}
      <div className="relative h-12 bg-gray-100 flex-shrink-0">
        {images.length > 0 ? (
          <img
            src={images[index]?.image_url}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 text-[10px]">
            No Image
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="p-2 flex flex-col gap-1">
        <div>
          <h4 className="text-[10px] font-medium leading-tight line-clamp-2">{product.name}</h4>

          <p className="text-[11px] font-semibold">
            ₹ {variants?.[0]?.price || 0}
          </p>
        </div>
{/* 
        <p className="text-[10px] text-gray-500">
          {variants?.length || 0} variants
        </p> */}
      </div>
    </div>
  );
}


