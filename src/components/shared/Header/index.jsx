import { Link, NavLink } from "react-router";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{ color: "rgb(20, 0, 255)" }}></i>
          <span className="ms-2 fs-4">bookstore</span>
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="/" end className="nav-link px-2">Home</NavLink></li>
          <li><NavLink to="/books" className="nav-link px-2">Book</NavLink></li>
          <li><NavLink to="/team" className="nav-link px-2">Team</NavLink></li>
          <li><NavLink to="/contact" className="nav-link px-2">Contact</NavLink></li>
        </ul>

        <div className="col-md-3 text-end">
          <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
          <Link to="/register" className="btn btn-primary">Register</Link>
        </div>
      </header>
    </>
  );
}