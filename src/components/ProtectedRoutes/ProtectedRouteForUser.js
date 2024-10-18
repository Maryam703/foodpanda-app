import { useNavigate } from 'react-router-dom';

function ProtectedRouteForUser({children}) {
    let user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    if (user.role === ("user" || "admin")) {
        return {children}
    }else{
        navigate("/login")
    }
}

export default ProtectedRouteForUser;