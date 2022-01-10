import React from 'react';
import logo from '../../images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { addProperty } from '../../redux/slices/propertySlice';
import { useRef } from 'react';
const Header = () => {
  const searchRef = useRef()
  const { logOut } = useAuth()
  const user = useSelector(state => state.user.userAuth)
  const admin = useSelector(state => state.user.admin)
  const value = useSelector(state => state.properties.searchProperties)
  const navigate = useNavigate()
  const [colorChange, setColorchange] = useState(false);

//nav bar color change
  useEffect(() => {
    console.log(colorChange);
    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        setColorchange(true)
      } else {
        setColorchange(false)
      }
    }
  }, [colorChange])
  const setNavBg = {
    backgroundColor: 'rgba(250 , 250, 250, 1)',
  }
  const setNavBg2 = {
    backgroundColor: 'rgba(250 , 250, 250, 0)',
    transition:' all 1s'
  }
  // search func
  const dispatch = useDispatch()
  const handleSearch=()=>{
    console.log('test');
    navigate('/search');
    dispatch(addProperty(searchRef.current.value))
  }
  return (
    <div className="navbar-container" style={colorChange ? setNavBg : setNavBg2}>
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
                <HashLink smooth to="/home#recent" className="nav-link active" aria-current="page">Recent</HashLink>
              </li>
              {user.email && <li className="nav-item">
                <Link to={`/dashboard/${admin ? 'users' : 'userPost'}`} className="nav-link active" aria-current="page" href="#">My Account</Link>
              </li>}
            </ul>
            <form class="">
              <div className="sign-in d-flex align-items-center ">
                <p className='my-0 py-0'>{user.email ? <> {user.photoURL ? <img width='30px' style={{ borderRadius: '50%' }} src={user.photoURL} alt="" /> : <span className='fw-bold text-dark'>{user.displayName}</span>}  </> : ' '} </p>
                <li className='nav-item searchBar'>
                  <i class="fas fa-search"></i>
                  <input ref={searchRef} onChange={handleSearch} value={value} placeholder='search' type="text" />
                </li>
                <Link to='/addProperty' className='me-2'> <span style={{ fontSsize: "20px" }} >+</span> Add Property</Link>
                {user.email ? <p className='my-0 py-0'> <span style={{ cursor: 'pointer' }} onClick={() => logOut()}> <i className="fas fa-sign-out-alt"></i></span></p> : <Link to='/login'> <i className="fas fa-sign-in-alt"></i> Sign in</Link>}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;