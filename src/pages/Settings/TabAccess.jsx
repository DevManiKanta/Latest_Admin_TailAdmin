import React, { useState, useEffect } from "react";
import PageMeta from "../../components/common/PageMeta";
import api from "../../utils/apiInstance";

export default function TabAccess() {
  const [tabs, setTabs] = useState([
    { id: "dashboard", name: "Dashboard", enabled: true },
    { id: "products", name: "Products", enabled: true },
    { id: "categories", name: "Categories", enabled: true },
    { id: "pos-orders", name: "POS Orders", enabled: true },
    { id: "orders", name: "Orders", enabled: true },
    { id: "users", name: "Users", enabled: true },
    { id: "staff", name: "Staff Attendance", enabled: true },
    { id: "settings", name: "Settings", enabled: true },
  ]);

  const [loading, setLoading] = useState(false);

  // Load tab access from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tab_access");
    if (saved) {
      try {
        setTabs(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to load tab access:", err);
      }
    }
  }, []);

  const handleToggle = (id) => {
    const updated = tabs.map((tab) =>
      tab.id === id ? { ...tab, enabled: !tab.enabled } : tab
    );
    setTabs(updated);
    localStorage.setItem("tab_access", JSON.stringify(updated));
  };

  const handleEnableAll = () => {
    const updated = tabs.map((tab) => ({ ...tab, enabled: true }));
    setTabs(updated);
    localStorage.setItem("tab_access", JSON.stringify(updated));
  };

  const handleDisableAll = () => {
    const updated = tabs.map((tab) => ({ ...tab, enabled: false }));
    setTabs(updated);
    localStorage.setItem("tab_access", JSON.stringify(updated));
  };

  return (
    <>
      <PageMeta
        title="Tab Access Control | Admin Dashboard"
        description="Manage tab access for admin users"
      />

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Tab Access Control</h1>
          <p className="text-gray-600">
            Enable or disable access to different admin panel tabs
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-6 flex gap-3">
          <button
            onClick={handleEnableAll}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm"
          >
            Enable All
          </button>
          <button
            onClick={handleDisableAll}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium text-sm"
          >
            Disable All
          </button>
        </div>

        {/* Tab Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{tab.name}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {tab.enabled ? "✓ Enabled" : "✗ Disabled"}
                </p>
              </div>

              {/* Toggle Switch */}
              <button
                onClick={() => handleToggle(tab.id)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  tab.enabled ? "bg-green-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    tab.enabled ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>Enabled Tabs:</strong> {tabs.filter((t) => t.enabled).length} / {tabs.length}
          </p>
          <p className="text-xs text-blue-700 mt-2">
            Changes are saved automatically to local storage
          </p>
        </div>
      </div>
    </>
  );
}
