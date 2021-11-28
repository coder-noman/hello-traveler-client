import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'


const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid ">
     <h1 class="fw-bold fs-3">Hello<span className="text-primary">Traveler</span></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <nav className="navbar-nav ms-5">
            <NavLink to="/home" className="nav-link active fw-bold fs-5">Home</NavLink>
            <NavLink to="/About" className="nav-link active fw-bold fs-5">About</NavLink>
            <NavLink to="/package" className="nav-link active fw-bold fs-5">Package</NavLink>
            {user.email && <p className="nav-link active fw-bold fs-5 text-primary">Hello,{user.displayName}</p>}
            {
              user.email ? 
              <NavLink to="/login" className="nav-link active fw-bold fs-5" onClick={logOut}>Log Out</NavLink>
              :
            <NavLink to="/login" className="nav-link active fw-bold fs-5">Log In</NavLink>}
      </nav>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;