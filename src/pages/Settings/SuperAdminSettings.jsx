import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import PageMeta from "../../components/common/PageMeta";

export default function SuperAdminSettings() {
  const [tabs, setTabs] = useState([
    { id: "dashboard", name: "Dashboard", enabled: true, icon: "📊" },
    { id: "products", name: "Products", enabled: true, icon: "📦" },
    { id: "categories", name: "Categories", enabled: true, icon: "🏷️" },
    { id: "pos-orders", name: "POS Orders", enabled: true, icon: "🛒" },
    { id: "orders", name: "Orders", enabled: true, icon: "📋" },
    { id: "users", name: "Users", enabled: true, icon: "👥" },
    { id: "staff", name: "Staff Attendance", enabled: true, icon: "📅" },
  ]);

  const [admins, setAdmins] = useState([
    { id: 1, name: "Admin User 1", email: "admin1@example.com", status: "active" },
    { id: 2, name: "Admin User 2", email: "admin2@example.com", status: "active" },
    { id: 3, name: "Admin User 3", email: "admin3@example.com", status: "inactive" },
  ]);

  const [newAdminForm, setNewAdminForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showAddAdmin, setShowAddAdmin] = useState(false);

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

  const handleToggleTab = (id) => {
    const updated = tabs.map((tab) =>
      tab.id === id ? { ...tab, enabled: !tab.enabled } : tab
    );
    setTabs(updated);
    localStorage.setItem("tab_access", JSON.stringify(updated));
  };

  const handleEnableAllTabs = () => {
    const updated = tabs.map((tab) => ({ ...tab, enabled: true }));
    setTabs(updated);
    localStorage.setItem("tab_access", JSON.stringify(updated));
  };

  const handleDisableAllTabs = () => {
    const updated = tabs.map((tab) => ({ ...tab, enabled: false }));
    setTabs(updated);
    localStorage.setItem("tab_access", JSON.stringify(updated));
  };

  const handleAddAdmin = () => {
    if (!newAdminForm.name || !newAdminForm.email || !newAdminForm.password) {
      toast.error("Please fill all fields");
      return;
    }

    const newAdmin = {
      id: admins.length + 1,
      name: newAdminForm.name,
      email: newAdminForm.email,
      status: "active",
    };

    setAdmins([...admins, newAdmin]);
    setNewAdminForm({ name: "", email: "", password: "" });
    setShowAddAdmin(false);
    toast.success("Admin added successfully!");
  };

  const handleToggleAdminStatus = (id) => {
    const updated = admins.map((admin) =>
      admin.id === id
        ? { ...admin, status: admin.status === "active" ? "inactive" : "active" }
        : admin
    );
    setAdmins(updated);
  };

  const handleDeleteAdmin = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      setAdmins(admins.filter((admin) => admin.id !== id));
    }
  };

  return (
    <>
      <PageMeta
        title="Super Admin Settings | Admin Dashboard"
        description="Super Admin control panel for managing tabs and admins"
      />

      <div className="space-y-8">
        {/* Header */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Super Admin Control Panel</h1>
          <p className="mt-2 text-gray-600">
            Manage admin access, tabs, and system settings
          </p>
        </div>

        {/* Tab Access Control Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Tab Access Control</h2>
            <p className="mt-1 text-sm text-gray-600">
              Enable or disable tabs for all admin users
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mb-6 flex gap-3">
            <button
              onClick={handleEnableAllTabs}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm"
            >
              ✓ Enable All Tabs
            </button>
            <button
              onClick={handleDisableAllTabs}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium text-sm"
            >
              ✕ Disable All Tabs
            </button>
          </div>

          {/* Tab Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{tab.icon}</span>
                    <h3 className="font-semibold text-gray-900">{tab.name}</h3>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {tab.enabled ? "✓ Enabled" : "✗ Disabled"}
                  </p>
                </div>

                {/* Toggle Switch */}
                <button
                  onClick={() => handleToggleTab(tab.id)}
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
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Active Tabs:</strong> {tabs.filter((t) => t.enabled).length} / {tabs.length}
            </p>
          </div>
        </div>

        {/* Admin Management Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Admin Management</h2>
              <p className="mt-1 text-sm text-gray-600">
                Create and manage admin users
              </p>
            </div>
            <button
              onClick={() => setShowAddAdmin(!showAddAdmin)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
            >
              + Add New Admin
            </button>
          </div>

          {/* Add Admin Form */}
          {showAddAdmin && (
            <div className="mb-6 p-4 border border-blue-200 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Create New Admin</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Admin Name
                  </label>
                  <input
                    type="text"
                    value={newAdminForm.name}
                    onChange={(e) =>
                      setNewAdminForm({ ...newAdminForm, name: e.target.value })
                    }
                    placeholder="Enter admin name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={newAdminForm.email}
                    onChange={(e) =>
                      setNewAdminForm({ ...newAdminForm, email: e.target.value })
                    }
                    placeholder="Enter email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={newAdminForm.password}
                    onChange={(e) =>
                      setNewAdminForm({ ...newAdminForm, password: e.target.value })
                    }
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleAddAdmin}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm"
                  >
                    Create Admin
                  </button>
                  <button
                    onClick={() => setShowAddAdmin(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition font-medium text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Admins Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{admin.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{admin.email}</td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          admin.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {admin.status === "active" ? "✓ Active" : "✗ Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm space-x-2">
                      <button
                        onClick={() => handleToggleAdminStatus(admin.id)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs font-medium"
                      >
                        {admin.status === "active" ? "Deactivate" : "Activate"}
                      </button>
                      <button
                        onClick={() => handleDeleteAdmin(admin.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-xs font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Admin Count */}
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-900">
              <strong>Total Admins:</strong> {admins.length} ({admins.filter((a) => a.status === "active").length} active)
            </p>
          </div>
        </div>

        {/* System Info Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">System Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Total Admins</p>
              <p className="text-2xl font-bold text-gray-900">{admins.length}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Active Tabs</p>
              <p className="text-2xl font-bold text-gray-900">{tabs.filter((t) => t.enabled).length}/{tabs.length}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Active Admins</p>
              <p className="text-2xl font-bold text-gray-900">{admins.filter((a) => a.status === "active").length}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Last Updated</p>
              <p className="text-2xl font-bold text-gray-900">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
