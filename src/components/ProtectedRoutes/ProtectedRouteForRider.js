import { useNavigate } from 'react-router-dom';

function ProtectedRouteForRider({children}) {
    let user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    if (user.role === ("rider" || "admin")) {
        return {children}
    }else{
        navigate("/login")
    }
}

export default ProtectedRouteForRider;