import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  const handlePost = async () => {
    const jobData = {
      jobTitle,
      experience,
      location,
      company,
      description: content,
      jobType,
    };

    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await fetch("http://localhost:5000/addJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`, // Add Authorization header
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        console.log("Job posted successfully!");
        navigate("/jobs");
      } else {
        console.error("Failed to post job.");
      }
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Add Job</h1>
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
          <button onClick={handlePost}>Post</button>
        </div>
      </div>

      <br />
      <b>Fill in the details :</b>
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
      <div>Enter the Job description below:</div>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default AddJob;
