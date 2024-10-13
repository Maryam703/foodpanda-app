import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRouteForRider({children}) {
    let user = JSON.parses(localStorage.getItem("user"));
    const navigate = useNavigate();

    if (user.role === "rider") {
        return {children}
    }else{
        navigate("/login")
    }
}

export default ProtectedRouteForRider;