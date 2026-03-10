export default function StatusBadge({ status }) {
  const statusConfig = {
    active: {
      bg: "bg-green-100",
      text: "text-green-700",
      label: "Active",
    },
    inactive: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      label: "Inactive",
    },
    draft: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      label: "Draft",
    },
    archived: {
      bg: "bg-red-100",
      text: "text-red-700",
      label: "Archived",
    },
  };

  const config = statusConfig[status] || statusConfig.inactive;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-lg ${config.bg} ${config.text} font-semibold text-sm`}>
      {config.label}
    </span>
  );
}
