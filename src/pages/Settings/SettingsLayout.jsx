import { Outlet } from "react-router";
import SettingsSidebar from "../../pages/Charts/SettingsSidebar";

export default function SettingsLayout() {
  return (
    <div className="flex gap-6">
      <SettingsSidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
