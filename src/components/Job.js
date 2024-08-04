import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Job = () => {
    const { jobId } = useParams();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/jobs?jobId=${jobId}`);
                setJobs(response.data.data);
                console.log("yes");
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [jobId]);
    const deleteJob = async () => {
        try {
            await axios.delete(`http://localhost:5000/deleteJob?jobId=${jobId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            navigate("/jobs");
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
    flexDirection: "row-reverse",

  }}
>
  <button onClick={deleteJob}>Delete Job</button>
</div>
<br></br>

{jobs.map(job => (
<div style={{display:"grid"}} >
<div style={{color:"grey"}}>Job Title:</div>
<div style={{fontSize:"larger",fontWeight:"bold"}}>{job.jobTitle}</div>
<br></br>
  <div style={{color:"grey"}}>Company:</div>
  <div style={{fontSize:"larger",fontWeight:"bold"}}>{job.company}</div>
  <br></br>
  <div style={{color:"grey"}}>Experience:</div>
  <div style={{fontSize:"larger",fontWeight:"bold"}}>{job.experience} yrs</div>
  <br></br>
  <div style={{color:"grey"}}>Location:</div>
  <div style={{fontSize:"larger",fontWeight:"bold"}}>{job.location}</div>
  <br></br>
  <div style={{color:"grey"}}>Job Type:</div>
  <div style={{fontSize:"larger",fontWeight:"bold"}}>{job.jobType}</div>
  <br></br>
  <div style={{color:"grey"}}>Description:</div>
  <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
  
  {/* <div>Job Title</div> */}

</div>
))}
{/* <div style={{height:"200vh"}}></div> */}




</div>
  </div>
  )
}

export default Job