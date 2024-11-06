import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
const Admin = () => {
  const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');
    useEffect(() => {
      const fetchAdmins = async () => {
          try {
              const response = await axios.get('https://tanisiinc.com/api/getAdmins', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
              setAdmins(response.data.data);
          } catch (err) {
              setError(err.message);
          } finally {
              setLoading(false);
          }
      };
  
      fetchAdmins();
  }, []);
  return (
    
   <>
    <Navbar />
      
      <div style={{ padding: "2rem 2rem 2rem 5rem",  }}>
  
        {/* <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row-reverse",
  
          }}
        >
          <button onClick={() => navigate("/add_job")}>Add Job</button>
        </div> */}
        <div style={{fontSize:"24px"}}>Admins</div>
        
        <br></br>
        <div style={{border: "1px solid #cccccc", padding: "0.5rem" ,display:"flex", fontWeight:"bold",color:"white",background:"#c32f49"}}>
          <div style={{width:"33%"}}>Name</div>
          <div style={{width:"33%"}}>Email</div>
          <div style={{width:"33%"}}>Joining Date</div>
  
        </div>
        {admins.map(admin => (
        <div style={{ border: "1px solid #cccccc", padding: "0.5rem" ,display:"flex",cursor:"pointer" }}onClick={() => navigate(`/admin/${admin.adminId}`)}>
          <div style={{width:"33%"}}>{admin.name}</div>
          <div style={{width:"33%"}}>{admin.mobile}</div>
          <div style={{width:"33%"}}>{new Date(admin.created).toLocaleDateString('en-GB').replace(/\//g, '-')}</div>
  
        </div>
        ))}
        {/* <div style={{height:"200vh"}}></div> */}
  
  
  
  
      </div>
      {/* <div style={{ height: "200vh" }}></div> */}
    </>
  )
}

export default Admin