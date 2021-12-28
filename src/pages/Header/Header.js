import React from 'react';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
const Header = () => {
  const { logOut } = useAuth()
  const user = useSelector(state=> state.user.userAuth)

  return (
    <nav className="navbar px-0 mx-auto container navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link to='/home' className="navbar-brand fw-bold" href="#">
          <img class="nav-img" src={logo} alt="" />
          <h5 class="brand-name fw-bold">Property Bazar</h5>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/allProperty" className="nav-link active" aria-current="page" href="#">Properties</Link>
            </li>
            <li className="nav-item">
              <HashLink  smooth to="/home#recent" className="nav-link active" aria-current="page">Recent</HashLink>
            </li>
            <li className="nav-item">
              <Link to='/dashboard/userPost' className="nav-link active" aria-current="page" href="#">My Account</Link>
            </li>

          </ul>
          <form class="">
            <div className="sign-in d-flex align-items-center ">
              <p className='my-0 py-0'>{user.email ? <> {user.photoURL? <img width='30px' style={{borderRadius:'50%'}} src={user.photoURL} alt="" /> : <span className='fw-bold text-dark'>{user.displayName}</span>} <span  style={{cursor:'pointer'}} onClick={() => logOut()}>Log Out <i className="fas fa-sign-out-alt"></i></span> </> : <Link to='/login'> <i className="fas fa-sign-in-alt"></i> Sign in</Link>}</p>
              <Link to='/addProperty'> <span style={{ fontSsize: "20px" }} >+</span> Add Property</Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;