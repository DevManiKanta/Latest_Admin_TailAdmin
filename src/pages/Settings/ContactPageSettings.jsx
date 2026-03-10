import { useEffect, useState } from "react";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import API from "../../utils/apiInstance";
import { toast } from "react-hot-toast";
import { MapPin, Phone, Clock, Link as LinkIcon } from "lucide-react";

export default function ContactPageSettings() {
  useDynamicTitle("Contact Page Settings");

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState({
    title: "",
    description: "",
    address: "",
    phone_1: "",
    phone_2: "",
    working_days: "",
    working_hours: "",
    weekend_note: "",
    google_map_url: "",
  });

  /* -------- FETCH CONTACT SETTINGS -------- */
  const fetchContact = async () => {
    try {
      setLoading(true);
      const res = await API.get("/admin-dashboard/contact-setting");
      if (res.data?.status && res.data?.data) {
        setContact({
          title: res.data.data.title || "",
          description: res.data.data.description || "",
          address: res.data.data.address || "",
          phone_1: res.data.data.phone_1 || "",
          phone_2: res.data.data.phone_2 || "",
          working_days: res.data.data.working_days || "",
          working_hours: res.data.data.working_hours || "",
          weekend_note: res.data.data.weekend_note || "",
          google_map_url: res.data.data.google_map_url || "",
        });
      }
    } catch (err) {
      toast.error("Failed to load contact settings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  /* -------- HANDLE CHANGE -------- */
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  /* -------- SAVE CONTACT SETTINGS -------- */
  const handleSave = async () => {
    try {
      const res = await API.post("/admin-dashboard/contact-setting", contact);
      if (!res.data?.status) {
        toast.error(res.data?.errors || "Update failed");
        return;
      }
      toast.success(res.data?.message || "Contact settings updated");
      setEditMode(false);
      fetchContact();
    } catch (err) {
      toast.error(err.response?.data?.errors || "Update failed");
    }
  };

  if (loading) {
    return <div className="p-6 text-sm text-gray-500">Loading...</div>;
  }

  return (
    <div className="bg-white rounded-xl border p-6 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Contact Page Settings</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your contact information
          </p>
        </div>
        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* TITLE */}
        <div>
          <label className="text-sm font-medium text-gray-700">Title</label>
          <input
            name="title"
            value={contact.title}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Contact page title"
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-50"
          />
        </div>

        {/* ADDRESS */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            name="address"
            value={contact.address}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Your business address"
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-50"
          />
        </div>

        {/* PHONE 1 */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Primary Phone <span className="text-red-500">*</span>
          </label>
          <input
            name="phone_1"
            value={contact.phone_1}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="+1 (555) 000-0000"
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-50"
          />
        </div>

        {/* PHONE 2 */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Secondary Phone
          </label>
          <input
            name="phone_2"
            value={contact.phone_2}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="+1 (555) 000-0001"
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-50"
          />
        </div>

        {/* WORKING DAYS */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Working Days <span className="text-red-500">*</span>
          </label>
          <input
            name="working_days"
            value={contact.working_days}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Monday - Friday"
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-50"
          />
        </div>

        {/* WORKING HOURS */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Working Hours <span className="text-red-500">*</span>
          </label>
          <input
            name="working_hours"
            value={contact.working_hours}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="9:00 AM - 6:00 PM"
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-50"
          />
        </div>

        {/* WEEKEND NOTE */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Weekend Note
          </label>
          <input
            name="weekend_note"
            value={contact.weekend_note}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Closed on weekends"
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-50"
          />
        </div>

        {/* GOOGLE MAP URL */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Google Map URL
          </label>
          <input
            name="google_map_url"
            value={contact.google_map_url}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="https://maps.google.com/..."
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-50"
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={contact.description}
          onChange={handleChange}
          disabled={!editMode}
          rows="4"
          placeholder="Enter contact page description"
          className="w-full mt-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-50 resize-none"
        />
      </div>

      {/* INFO BOX */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">ℹ️ Note:</span> Fields marked with
          <span className="text-red-500 mx-1">*</span>are required. Make sure
          all contact information is accurate and up-to-date.
        </p>
      </div>
    </div>
  );
}
