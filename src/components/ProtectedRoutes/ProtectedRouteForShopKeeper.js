import { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRouteForShopKeeper({children}) {
    const navigate = useNavigate();
    const [currUser , setCurrUser ] = useState(null)

    useEffect(() => { 
        let user = JSON.parse(localStorage.getItem("user"));
        setCurrUser(user)
    }, [])

    if (currUser?.role === ("shopkeeper" || "admin")) {
        return children
    }else{
        navigate("/login")
    }
}

export default ProtectedRouteForShopKeeper;