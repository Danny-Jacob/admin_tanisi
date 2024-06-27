import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const config = {
    placeholder: "Enter the Job Description...",
  };
  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Add Job</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={() => navigate("/jobs")}
            style={{
              border: "2px solid #FF4B2B ",
              background: "transparent",
              color: "#FF4B2B ",
            }}
          >
            Back
          </button>
          <button onClick={() => navigate("/jobs")}>Post</button>
        </div>
      </div>

      <br></br>
      <b>Fill in the details :</b>
      <input type="text" placeholder="Job Title"></input>
      <input type="text" placeholder="Company"></input>
      <input type="text" placeholder="Location"></input>
      <input type="text" placeholder="Job Type"></input>
      <input type="Number" placeholder="Experience"></input>
      <br></br>
      <br></br>
      {/* <div>Enter the Job description below:</div> */}
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    </div>
  );
};

export default AddJob;
