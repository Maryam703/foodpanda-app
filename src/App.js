import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import myAxios from './MyAxios';

function App() {
  const [currUser, setCurrUser] = useState(null)

  useEffect(() => {
    const fetchingData = async() => {
      let res = await myAxios.get("/user/get-user");
      let { user } = res.data;
      setCurrUser(user)
    }

    fetchingData()
  }, [])

  return (
    <>
    <Header currUser={currUser}/>
    <Outlet />
    </>
  );
}

export default App;
