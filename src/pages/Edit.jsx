import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/" + id)
      .then((res) => setUser(res.data));
  }, []);

  const validate = () => {
    let isValid = true;

    if (!user.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      isValid = false;
    } else if (user.name.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must be at least 5 characters.",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    if (!user.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      axios.put("http://localhost:3001/users/" + id, user).then((res) => {
        alert("data Update successfully");
        navigate("/");
      });
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="border rounded p-5 w-50">
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
