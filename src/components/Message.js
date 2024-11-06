import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Message = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');
    useEffect(() => {
      const fetchMessages = async () => {
          try {
              const response = await axios.get('https://tanisiinc.com/api/messages');
              setMessages(response.data.data);
          } catch (err) {
              setError(err.message);
          } finally {
              setLoading(false);
          }
      };
  
      fetchMessages();
  }, []);
    return (<>
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
        <div style={{fontSize:"24px"}}>Connections</div>
        
        <br></br>
        <div style={{ border: "1px solid #cccccc", padding: "0.5rem" ,display:"flex", fontWeight:"bold",color:"white",background:"#c32f49"}}>
          <div style={{width:"25%"}}>First Name</div>
          <div style={{width:"25%"}}>Email</div>
          <div style={{width:"25%"}}>Mobile</div>
          <div style={{width:"25%"}}>Date</div>
          {/* <div>Job Title</div> */}
  
        </div>
        {messages.map(message => (
        <div style={{ border: "1px solid #cccccc", padding: "0.5rem" ,display:"flex",cursor:"pointer" }}onClick={() => navigate(`/message/${message.id}`)}>
          <div style={{width:"25%"}}>{message.firstname}</div>
          <div style={{width:"25%"}}>{message.email}</div>
          <div style={{width:"25%"}}>{message.mobile}</div>
          <div style={{width:"25%"}}>{new Date(message.created_date).toLocaleDateString('en-GB').replace(/\//g, '-')}</div>
          {/* <div dangerouslySetInnerHTML={{ __html: job.description }}></div> */}
          {/* <div>Job Title</div> */}
  
        </div>
        ))}</div>
    </>
    );
  };
  
  export default Message;