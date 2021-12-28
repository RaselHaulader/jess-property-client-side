import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './DashBoardStyle.css';

const Dashboard = () => {
    const [title, setTile] = useState('DashBoard')

    return (
        <div>
            <div className='container'>
                <Header></Header>
                <hr />
                <div className='p-3'>
                    <div className='dashboardContainer row'>
                        <div className='col-12 col-md-3 link-container'>
                            <h5 className='fw-bold text-secondary mb-4'>My Account</h5>
                            <hr />
                            <div className=''>
                                {/* <Link to='/dashboard/userProfile'  onClick={()=>setTile('My Profile')}>
                                    <div className='d-flex align-items-center justify-content-between link-item'>
                                        <p>My Profile </p>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </Link> */}
                                <Link to='/dashboard/userPost' onClick={() => setTile('My Post ')}>
                                    <div className='d-flex align-items-center justify-content-between link-item'>
                                        <p>My Post </p>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </Link>
                                <Link to='/dashboard/wishList' onClick={() => setTile('My Wish List')}>
                                    <div className='d-flex align-items-center justify-content-between link-item'>
                                        <p>My Wish List </p>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </Link>
                                <Link to='/dashboard/UserRequest' onClick={() => setTile('My Message')}>
                                    <div className='d-flex align-items-center justify-content-between link-item'>
                                        <p>My Message</p>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </Link>
                            </div>
                            {true && <div>
                                <Link to='/dashboard/users' onClick={() => setTile('All Users')}>
                                    <div className='d-flex align-items-center justify-content-between link-item'>
                                        <p>All Users</p>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </Link>
                                <Link to='/dashboard/allPost' onClick={() => setTile('Users Post')}>
                                    <div className='d-flex align-items-center justify-content-between link-item'>
                                        <p>Users Post</p>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </Link>
                                <Link to='/dashboard/allRequest' onClick={() => setTile('Users Message')}>
                                    <div className='d-flex align-items-center justify-content-between link-item'>
                                        <p>Users Message</p>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </Link>
                                <Link to='/dashboard/allWishList' onClick={() => setTile('User Wish List')}>
                                    <div className='d-flex align-items-center justify-content-between link-item'>
                                        <p>Users Wish List</p>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </Link>
                            </div>}
                        </div>
                        <div className='col-12 col-md-9 '>
                            <h5 className='fw-bold text-secondary mb-4'>{title}</h5>
                            <hr />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;