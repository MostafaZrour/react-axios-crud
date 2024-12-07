import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Add() {
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users", inputData)
      .then((res) => {
        alert("Data Added Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="border rounded p-5 w-50">
        <div class="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          class="btn btn-primary w-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
