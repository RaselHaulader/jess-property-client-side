import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo.png';

const Sidenav = ({ show, setShow, searchRef, handleSearch, value, logOut }) => {


    const user = useSelector(state => state.user.userAuth);
    const handleClose = () => setShow(false);

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Link to='/home' onClick={handleClose} className="navbar-brand fw-bold" href="#">
                            <img class="nav-img" src={logo} alt="" />
                            <h5 class="brand-name fw-bold">Property Bazar</h5>
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='col-12 link-container'>
                        <hr />
                        <p onClick={handleClose} className='my-0 py-0 text-center'>{user.email ? <> {user.photoURL ? <img width='30px' style={{ borderRadius: '50%' }} src={user.photoURL} alt="" /> : <span className='fw-bold text-dark'>{user.displayName}</span>}  </> : ' '} </p>
                        <Link to='/home'>
                            <div onClick={handleClose} className='d-flex w-100 align-items-center justify-content-center link-item'>
                                <p>Home </p>
                            </div>
                        </Link>
                        <Link onClick={handleClose} to='/allProperty'>
                            <div className='d-flex w-100 align-items-center justify-content-center link-item'>
                                <p>Properties </p>
                            </div>
                        </Link>
                        {
                            user.email ? <Link onClick={handleClose} to='/dashboard/userProfile'>
                                <div className='d-flex w-100 align-items-center justify-content-center link-item'>
                                    <p>My Account </p>
                                </div>
                            </Link> : ''
                        }
                        {user.email ?
                            <div onClick={() => {
                                logOut()
                                handleClose()
                                }} className='d-flex w-100 align-items-center justify-content-center link-item'>
                                <p>Sign Out </p>
                            </div>
                            :
                            <Link to='/login'>
                            <div onClick={handleClose} className='d-flex w-100 align-items-center justify-content-center link-item'>
                                <p>Sign In</p>
                            </div>
                        </Link>}
                        <li className='nav-item searchBar mx-auto'>
                            <i class="fas fa-search"></i>
                            <input ref={searchRef} onChange={handleSearch} value={value} placeholder='search' type="text" />
                        </li>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidenav;