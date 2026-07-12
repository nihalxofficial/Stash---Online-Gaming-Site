import DashboardNavbar from "@/components/Shared/DashboardNavbar";
import { LayoutProps } from "@/types";


const DashboardLayout = ({children}: LayoutProps) => {
    return (
        <div>
            <DashboardNavbar/>
            {children} 
        </div>
    );
};

export default DashboardLayout;