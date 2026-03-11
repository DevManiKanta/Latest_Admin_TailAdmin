import { useEffect, useState, useRef } from "react";
import API from "../utils/apiInstance";
import { toast } from "react-hot-toast";
import StepBasic from "./products/steps/StepBasic";
import StepGallery from "./products/steps/StepGallery";
import StepVariation from "./products/steps/StepVariation";
import StepMeta from "./products/steps/StepMeta";
import StepTax from "./products/steps/StepTax";

const STEPS = ["Basic", "Gallery", "Variation", "SEO", "Tax"];

export default function EditProductDrawer({ open, onClose, productId, product }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const galleryRef = useRef(null);
  const variationRef = useRef(null);
  const metaRef = useRef(null);
  const taxRef = useRef(null);

  /* ================= FETCH PRODUCT ================= */
  useEffect(() => {
    if (!open || !productId) {
      setPageLoading(true);
      return;
    }

    const fetchProduct = async () => {
      try {
        setPageLoading(true);
        // Product data is passed as prop, so we can use it directly
        // If needed, fetch additional details here
      } catch (err) {
        console.error("Failed to fetch product", err);
        toast.error("Failed to load product");
      } finally {
        setPageLoading(false);
      }
    };

    fetchProduct();
  }, [open, productId]);

  /* ================= RESET ON CLOSE ================= */
  useEffect(() => {
    if (!open) {
      setStep(1);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  const handleNext = async () => {
    if (loading) return;

    try {
      setLoading(true);

      if (step === 2 && galleryRef.current) {
        if (!(await galleryRef.current.saveStep())) return;
      }
      if (step === 3 && variationRef.current) {
        if (!(await variationRef.current.saveStep())) return;
      }
      if (step === 4 && metaRef.current) {
        if (!(await metaRef.current.saveStep())) return;
      }
      if (step === 5 && taxRef.current) {
        if (!(await taxRef.current.saveStep())) return;

        toast.success("Product updated successfully 🎉");
        setTimeout(onClose, 1200);
        return;
      }

      setStep((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (loading) return;
    setStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-[9999] flex">
        {/* LEFT SIDEBAR (20%) */}
        <div className="w-[20%] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-8 flex flex-col shadow-2xl">
          <h2 className="text-2xl font-semibold mb-2">Edit Product</h2>
          <p className="text-sm text-white/80 mb-10">
            Step {step} of {STEPS.length}
          </p>

          <div className="space-y-4 flex-1">
            {STEPS.map((label, index) => {
              const tabStep = index + 1;
              const isActive = step === tabStep;
              const isCompleted = step > tabStep;

              return (
                <button
                  key={label}
                  disabled={isCompleted}
                  onClick={() => !isCompleted && setStep(tabStep)}
                  className={`group w-full text-left px-4 py-3 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-white text-indigo-700 shadow-lg scale-105"
                        : isCompleted
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-white/10"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-semibold
                        ${
                          isActive ? "bg-indigo-600 text-white" : "bg-white/20"
                        }`}
                    >
                      {tabStep}
                    </div>
                    <span>{label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={onClose}
            className="text-sm text-white/80 hover:text-white"
          >
            ✕ Close
          </button>
        </div>

        {/* RIGHT SIDE (80%) */}
        <div
          className="w-[80%] overflow-y-auto px-8 py-8 
  bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100"
        >
          <div
            className="relative bg-white 
    rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
    border border-indigo-100 
    p-8 w-full transition-all duration-300"
          >
            {/* Soft Accent Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-t-2xl" />

            {/* CONTENT */}
            <div className="relative">
              {pageLoading ? (
                <div className="py-12 text-center text-gray-500">
                  Loading product...
                </div>
              ) : (
                <>
                  {step === 1 && product && (
                    <StepBasic 
                      productId={productId}
                      product={product}
                      isEdit={true}
                    />
                  )}
                  {step === 2 && (
                    <StepGallery ref={galleryRef} productId={productId} />
                  )}
                  {step === 3 && (
                    <StepVariation ref={variationRef} productId={productId} />
                  )}
                  {step === 4 && <StepMeta ref={metaRef} productId={productId} />}
                  {step === 5 && <StepTax ref={taxRef} productId={productId} />}

                  {/* FOOTER */}
                  <div className="mt-10 pt-6 flex justify-between items-center border-t border-indigo-100">
                    <button
                      disabled={step === 1}
                      onClick={handleBack}
                      className="px-6 py-2 rounded-lg text-gray-600 hover:bg-indigo-50 transition duration-200"
                    >
                      ← Back
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={loading}
                      className={`px-8 py-2 rounded-lg text-white font-medium shadow-md transition-all duration-300
            ${
              step === 5
                ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:brightness-110"
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:brightness-110"
            }
          `}
                    >
                      {loading
                        ? step === 5
                          ? "Updating..."
                          : "Saving..."
                        : step === 5
                          ? "Update Product"
                          : "Next →"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
