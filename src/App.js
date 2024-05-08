import { useEffect, useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Employee from "./components/Employee";
import Addemployee from "./components/Addemployee";
function App() {
  const [user, setuser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("admintoken")) {
      setuser(true);
    } else {
      setuser(false);
    }
  }, [user]);

  // return <div>{user ? <Employee /> : <Login />}</div>;
  return <Addemployee/>

  
}

export default App;
