import { getRequiredRole } from "@/lib/core/session";
import { LayoutProps } from "@/types";

const UserLayout = async({children}: LayoutProps) => {
    await getRequiredRole("user");
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;