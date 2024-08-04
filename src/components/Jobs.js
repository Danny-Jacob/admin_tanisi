import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
    const fetchJobs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/jobs');
            setJobs(response.data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchJobs();
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
        <button onClick={() => navigate("/add_job")}>Add Job</button>
      </div>
      <br></br>
      <div style={{ border: "1px solid grey", padding: "0.5rem" ,display:"flex", fontWeight:"bold"}}>
        <div style={{width:"25%"}}>Job Title</div>
        <div style={{width:"25%"}}>Company</div>
        <div style={{width:"25%"}}>Experience</div>
        <div style={{width:"25%"}}>Location</div>
        {/* <div>Job Title</div> */}

      </div>
      {jobs.map(job => (
      <div style={{ border: "1px solid grey", padding: "0.5rem" ,display:"flex",cursor:"pointer" }}onClick={() => navigate(`/job/${job.jobId}`)}>
        <div style={{width:"25%"}}>{job.jobTitle}</div>
        <div style={{width:"25%"}}>{job.company}</div>
        <div style={{width:"25%"}}>{job.experience} yrs</div>
        <div style={{width:"25%"}}>{job.location}</div>
        {/* <div dangerouslySetInnerHTML={{ __html: job.description }}></div> */}
        {/* <div>Job Title</div> */}

      </div>
      ))}
      {/* <div style={{height:"200vh"}}></div> */}




    </div>
    {/* <div style={{ height: "200vh" }}></div> */}
  </>
  );
};

export default Jobs;
