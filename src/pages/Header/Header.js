import React from 'react';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth()
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
              <Link to="/allProperty" className="nav-link active" aria-current="page" href="#">Property</Link>
            </li>
            <li className="nav-item">
              <Link to="/details" className="nav-link active" aria-current="page" href="#">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Contact</a>
            </li>

          </ul>
          <form class="">
            <div className="sign-in d-flex align-items-center ">
              <p className='my-0 py-0'>{user.email ? <><img width='30px' style={{borderRadius:'50%'}} src={user.photoURL} alt="" />  <span onClick={() => logOut()}> LogOut</span> </> : <Link to='/login'> <i className="fas fa-sign-in-alt"></i> Sign in</Link>}</p>
              <Link to='/addProperty'> <span style={{ fontSsize: "20px" }} >+</span> Add Property</Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;