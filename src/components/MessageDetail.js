import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const MessageDetail = () => {
  const { messageId } = useParams();
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchMesage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/messages?messageId=${messageId}`
        );
        setMessage(response.data.data);
        console.log("yes");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMesage();
  }, [messageId]);

  return (
    <div>
      <Navbar />

      <div style={{ padding: "2rem 2rem 2rem 5rem" }}>
        {/* <div
  style={{
    display: "flex",
    width: "100%",
    flexDirection: "row-reverse",

  }}
>
  <button onClick={deleteJob}>Delete Job</button>
</div> */}
        <br></br>

        {message.map((message) => (
          <div style={{ display: "grid" }}>
            <div style={{ color: "grey" }}>Date:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {new Date(message.created_date)
                .toLocaleDateString("en-GB")
                .replace(/\//g, "-")}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>First Name:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {message.firstname}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Last Name:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {message.lastname}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Email:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {message.email} yrs
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Contact Number:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {message.mobile}
            </div>
            <br></br>
            <div style={{ color: "grey" }}>Message:</div>
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {message.message}
            </div>

            {/* <div>Job Title</div> */}
          </div>
        ))}
        {/* <div style={{height:"200vh"}}></div> */}
      </div>
    </div>
  );
};

export default MessageDetail;
