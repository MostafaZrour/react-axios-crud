import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  function fetchData(){
    axios.get("http://localhost:3001/users").then((res) => {
      setUsers(res.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDelete(id, name) {
    const conf = window.confirm("Do you want to delete " + name);
    if (conf) {
      axios.delete("http://localhost:3001/users/" + id).then((res) => {
        alert("Record Has Deleted");
        fetchData();
      });
    }
  };
  const UserList = () => {
    return users.map(({ id, name, email }, index) => (
      <tr key={index}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td className="d-flex gap-2 justify-content-center">
          <Link className="btn btn-sm btn-outline-primary" to={`update/${id}`}>
            <i className="bi bi-pencil"></i>
          </Link>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => {handleDelete(id, name)}}
          >
            <i className="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <div className="text-end mb-5">
        <Link type="button" className="btn btn-primary" to="/create">
          Ajouter User
        </Link>
      </div>
      <table className="table text-center">
        <thead>
          <tr className="text-center">
            <th>id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{UserList()}</tbody>
      </table>
    </div>
  );
}
