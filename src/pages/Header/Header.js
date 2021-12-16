import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <nav className="navbar container navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
        <img class="nav-img" src={logo}alt=""/>
                <h6 class="brand-name">Land Sell Jessore</h6>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Property</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Contact</a>
            </li>

          </ul>
          <form class="d-flex">
              <div className="sign-in">
                <p> <i className="fas fa-sign-in-alt"></i> Sign in</p>
                <button> <span style={{ fontSsize: "20px" }} >+</span> Add Property</button>
              </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;