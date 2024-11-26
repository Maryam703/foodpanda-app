import { useNavigate } from 'react-router-dom';
import {useEffect, useState } from "react"

function ProtectedRouteForRider({children}) {
    const navigate = useNavigate();
    const [currUser , setCurrUser ] = useState(null)

    useEffect(() => { 
        let user = JSON.parse(localStorage.getItem("user"));
        setCurrUser(user)
    }, [])

    if (currUser?.role === "rider") {
        return children
    }else{
        navigate("/login")
    }
}

export default ProtectedRouteForRider;