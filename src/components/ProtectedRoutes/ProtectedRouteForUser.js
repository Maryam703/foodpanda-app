import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRouteForUser({children}) {
    let user = JSON.parses(localStorage.getItem("user"));
    const navigate = useNavigate();

    if (user.role === "user") {
        return {children}
    }else{
        navigate("/login")
    }
}

export default ProtectedRouteForUser;