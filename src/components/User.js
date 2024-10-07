import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUser(response.data.data);
        console.log("yes");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);
  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:5000/deleteUser?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      navigate("/users");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <Navbar />

      <div style={{ padding: "2rem 2rem 2rem 5rem" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent:"space-between"

        }}
      >
        <div style={{fontSize:"24px"}}>Applicant Details</div>
          <button onClick={deleteUser}>Delete Applicant</button>
        </div>
        <br></br>

        {user.map((user) => (
          <div style={{ display: "grid" }}>
            <div style={{ color: "grey" }}>Full name:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {user.fullname}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Email:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {user.email}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Mobile:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {user.mobile}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Gender:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {user.gender}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Experience:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {user.experience} yrs
            </div>
            
            <br></br>
            <div style={{ color: "grey" }}>Location:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {user.state},{user.country}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Applied for:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {user.job_applied}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Resume: &nbsp; <button style={{width:"fit-content"}} onClick={()=>window.open(user.resume, '_blank')}>Tap to view</button></div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
