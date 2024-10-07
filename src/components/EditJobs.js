import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import JoditEditor from "jodit-react";

import { useNavigate } from "react-router-dom";
const EditJobs = () => {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  //
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  useEffect(() => {
    // Fetch the job details when the component mounts
    const fetchJobDetails = async () => {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await fetch(
          `http://localhost:5000/jobs?jobId=${jobId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.ok) {
          const result = await response.json();
          const jobData = result.data[0];
          setJobTitle(jobData.jobTitle);
          setCompany(jobData.company);
          setLocation(jobData.location);
          setJobType(jobData.jobType);
          setExperience(jobData.experience);
          setContent(jobData.description);
          console.log(
            "consoled",
            content,
            jobTitle,
            company,
            location,
            jobType,
            experience
          );
        } else {
          console.error("Failed to fetch job details.");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  //edit

  const handleEdit = async () => {
    const jobData = {
      jobId,
      jobTitle,
      experience,
      location,
      company,
      description: content,
      jobType,
    };

    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch("http://localhost:5000/editJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Add Authorization header
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        console.log("Job updated successfully!");
        navigate("/jobs");
      } else {
        console.error("Failed to update job.");
      }
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };
  return (
    <div>
      <div style={{ padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "24px" }}>Edit Job</div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={() => navigate("/jobs")}
              style={{
                border: "2px solid #FF4B2B",
                background: "transparent",
                color: "#FF4B2B",
              }}
            >
              Back
            </button>
            <button onClick={handleEdit}>Update</button>
          </div>
        </div>

        <br />
        <b>Edit the details :</b>
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job Type"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <br />
        <br />
        <div>Edit the Job description below:</div>
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
    </div>
  );
};

export default EditJobs;
