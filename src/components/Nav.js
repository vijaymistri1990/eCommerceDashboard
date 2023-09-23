import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem('user'));
  // const user_name = JSON.parse(localStorage.getItem('user')).name;
  
  console.log(auth,"auth")

  const logOut = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      localStorage.clear();
      navigate('/login');
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Ecom Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          {auth ? <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Add">
                  Add Product
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/update">
                  Update Product
                </Link>
              </li> */}
              
              <li className="nav-item">
                <Link className="nav-link " to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " onClick={logOut} to="/login">
                   Logout 
                </Link>
              </li>
            </ul> : <ul className="navbar-nav">
            <><li className="nav-item">
                  <Link className="nav-link " to="/signup">
                    Sign up
                  </Link>
                </li><li className="nav-item">
                    <Link className="nav-link " to="/Login">
                      Login
                    </Link>
                  </li></>
            </ul>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
