import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Add() {
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;

    if (!inputData.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      isValid = false;
    } else if (inputData.name.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must be at least 5 characters.",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    if (!inputData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is not valid",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      axios
        .post("http://localhost:3001/users", inputData)
        .then(() => {
          alert("Data Added Successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="border rounded p-5 w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
