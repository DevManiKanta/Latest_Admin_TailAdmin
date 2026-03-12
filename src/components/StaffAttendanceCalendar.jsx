import { useEffect, useMemo, useState } from "react";
import api from "../utils/apiInstance";
import toast from "react-hot-toast";

export default function StaffAttendanceCalendar() {
  const [activeTab, setActiveTab] = useState("attendance");

  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    id: null,
    name: "",
    phone: "",
    email: "",
    role: "employee",
    status: "active",
  });

  /* ================= STAFF ================= */
  const [staffList, setStaffList] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const [salaryModalOpen, setSalaryModalOpen] = useState(false);
  const [selectedStaffForSalary, setSelectedStaffForSalary] = useState(null);

  const [salaryForm, setSalaryForm] = useState({
    currentSalary: "",
    newSalary: "",
    effective_from: "",
  });

  /* ================= ADD STAFF DRAWER ================= */
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [staffForm, setStaffForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: "Staff",
    salary: "",
    joining_date: "",
  });

  /* ================= ATTENDANCE ================= */
  const [attendance, setAttendance] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [attendanceForm, setAttendanceForm] = useState({
    status: "present",
    inTime: "",
    outTime: "",
    otAmount: "",
  });

  const attendanceData = attendance[selectedStaff] || {};

  const summary = useMemo(() => {
    let present = 0;
    let absent = 0;
    let leave = 0;
    let ot = 0;

    Object.values(attendanceData).forEach((record) => {
      if (record.status === "present") present++;
      if (record.status === "absent") absent++;
      if (record.status === "leave") leave++;
      if (record.status === "ot") ot++;
    });

    return {
      totalDays: present + absent + leave + ot,
      present,
      absent,
      leave,
      ot,
    };
  }, [attendanceData]);

  const totalOTAmount = useMemo(() => {
    return Object.values(attendanceData).reduce((total, record) => {
      return total + (Number(record.ot_amount) || 0);
    }, 0);
  }, [attendanceData]);

  /* ================= CALENDAR LOGIC ================= */
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = useMemo(() => {
    const arr = [];
    for (let i = 0; i < firstDay; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) arr.push(d);
    return arr;
  }, [firstDay, daysInMonth]);

  const formatDate = (day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0",
    )}`;

  /* ================= FETCH STAFF ================= */
  const fetchStaff = async () => {
    try {
      const res = await api.get("/admin-dashboard/staff");
      const staffData = Array.isArray(res.data?.data) ? res.data.data : [];
      setStaffList(staffData);

      if (staffData.length && !selectedStaff) {
        setSelectedStaff(staffData[0].id);
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const openSalaryModal = (staff) => {
    setSelectedStaffForSalary(staff);

    setSalaryForm({
      currentSalary: staff.current_salary?.salary || "",
      newSalary: "",
      effective_from: "",
    });

    setSalaryModalOpen(true);
  };

  const selectedStaffObj = Array.isArray(staffList)
    ? staffList.find((s) => s.id === selectedStaff)
    : null;

  const monthlySalary = selectedStaffObj?.current_salary?.salary || 0;

  // Per day based on total calendar days
  const perDaySalary =
    monthlySalary && daysInMonth ? monthlySalary / daysInMonth : 0;

  // Deduction for absent
  const deduction = perDaySalary * summary.absent;

  // Final amount = salary - deduction + OT
  const finalAmount = monthlySalary - deduction + totalOTAmount;

  /* ================= Edit STAFF ================= */
  const openEditDrawer = (staff) => {
    setEditForm({
      id: staff.id,
      name: staff.name,
      phone: staff.phone,
      email: staff.email,
      role: staff.role,
      status: staff.status || "active",
    });

    setEditDrawerOpen(true);
  };

  /* ================= ADD STAFF ================= */
  const addStaff = async () => {
    if (
      !staffForm.name ||
      !staffForm.phone ||
      !staffForm.email ||
      !staffForm.salary ||
      !staffForm.joining_date
    ) {
      toast.error("Please fill all required fields", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#ef4444",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        icon: "⚠️",
      });
      return;
    }

    try {
      const res = await api.post("/admin-dashboard/add-staff", {
        name: staffForm.name,
        phone: staffForm.phone,
        email: staffForm.email,
        password: "123123",
        role: staffForm.role === "Manager" ? "employeer" : "employee",
        salary: staffForm.salary,
        joining_date: staffForm.joining_date,
      });

      if (res.data.success) {
        toast.success("Staff added successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#10b981",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
            fontSize: "14px",
            fontWeight: "500",
          },
          icon: "✓",
        });

        setDrawerOpen(false);
        setStaffForm({
          name: "",
          phone: "",
          email: "",
          role: "Staff",
          salary: "",
          joining_date: "",
        });
        fetchStaff();
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.response?.data?.message || "Failed to add staff";
      
      toast.error(errorMessage, {
        duration: 5000,
        position: "top-right",
        style: {
          background: "#ef4444",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        icon: "✕",
      });
    }
  };

  /* ================= UPDATE EMPLOYEE ================= */
  const updateStaff = async () => {
    try {
      const res = await api.post(`/admin-dashboard/update-staff/${editForm.id}`, {
        name: editForm.name,
        phone: editForm.phone,
        email: editForm.email,
        role: editForm.role,
        status: editForm.status,
      });

      if (res.data.success) {
        toast.success("Staff updated successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#10b981",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
            fontSize: "14px",
            fontWeight: "500",
          },
          icon: "✓",
        });

        setEditDrawerOpen(false);
        fetchStaff();
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.response?.data?.message || "Failed to update staff";
      
      toast.error(errorMessage, {
        duration: 5000,
        position: "top-right",
        style: {
          background: "#ef4444",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        icon: "✕",
      });
    }
  };

  /* ================= UPDATE SALARY LOGIC ================= */
  const updateSalary = async () => {
    if (!salaryForm.newSalary || !salaryForm.effective_from) {
      toast.error("Please fill all required fields", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#ef4444",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        icon: "⚠️",
      });
      return;
    }

    try {
      const res = await api.post("/admin-dashboard/update-salary", {
        user_id: selectedStaffForSalary.id,
        salary: salaryForm.newSalary,
        effective_from: salaryForm.effective_from,
      });

      if (res.data.success) {
        toast.success("Salary updated successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#10b981",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
            fontSize: "14px",
            fontWeight: "500",
          },
          icon: "✓",
        });

        setSalaryModalOpen(false);
        fetchStaff();
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.response?.data?.message || "Failed to update salary";
      
      toast.error(errorMessage, {
        duration: 5000,
        position: "top-right",
        style: {
          background: "#ef4444",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        icon: "✕",
      });
    }
  };

  /* ================= FETCH ATTENDANCE ================= */
  useEffect(() => {
    if (!selectedStaff) return;

    const fetchAttendance = async () => {
      try {
        const res = await api.get("/admin-dashboard/attendance", {
          params: {
            user_id: selectedStaff,
            month: `${year}-${String(month + 1).padStart(2, "0")}`,
          },
        });

        setAttendance((prev) => ({
          ...prev,
          [selectedStaff]: res.data.data,
        }));
      } catch (err) {
      }
    };

    fetchAttendance();
  }, [selectedStaff, currentMonth]);

  /* ================= ATTENDANCE POPUP ================= */
  const openPopup = (day) => {
    const existing = attendance[selectedStaff]?.[formatDate(day)];

    setSelectedDay(day);
    setAttendanceForm(
      existing
        ? {
            status: existing.status,
            inTime: existing.in_time || "",
            outTime: existing.out_time || "",
            otAmount: existing.ot_amount || "", // ✅ ADD THIS
          }
        : { status: "present", inTime: "", outTime: "", otAmount: "" },
    );
    setPopupOpen(true);
  };

  const saveAttendance = async () => {
    try {
      const res = await api.post("/admin-dashboard/attendance", {
        user_id: selectedStaff,
        date: formatDate(selectedDay),
        status: attendanceForm.status,
        in_time: attendanceForm.inTime,
        out_time: attendanceForm.outTime,
        ot_amount:
          attendanceForm.status === "ot" ? attendanceForm.otAmount : null,
      });

      if (res.data.success) {
        toast.success("Attendance saved successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#10b981",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
            fontSize: "14px",
            fontWeight: "500",
          },
          icon: "✓",
        });

        setAttendance((prev) => ({
          ...prev,
          [selectedStaff]: {
            ...prev[selectedStaff],
            [formatDate(selectedDay)]: {
              status: attendanceForm.status,
              in_time: attendanceForm.inTime,
              out_time: attendanceForm.outTime,
              ot_amount: attendanceForm.otAmount,
            },
          },
        }));

        setPopupOpen(false);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.response?.data?.message || "Failed to save attendance";
      
      toast.error(errorMessage, {
        duration: 5000,
        position: "top-right",
        style: {
          background: "#ef4444",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        icon: "✕",
      });
    }
  };

  const getStatusColor = (obj) => {
    if (!obj) return "";

    switch (obj.status) {
      case "present":
        return "bg-green-100 text-green-700";

      case "absent":
        return "bg-red-100 text-red-700";

      case "leave":
        return "bg-yellow-100 text-yellow-700";

      case "ot":
        return "bg-blue-100 text-blue-700"; // ✅ OT color

      case "c_off":
        return "bg-purple-100 text-purple-700"; // ✅ C-Off color

      default:
        return "";
    }
  };

  /* ================= PAGINATION ================= */
  const [staffPage, setStaffPage] = useState(1);
  const [staffPerPage, setStaffPerPage] = useState(10);
  const staffTotalPages = Math.ceil(staffList.length / staffPerPage);
  const paginatedStaff = staffList.slice(
    (staffPage - 1) * staffPerPage,
    staffPage * staffPerPage
  );
  return (
    <div className="space-y-6">
      {/* TABS */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-1 flex gap-1 w-fit animate-fade-in">
        {["attendance", "staff"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium capitalize rounded-lg transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-lg"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab === "attendance" ? "📅 Attendance" : "👥 Staff"}
          </button>
        ))}
      </div>

      {/* ================= ATTENDANCE TAB ================= */}
      {activeTab === "attendance" && (
        <div className="space-y-6">
          {/* STAFF SELECTOR & MONTH NAVIGATION */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              {/* STAFF SELECT */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Staff</label>
                <select
                  value={selectedStaff || ""}
                  onChange={(e) => setSelectedStaff(Number(e.target.value))}
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  {staffList.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* MONTH NAVIGATION */}
              <div className="flex items-center gap-3 justify-center">
                <button
                  onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}
                  className="h-11 w-11 border border-gray-200 rounded-lg hover:bg-gray-50 transition flex items-center justify-center"
                >
                  ◀
                </button>

                <span className="font-semibold text-gray-900 min-w-[200px] text-center">
                  {currentMonth.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>

                <button
                  onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}
                  className="h-11 w-11 border border-gray-200 rounded-lg hover:bg-gray-50 transition flex items-center justify-center"
                >
                  ▶
                </button>
              </div>

              {/* TODAY BUTTON */}
              <button
                onClick={() => setCurrentMonth(new Date())}
                className="h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                Today
              </button>
            </div>
          </div>

          {/* PAYROLL SUMMARY */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { label: "Total Days", value: daysInMonth, color: "bg-blue-50" },
              { label: "Present", value: summary.present, color: "bg-green-50" },
              { label: "Absent", value: summary.absent, color: "bg-red-50" },
              { label: "Leave", value: summary.leave, color: "bg-yellow-50" },
              { label: "OT Days", value: summary.ot, color: "bg-purple-50" },
              { label: "Monthly Salary", value: `₹${monthlySalary}`, color: "bg-blue-100" },
              { label: "Deduction", value: `₹${deduction.toFixed(2)}`, color: "bg-red-100" },
              { label: "OT Amount", value: `₹${totalOTAmount.toFixed(2)}`, color: "bg-purple-100" },
              { label: "Final Payable", value: `₹${finalAmount.toFixed(2)}`, color: "bg-green-100" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.color} rounded-lg p-2 min-w-max`}
              >
                <p className="text-xs text-gray-600 mb-1">{item.label}</p>
                <p className="text-lg font-bold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>

          {/* CALENDAR */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-fade-in">
            <div className="grid grid-cols-7 gap-2 text-center font-semibold text-sm mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="text-gray-600 py-2">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((day, i) =>
                day ? (
                  <div
                    key={i}
                    onClick={() => openPopup(day)}
                    className={`h-24 border-2 rounded-xl cursor-pointer p-2 hover:shadow-lg transition transform hover:scale-105 ${getStatusColor(
                      attendance[selectedStaff]?.[formatDate(day)],
                    )}`}
                  >
                    <div className="text-right font-bold text-lg">{day}</div>
                    <div className="mt-1 text-xs space-y-1">
                      {/* Status */}
                      <div className="capitalize font-semibold">
                        {attendance[selectedStaff]?.[formatDate(day)]?.status ||
                          "—"}
                      </div>

                      {/* Timing */}
                      {attendance[selectedStaff]?.[formatDate(day)]?.in_time &&
                        attendance[selectedStaff]?.[formatDate(day)]
                          ?.out_time && (
                          <div className="text-[10px] opacity-75">
                            {
                              attendance[selectedStaff]?.[formatDate(day)]
                                ?.in_time
                            }{" "}
                            -{" "}
                            {
                              attendance[selectedStaff]?.[formatDate(day)]
                                ?.out_time
                            }
                          </div>
                        )}

                      {/* OT Amount */}
                      {attendance[selectedStaff]?.[formatDate(day)]?.status ===
                        "ot" &&
                        attendance[selectedStaff]?.[formatDate(day)]
                          ?.ot_amount && (
                          <div className="text-[10px] font-bold">
                            ₹{" "}
                            {
                              attendance[selectedStaff]?.[formatDate(day)]
                                ?.ot_amount
                            }
                          </div>
                        )}
                    </div>
                  </div>
                ) : (
                  <div key={i}></div>
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= STAFF TAB ================= */}
      {activeTab === "staff" && (
        <div className="space-y-6">
          {/* HEADER */}
          <div className="flex justify-between items-center animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900">Staff Directory</h2>
            <button
              onClick={() => setDrawerOpen(true)}
              className="h-12 bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl font-medium transition transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Staff
            </button>
          </div>

          {/* STAFF TABLE */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">#</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Phone</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Email</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Role</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Salary</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedStaff.map((s, idx) => (
                    <tr
                      key={s.id}
                      className="border-b border-gray-100 hover:bg-blue-50 transition duration-200 animate-fade-in"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-semibold text-sm">
                          {(staffPage - 1) * staffPerPage + idx + 1}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">{s.name}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{s.phone}</td>
                      <td className="px-6 py-4 text-gray-600">{s.email}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                          {s.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                          ₹{s.current_salary?.salary ?? "—"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {s.status ? (
                          <span
                            className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${
                              s.status === "active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                          </span>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openSalaryModal(s)}
                            className="px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          >
                            Salary
                          </button>
                          <button
                            onClick={() => openEditDrawer(s)}
                            className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PAGINATION */}
          {staffTotalPages > 1 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* PAGE SIZE */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">Show</span>
                  <select
                    value={staffPerPage}
                    onChange={(e) => {
                      setStaffPerPage(+e.target.value);
                      setStaffPage(1);
                    }}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  >
                    {[5, 10, 20].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <span className="text-sm font-medium text-gray-700">per page</span>
                </div>

                {/* PAGINATION CONTROLS */}
                <div className="flex items-center gap-2">
                  <button
                    disabled={staffPage === 1}
                    onClick={() => setStaffPage(staffPage - 1)}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    ← Prev
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, staffTotalPages) }).map((_, i) => {
                      let pageNum;
                      if (staffTotalPages <= 5) {
                        pageNum = i + 1;
                      } else if (staffPage <= 3) {
                        pageNum = i + 1;
                      } else if (staffPage >= staffTotalPages - 2) {
                        pageNum = staffTotalPages - 4 + i;
                      } else {
                        pageNum = staffPage - 2 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => setStaffPage(pageNum)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition transform hover:scale-110 ${
                            staffPage === pageNum
                              ? "bg-blue-600 text-white shadow-lg"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    disabled={staffPage === staffTotalPages}
                    onClick={() => setStaffPage(staffPage + 1)}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    Next →
                  </button>
                </div>

                {/* PAGE INFO */}
                <div className="text-sm text-gray-600 font-medium">
                  Page <span className="font-bold text-gray-900">{staffPage}</span> of <span className="font-bold text-gray-900">{staffTotalPages}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}


      {/* ================= ATTENDANCE POPUP ================= */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
            {/* GRADIENT HEADER */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <h3 className="text-2xl font-bold">
                {new Date(formatDate(selectedDay)).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </h3>
              <p className="text-blue-100 text-sm mt-1">{formatDate(selectedDay)}</p>
            </div>

            {/* FORM CONTENT */}
            <div className="p-6 space-y-5">
              {/* STATUS */}
              <div className="animate-fade-in" style={{ animationDelay: "50ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Attendance Status
                </label>
                <select
                  value={attendanceForm.status}
                  onChange={(e) => {
                    const status = e.target.value;
                    setAttendanceForm({
                      ...attendanceForm,
                      status,
                      inTime:
                        status === "present" || status === "ot"
                          ? attendanceForm.inTime
                          : "",
                      outTime:
                        status === "present" || status === "ot"
                          ? attendanceForm.outTime
                          : "",
                      otAmount: status === "ot" ? attendanceForm.otAmount : "",
                    });
                  }}
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="present">✓ Present</option>
                  <option value="absent">✕ Absent</option>
                  <option value="leave">📋 Leave</option>
                  <option value="ot">⏰ OT</option>
                  <option value="c_off">🎯 C-Off</option>
                </select>
              </div>

              {/* IN TIME */}
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  In Time
                </label>
                <input
                  type="time"
                  value={attendanceForm.inTime}
                  disabled={
                    attendanceForm.status !== "present" &&
                    attendanceForm.status !== "ot"
                  }
                  onChange={(e) =>
                    setAttendanceForm({
                      ...attendanceForm,
                      inTime: e.target.value,
                    })
                  }
                  className={`w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    attendanceForm.status !== "present" &&
                    attendanceForm.status !== "ot"
                      ? "bg-gray-50 cursor-not-allowed opacity-60"
                      : ""
                  }`}
                />
              </div>

              {/* OUT TIME */}
              <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Out Time
                </label>
                <input
                  type="time"
                  value={attendanceForm.outTime}
                  disabled={
                    attendanceForm.status !== "present" &&
                    attendanceForm.status !== "ot"
                  }
                  onChange={(e) =>
                    setAttendanceForm({
                      ...attendanceForm,
                      outTime: e.target.value,
                    })
                  }
                  className={`w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    attendanceForm.status !== "present" &&
                    attendanceForm.status !== "ot"
                      ? "bg-gray-50 cursor-not-allowed opacity-60"
                      : ""
                  }`}
                />
              </div>

              {/* OT AMOUNT */}
              {attendanceForm.status === "ot" && (
                <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    OT Extra Amount
                  </label>
                  <input
                    type="number"
                    placeholder="Enter OT amount"
                    value={attendanceForm.otAmount}
                    onChange={(e) =>
                      setAttendanceForm({
                        ...attendanceForm,
                        otAmount: e.target.value,
                      })
                    }
                    className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              )}
            </div>

            {/* ACTIONS */}
            <div className="bg-gray-50 px-6 py-4 flex gap-3 border-t border-gray-100">
              <button
                onClick={saveAttendance}
                className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
              >
                Save
              </button>
              <button
                onClick={() => setPopupOpen(false)}
                className="flex-1 h-11 border border-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= ADD STAFF DRAWER ================= */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* OVERLAY */}
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />

          {/* DRAWER */}
          <div className="w-full max-w-md bg-white h-full shadow-2xl overflow-y-auto animate-slide-in-up">
            {/* GRADIENT HEADER */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Add Staff</h3>
                  <p className="text-blue-100 text-sm mt-1">Create a new staff member</p>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="text-white hover:bg-blue-500 p-2 rounded-lg transition"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* FORM CONTENT */}
            <div className="p-6 space-y-5">
              {/* NAME */}
              <div className="animate-fade-in" style={{ animationDelay: "50ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  placeholder="Enter staff name"
                  value={staffForm.name}
                  onChange={(e) =>
                    setStaffForm({ ...staffForm, name: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* PHONE */}
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  placeholder="Enter phone number"
                  value={staffForm.phone}
                  onChange={(e) =>
                    setStaffForm({ ...staffForm, phone: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* EMAIL */}
              <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  placeholder="Enter email address"
                  value={staffForm.email}
                  onChange={(e) =>
                    setStaffForm({ ...staffForm, email: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* ROLE */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Role
                </label>
                <select
                  value={staffForm.role}
                  onChange={(e) =>
                    setStaffForm({ ...staffForm, role: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option>Staff</option>
                </select>
              </div>

              {/* SALARY */}
              <div className="animate-fade-in" style={{ animationDelay: "250ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Salary
                </label>
                <input
                  type="number"
                  placeholder="Enter salary"
                  value={staffForm.salary}
                  onChange={(e) =>
                    setStaffForm({ ...staffForm, salary: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* JOINING DATE */}
              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Joining Date
                </label>
                <input
                  type="date"
                  value={staffForm.joining_date}
                  onChange={(e) =>
                    setStaffForm({ ...staffForm, joining_date: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="bg-gray-50 px-6 py-4 flex gap-3 border-t border-gray-100 sticky bottom-0">
              <button
                onClick={addStaff}
                className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
              >
                Save
              </button>
              <button
                onClick={() => setDrawerOpen(false)}
                className="flex-1 h-11 border border-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ================= SALARY UPDATE MODAL ================= */}
      {salaryModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
            {/* GRADIENT HEADER */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Update Salary</h3>
              <p className="text-green-100 text-sm mt-1">{selectedStaffForSalary?.name}</p>
            </div>

            {/* FORM CONTENT */}
            <div className="p-6 space-y-5">
              {/* CURRENT SALARY */}
              <div className="animate-fade-in" style={{ animationDelay: "50ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Salary
                </label>
                <input
                  type="text"
                  value={`₹ ${salaryForm.currentSalary}`}
                  disabled
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm bg-gray-50 text-gray-600 cursor-not-allowed"
                />
              </div>

              {/* NEW SALARY */}
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Salary
                </label>
                <input
                  type="number"
                  placeholder="Enter new salary"
                  value={salaryForm.newSalary}
                  onChange={(e) =>
                    setSalaryForm({
                      ...salaryForm,
                      newSalary: e.target.value,
                    })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>

              {/* EFFECTIVE FROM */}
              <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Effective From
                </label>
                <input
                  type="date"
                  value={salaryForm.effective_from}
                  onChange={(e) =>
                    setSalaryForm({
                      ...salaryForm,
                      effective_from: e.target.value,
                    })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="bg-gray-50 px-6 py-4 flex gap-3 border-t border-gray-100">
              <button
                onClick={updateSalary}
                className="flex-1 h-11 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
              >
                Save
              </button>
              <button
                onClick={() => setSalaryModalOpen(false)}
                className="flex-1 h-11 border border-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDIT STAFF DRAWER ================= */}
      {editDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* OVERLAY */}
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setEditDrawerOpen(false)}
          />

          {/* DRAWER */}
          <div className="w-full max-w-md bg-white h-full shadow-2xl overflow-y-auto animate-slide-in-up">
            {/* GRADIENT HEADER */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Edit Staff</h3>
                  <p className="text-purple-100 text-sm mt-1">Update staff information</p>
                </div>
                <button
                  onClick={() => setEditDrawerOpen(false)}
                  className="text-white hover:bg-purple-500 p-2 rounded-lg transition"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* FORM CONTENT */}
            <div className="p-6 space-y-5">
              {/* NAME */}
              <div className="animate-fade-in" style={{ animationDelay: "50ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              {/* PHONE */}
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  value={editForm.phone}
                  onChange={(e) =>
                    setEditForm({ ...editForm, phone: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              {/* EMAIL */}
              <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm({ ...editForm, email: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              {/* ROLE */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Role
                </label>
                <select
                  value={editForm.role}
                  onChange={(e) =>
                    setEditForm({ ...editForm, role: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                >
                  <option value="employee">Staff</option>
                </select>
              </div>

              {/* STATUS */}
              <div className="animate-fade-in" style={{ animationDelay: "250ms" }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={editForm.status}
                  onChange={(e) =>
                    setEditForm({ ...editForm, status: e.target.value })
                  }
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="bg-gray-50 px-6 py-4 flex gap-3 border-t border-gray-100 sticky bottom-0">
              <button
                onClick={updateStaff}
                className="flex-1 h-11 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
              >
                Update
              </button>
              <button
                onClick={() => setEditDrawerOpen(false)}
                className="flex-1 h-11 border border-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= ANIMATIONS ================= */
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
  }

  .animate-scale-in {
    animation: scaleIn 0.3s ease-out forwards;
  }

  .animate-slide-in-up {
    animation: slideInUp 0.4s ease-out forwards;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
