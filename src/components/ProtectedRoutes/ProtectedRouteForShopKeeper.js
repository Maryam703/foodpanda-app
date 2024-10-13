import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRouteForShopKeeper({children}) {
    let user = JSON.parses(localStorage.getItem("user"));
    const navigate = useNavigate();

    if (user.role === "shopKeeper") {
        return {children}
    }else{
        navigate("/login")
    }
}

export default ProtectedRouteForShopKeeper;