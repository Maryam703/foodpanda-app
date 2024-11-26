import { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRouteForShopKeeper({children}) {
    const [currUser , setCurrUser ] = useState(null);
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => { 
        if (user?.role !== "shopadmin") {
            navigate("/login")
        }

        setCurrUser(user)
    }, [])

    if (currUser?.role === "shopadmin") {
        return children;
    }else{
        return null
    }
}

export default ProtectedRouteForShopKeeper;