import Navbar from "@/components/Shared/Navbar";
import { LayoutProps } from "@/types";

const MainLayout = ({children} : LayoutProps) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default MainLayout;