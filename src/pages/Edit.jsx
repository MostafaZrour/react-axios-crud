import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user , setUser] = useState({});

    useEffect(() =>{
        axios.get("http://localhost:3001/users/" + id)
        .then(res => setUser(res.data))
    },[])

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put("http://localhost:3001/users/" + id , user)
      .then(res => {
        alert("data Update successfully");
        navigate("/");
      })
      
    }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="border rounded p-5 w-50">
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            value = {user.name}
            onChange={(e) => setUser({...user , name : e.target.value})}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            value = {user.email}
            onChange={(e) => setUser({...user , email : e.target.value})}
            className="form-control"
          />
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
