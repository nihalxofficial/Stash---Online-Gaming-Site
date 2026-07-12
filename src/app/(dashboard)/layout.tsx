import DashboardNavbar from "@/components/Shared/DashboardNavbar";
import AdminSidebar from "@/components/Shared/AdminSidebar";
import { LayoutProps } from "@/types";

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#05060c] text-white flex flex-col">
      {/* Top Header Row Panel */}
      <DashboardNavbar />

      {/* Main Workspace Frame split into Columns */}
      <div className="flex flex-1 pt-16">
        
        {/* Left Hand: Sidebar column (Fixed to left view tracking 64 units / w-64) */}
        <AdminSidebar />

        {/* Right Hand: Dynamic Children Page Context */}
        <main className="flex-1 w-full min-h-full p-4 sm:p-6 lg:p-8 lg:pl-72 transition-all duration-300">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;