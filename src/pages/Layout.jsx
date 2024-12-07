import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <ul className="nav justify-content-center bg-primary">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/">
          Home
        </Link>
      </li>
    </ul>
    <Outlet />
  </>
  )
}
