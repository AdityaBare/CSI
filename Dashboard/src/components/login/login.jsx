import "./Login.css"
import axios from "axios"
import { useState } from "react";
function Login() {

    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const handleInput = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    

    const handelSubmit = async (e)=>{
        e.preventDefault();

        await axios.post("http://localhost:8080/admin/login",formData, {
        withCredentials: true})
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err.message)
        })

    }
  return (
    <>
    <nav >
  <div id="nav"  >
    <h2 >CSI Committee Admin Dashboard</h2>
     <p >
            Manage events, members, announcements, and system settings securely from the CSI administration portal.
        </p>
  </div>
</nav>
   
    <div  className="container w-50">

   
      <form className='m-lg-5' onSubmit={handelSubmit} >
           <div className="mb-4">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name='email'
            value={formData.email}
            onChange={handleInput}
            required
          />
          <div className="form-text">We'll never share your email with anyone else.</div>
          <div className="invalid-feedback">Enter email!</div>
        </div>
         <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name='password'
            value={formData.password}
            onChange={handleInput}
            
          />
        </div>
          <div className="mb-4 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"  required/>
          <label className="form-check-label" htmlFor="exampleCheck1">
            Only authorized administrators are permitted to access this panel.
          </label>
        </div>

         <button   className="btn btn-primary mb-4" >Login</button>

         
         
      </form>
       </div>
    </>
  );
}

export default Login;
