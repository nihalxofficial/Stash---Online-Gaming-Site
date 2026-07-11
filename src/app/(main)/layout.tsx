import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { LayoutProps } from "@/types";

const MainLayout = ({children} : LayoutProps) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;