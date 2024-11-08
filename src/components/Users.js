import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
    const fetchUsers = async () => {
      
        try {
          const response = await axios.get('https://tanisiinc.com/api/users', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
            setUsers(response.data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchUsers();
}, []);
  return (
    <>
    <Navbar />
      
      <div style={{ padding: "2rem 2rem 2rem 5rem",  }}>
  
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row-reverse",
  
          }}
        >
          {/* <button onClick={() => navigate("/add_job")}>Add Job</button> */}
        </div>
        <div style={{fontSize:"24px"}}>Applicants</div>
        <br></br>

        <div style={{border: "1px solid #cccccc", padding: "0.5rem" ,display:"flex", fontWeight:"bold",color:"white",background:"#c32f49"}}>
          <div style={{width:"25%"}}>Full Name</div>
          <div style={{width:"25%"}}>Email</div>
          <div style={{width:"25%"}}>Mobile</div>
          <div style={{width:"25%"}}>Date</div>
          {/* <div>Job Title</div> */}
  
        </div>
        {users.map(user => (
        <div style={{ border: "1px solid #cccccc", padding: "0.5rem" ,display:"flex",cursor:"pointer" }}onClick={() => navigate(`/user/${user.userId}`)}>
          <div style={{width:"25%"}}>{user.fullname}</div>
          <div style={{width:"25%"}}>{user.email}</div>
          <div style={{width:"25%"}}>{user.mobile}</div>
          <div style={{width:"25%"}}>{new Date(user.created_date).toLocaleDateString('en-GB').replace(/\//g, '-')}</div>
          {/* <div dangerouslySetInnerHTML={{ __html: job.description }}></div> */}
          {/* <div>Job Title</div> */}
  
        </div>
        ))}</div>
    </>
  )
}

export default Users