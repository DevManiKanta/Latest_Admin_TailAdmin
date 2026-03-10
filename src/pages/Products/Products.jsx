import { useEffect, useState, useCallback } from "react";
import API from "../../utils/apiInstance";
import AddProductDrawer from "../../components/AddProductDrawer";
import EditProductDrawer from "../../components/EditProductDrawer";
import ProductsTableFull from "../../components/products/ProductsTableFull";
import BulkImportModals from "../../components/products/BulkImportModals";
import PageMeta from "../../components/common/PageMeta";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import toast from "react-hot-toast";

export default function Products() {
  useDynamicTitle("Products");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [openSections, setOpenSections] = useState(false);
  const [selectedSectionProduct, setSelectedSectionProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Bulk Import States
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkFile, setBulkFile] = useState(null);
  const [bulkLoading, setBulkLoading] = useState(false);
  const [bulkError, setBulkError] = useState(null);
  const [uploadedData, setUploadedData] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorDetails, setErrorDetails] = useState(null);

  /* ================= FETCH PRODUCTS ================= */
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await API.get("/admin-dashboard/products", {
        params: {
          search: query || "",
          page,
          perPage,
        },
      });

      let productsData = [];
      let paginationData = { totalPages: 1 };

      if (Array.isArray(res.data)) {
        productsData = res.data;
      } else if (res.data.data && Array.isArray(res.data.data)) {
        productsData = res.data.data;
        paginationData = res.data.pagination || { totalPages: 1 };
      } else if (res.data.pagination) {
        productsData = res.data;
        paginationData = res.data.pagination;
      }

      setProducts(productsData);
      setTotalPages(paginationData.totalPages || 1);
    } catch (error) {
      toast.error("Failed to load products", {
        duration: 4000,
        position: "top-right",
      });
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [query, page, perPage]);

  /* ================= Delete ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await API.delete(`/admin-dashboard/delete-product/${id}`);
      toast.success("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  /* ================= BULK IMPORT ================= */
  const handleDownloadTemplate = async () => {
    try {
      setBulkLoading(true);
      const res = await API.get("/admin-dashboard/products-bulk-import/template", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "products_template.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      setBulkError("Failed to download template");
    } finally {
      setBulkLoading(false);
    }
  };

  const handleDownloadSampleData = () => {
    try {
      const link = document.createElement("a");
      link.href = "/final_test.xlsx";
      link.setAttribute("download", "final_test.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setBulkError("Failed to download sample data");
    }
  };

  const handleBulkUpload = async () => {
    if (!bulkFile) {
      setBulkError("Please select a file");
      return;
    }
    try {
      setBulkLoading(true);
      setBulkError(null);
      const formData = new FormData();
      formData.append("file", bulkFile);
      const res = await API.post("/admin-dashboard/products-bulk-import", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        setUploadedData(res.data.data);
        setBulkFile(null);
        setShowBulkModal(false);
        setTimeout(() => {
          toast.success(res.data.message || "Products imported successfully!", {
            duration: 5000,
            position: "top-right",
          });
          fetchProducts();
        }, 300);
      } else {
        setBulkError(res.data.message || "Upload failed");
        setErrorDetails(res.data);
        setShowBulkModal(false);
        setShowErrorModal(true);
      }
    } catch (err) {
      const errorResponse = err.response?.data;
      setBulkError(errorResponse?.message || "Failed to upload file");
      setErrorDetails(errorResponse);
      setShowBulkModal(false);
      setShowErrorModal(true);
    } finally {
      setBulkLoading(false);
    }
  };

  /* ================= LOAD ON CHANGE ================= */
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="space-y-6">
      <PageMeta
        title="Products | TailAdmin - Admin Dashboard"
        description="Manage your products efficiently"
      />

      {/* HEADER SECTION */}
      {/* <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Products</h1>
          <p className="text-slate-300">Manage and organize your product catalog</p>
        </div>
      </div> */}

      {/* SEARCH & ACTION BUTTONS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-2">
          <div className="relative">
            <input
              placeholder="Search products by name, category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 px-4 pl-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <svg
              className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <button
          onClick={() => {
            setQuery(search);
            setPage(1);
          }}
          className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => setOpenAdd(true)}
            className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add
          </button>
          <button
            onClick={() => setShowBulkModal(true)}
            className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Import
          </button>
        </div>
      </div>

      {/* PRODUCTS TABLE */}
      <ProductsTableFull
        products={products}
        loading={loading}
        onEdit={(product) => {
          setSelectedProduct(product);
          setOpenEdit(true);
        }}
        onDelete={handleDelete}
        onSections={(product) => {
          setSelectedSectionProduct(product);
          setOpenSections(true);
        }}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        perPage={perPage}
        onPerPageChange={(newPerPage) => {
          setPerPage(newPerPage);
          setPage(1);
        }}
      />

      {/* BULK IMPORT MODALS */}
      <BulkImportModals
        showBulkModal={showBulkModal}
        setShowBulkModal={setShowBulkModal}
        showErrorModal={showErrorModal}
        setShowErrorModal={setShowErrorModal}
        showViewModal={showViewModal}
        setShowViewModal={setShowViewModal}
        bulkFile={bulkFile}
        setBulkFile={setBulkFile}
        bulkLoading={bulkLoading}
        bulkError={bulkError}
        setBulkError={setBulkError}
        errorDetails={errorDetails}
        uploadedData={uploadedData}
        onDownloadTemplate={handleDownloadTemplate}
        onDownloadSampleData={handleDownloadSampleData}
        onBulkUpload={handleBulkUpload}
      />

      {/* DRAWERS */}
      <AddProductDrawer
        open={openAdd}
        onClose={() => {
          setOpenAdd(false);
          fetchProducts();
        }}
      />
      <EditProductDrawer
        open={openEdit}
        product={selectedProduct}
        productId={selectedProduct?.id}
        onClose={() => {
          setOpenEdit(false);
          setSelectedProduct(null);
          fetchProducts();
        }}
      />

      {/* SECTIONS DRAWER */}
      {openSections && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            onClick={() => setOpenSections(false)}
          />
          <div className="fixed right-0 top-0 h-full w-[450px] bg-white shadow-2xl z-50 p-6 overflow-y-auto transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Assign Sections</h2>
              <button
                onClick={() => setOpenSections(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl transition"
              >
                ✕
              </button>
            </div>
            {/* Add ProductSectionAssign component here */}
          </div>
        </>
      )}
    </div>
  );
}
