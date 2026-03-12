import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import StepBasic from "../../components/products/steps/StepBasic";
import StepGallery from "../../components/products/steps/StepGallery";
import StepVariation from "../../components/products/steps/StepVariation";
import StepMeta from "../../components/products/steps/StepMeta";
import StepTax from "../../components/products/steps/StepTax";
import { toast } from "react-hot-toast";
import API from "../../utils/apiInstance";

const STEPS = ["Basic", "Gallery", "Variation", "SEO", "Tax"];

export default function EditProductPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams();
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(!product);

  const galleryRef = useRef(null);
  const variationRef = useRef(null);
  const metaRef = useRef(null);
  const taxRef = useRef(null);

  /* ================= HANDLE MISSING PRODUCT ================= */
  useEffect(() => {
    if (!product && !pageLoading) {
      toast.error("Product not found");
      navigate("/products");
    }
  }, [product, pageLoading, navigate]);

  /* ================= INITIAL LOAD ================= */
  useEffect(() => {
    if (product) {
      setPageLoading(false);
    }
  }, [product]);

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
        setTimeout(() => navigate("/products"), 1200);
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

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel? Any unsaved changes will be lost.")) {
      navigate("/products");
    }
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mb-4">
            <svg className="w-6 h-6 text-indigo-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Horizontal Tab Navigation with Cancel Button */}
      <div className="sticky top-[73px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 overflow-x-auto flex-1">
              {STEPS.map((label, index) => {
                const tabStep = index + 1;
                const isActive = step === tabStep;
                const isCompleted = step > tabStep;

                return (
                  <button
                    key={label}
                    disabled={isCompleted}
                    onClick={() => !isCompleted && setStep(tabStep)}
                    className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-all duration-300 border-b-2 ${
                      isActive
                        ? "border-indigo-600 text-indigo-600 bg-indigo-50/50"
                        : isCompleted
                          ? "border-green-500 text-green-600 hover:bg-green-50/30 cursor-pointer"
                          : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50/50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${
                        isActive
                          ? "bg-indigo-600 text-white"
                          : isCompleted
                            ? "bg-green-500 text-white"
                            : "bg-gray-300 text-gray-600"
                      }`}>
                        {isCompleted ? "✓" : tabStep}
                      </span>
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              onClick={handleCancel}
              className="px-4 py-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition font-medium whitespace-nowrap flex items-center gap-1 ml-4"
            >
              ✕ Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Full Width Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-t-2xl" />

          {/* Content */}
          <div className="relative">
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

            {/* Footer Actions */}
            <div className="mt-12 pt-8 flex justify-between items-center border-t border-gray-200">
              <button
                disabled={step === 1 || loading}
                onClick={handleBack}
                className="px-4 py-2 rounded-lg text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Back
              </button>

              <button
                onClick={handleNext}
                disabled={loading}
                className={`px-6 py-2 rounded-lg text-sm text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                  ${
                    step === 5
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:brightness-110"
                      : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:brightness-110"
                  }
                `}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-3 h-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {step === 5 ? "Publishing..." : "Saving..."}
                  </span>
                ) : (
                  step === 5 ? "Publish Product" : "Next →"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
