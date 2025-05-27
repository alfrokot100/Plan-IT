import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

export default function Navbar({ userName = "Joshua" }) {
  const [open, setOpen] = useState(false)
  const firstLetter = userName.charAt(0).toUpperCase()

  return (
    <nav className="navbar">
      <div>
        <h1 className="site-title"><Link to="/">BuildBoard</Link></h1>
      </div>

      <div className="avatar-wrapper" onClick={() => setOpen(!open)}>
        <div className="avatar">
          <span className="avatar-letter">{firstLetter}</span>
        </div>

        <div className={`dropdown-container ${open ? "open" : ""}`}>
          <ul className="dropdown-menu">
            <li className="dropdown-item"><Link to="/settings">Settings</Link></li>
            <li className="dropdown-item"><Link to="/log-out">Log Out</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}