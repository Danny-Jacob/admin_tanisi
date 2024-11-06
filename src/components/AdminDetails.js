import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
const AdminDetails = () => {
  const { adminId } = useParams();
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const response = await axios.get(`https://tanisiinc.com/api/getadmins?adminId=${adminId}`, {
                  headers: {
                      'Authorization': `Bearer ${accessToken}`
                  }
              });;
                setAdmins(response.data.data);
                console.log("yes");
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAdmin();
    }, [adminId]);
    const deleteAdmin = async () => {
        try {
            await axios.delete(`https://tanisiinc.com/api/deleteAdmin?adminId=${adminId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            navigate("/admin");
        } catch (err) {
            setError(err.message);
        }
    };
  return (
    <div><Navbar />
   
      <div style={{ padding: "2rem 2rem 2rem 5rem",  }}>

<div
  style={{
    display: "flex",
    width: "100%",
    justifyContent:"space-between"

        }}
      >
        <div style={{fontSize:"24px"}}>Admin Details</div>
  <button onClick={deleteAdmin}>Remove Admin</button>
</div>
<br></br>

{admins.map(admin => (
<div style={{display:"grid"}} >
<div style={{color:"grey"}}>Name:</div>
<div style={{fontSize:"larger",fontWeight:"bold"}}>{admin.name}</div>
<br></br>
  <div style={{color:"grey"}}>Email:</div>
  <div style={{fontSize:"larger",fontWeight:"bold"}}>{admin.mobile}</div>
  <br></br>
  <div style={{color:"grey"}}>Joined on:</div>
  <div style={{fontSize:"larger",fontWeight:"bold"}}>{new Date(admin.created)
                .toLocaleDateString("en-GB")
                .replace(/\//g, "-")}</div>
  <br></br>


</div>
))}




</div>
  </div>
  )
}

export default AdminDetails