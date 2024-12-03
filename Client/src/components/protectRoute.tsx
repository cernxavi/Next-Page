import { Navigate } from "react-router-dom";
import AuthService from "../utils/auth";

interface PrivateRouteProps {
    children: React.ReactNode;
}

const ProtectRoute: React.FC<PrivateRouteProps> = ({ children }: PrivateRouteProps) => {
    const loggedIn = AuthService.loggedIn();

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectRoute;