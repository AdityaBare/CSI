;
import { useEffect } from "react";
import EventCount from "./EventCount";
import Events from "./Events";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Home() {

   const navigate = useNavigate();
 useEffect(() => {
   const auth = async ()=>{
   await  axios.get("http://localhost:8080/admin/auth", {
    withCredentials: true,
  })
  .then(res => {
     if(!res.data.success){
       navigate("/login");
     }
  })
  .catch(err => {
     navigate("/login");
  });
   }

   auth();
}, []);

    return ( 
        <>
          <Navbar/>
          <EventCount/>
          <Events/>
          
        </>
     );
}

export default Home;