import { Upload, Download, Eye, Loader } from "lucide-react";

export default function BulkImportModals({
  showBulkModal,
  setShowBulkModal,
  showErrorModal,
  setShowErrorModal,
  showViewModal,
  setShowViewModal,
  bulkFile,
  setBulkFile,
  bulkLoading,
  bulkError,
  setBulkError,
  errorDetails,
  uploadedData,
  onDownloadTemplate,
  onDownloadSampleData,
  onBulkUpload,
}) {
  return (
    <>
      {/* ERROR DETAILS MODAL */}
      {showErrorModal && errorDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="px-6 py-4 border-b border-red-200 bg-red-50 flex justify-between items-center sticky top-0">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚠️</span>
                <div>
                  <h3 className="text-lg font-semibold text-red-900">Import Failed</h3>
                  <p className="text-sm text-red-700">
                    {errorDetails.message || "Please fix the errors below"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowErrorModal(false);
                }}
                className="text-red-600 hover:text-red-800 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              {errorDetails.errors && Array.isArray(errorDetails.errors) && (
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-red-900 mb-3">
                      Found {errorDetails.errors.length} error(s):
                    </p>
                    <div className="max-h-96 overflow-y-auto space-y-2">
                      {errorDetails.errors.map((error, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-white border border-red-100 rounded"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 text-xs font-bold">
                              {error.row}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">Row {error.row}</p>
                            <p className="text-sm text-red-600 mt-1">{error.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-2">How to fix:</p>
                    <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                      <li>Review the errors listed above</li>
                      <li>Update your Excel file with the correct data</li>
                      <li>Make sure all required fields are filled</li>
                      <li>Try uploading again</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3 sticky bottom-0 bg-white">
              <button
                onClick={() => {
                  setShowErrorModal(false);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowErrorModal(false);
                  setShowBulkModal(true);
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BULK IMPORT MODAL */}
      {showBulkModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Bulk Import Products</h3>
              <button
                onClick={() => {
                  setShowBulkModal(false);
                  setBulkError(null);
                  setBulkFile(null);
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 space-y-4">
              {/* Error Alert */}
              {bulkError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-xl">⚠️</span>
                    <span className="text-red-700 font-medium text-sm">{bulkError}</span>
                  </div>
                  <button
                    onClick={() => setBulkError(null)}
                    className="text-red-600 hover:text-red-800"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Download Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={onDownloadTemplate}
                  disabled={bulkLoading}
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 font-medium transition disabled:opacity-50"
                >
                  {bulkLoading ? (
                    <Loader size={18} className="animate-spin" />
                  ) : (
                    <Download size={18} />
                  )}
                  Template
                </button>
                <button
                  onClick={onDownloadSampleData}
                  disabled={bulkLoading}
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 font-medium transition disabled:opacity-50"
                >
                  {bulkLoading ? (
                    <Loader size={18} className="animate-spin" />
                  ) : (
                    <Download size={18} />
                  )}
                  Sample Data
                </button>
              </div>

              {/* File Upload Section */}
              <div className="space-y-3 border-t pt-4">
                <label className="block text-sm font-semibold text-gray-900">Upload Excel File</label>
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    accept=".xlsx,.xls,.csv"
                    onChange={(e) => {
                      setBulkFile(e.target.files?.[0] || null);
                      setBulkError(null);
                    }}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 cursor-pointer transition"
                  >
                    <Upload size={20} className="text-gray-600" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900">
                        {bulkFile ? bulkFile.name : "Choose file or drag and drop"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {bulkFile ? `${(bulkFile.size / 1024).toFixed(2)} KB` : ".xlsx, .xls, .csv"}
                      </p>
                    </div>
                  </label>
                </div>

                {/* File Info */}
                {bulkFile && (
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <p className="text-sm font-medium text-green-900">{bulkFile.name}</p>
                        <p className="text-xs text-green-700">{(bulkFile.size / 1024).toFixed(2)} KB</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setBulkFile(null)}
                      className="text-green-600 hover:text-green-800 text-lg"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* View Uploaded Data */}
              {uploadedData && (
                <button
                  onClick={() => setShowViewModal(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 font-medium transition"
                >
                  <Eye size={18} />
                  View Uploaded Data
                </button>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowBulkModal(false);
                  setBulkError(null);
                  setBulkFile(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition"
              >
                Cancel
              </button>
              <button
                onClick={onBulkUpload}
                disabled={!bulkFile || bulkLoading}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {bulkLoading && <Loader size={16} className="animate-spin" />}
                {bulkLoading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW UPLOADED DATA MODAL */}
      {showViewModal && uploadedData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">Uploaded Products</h3>
              <button
                onClick={() => setShowViewModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="px-6 py-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Product Name</th>
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2 text-left">Price</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(uploadedData) &&
                      uploadedData.map((item, idx) => (
                        <tr key={idx} className="border-t hover:bg-gray-50">
                          <td className="px-4 py-2">{item.name || item.product_name || "-"}</td>
                          <td className="px-4 py-2">{item.category || "-"}</td>
                          <td className="px-4 py-2">₹{item.price || "-"}</td>
                          <td className="px-4 py-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                              Imported
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
