import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './DashBoardStyle.css';

const Dashboard = () => {
    return (
        <div className='container'>
            <Header></Header>
            <hr />
            <div className='p-3'>
                <div className='dashboardContainer row p-5'>
                    <div className='col-12 col-md-3 link-container'>
                        <h5 className='fw-bold text-secondary mb-4'>My Account</h5>
                        <hr />
                        <div className=''>
                            <Link to='/dashboard/userPost'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>My Post </p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            <Link to='/dashboard/wishList'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>My Wish List </p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            <Link to='/dashboard/UserRequest'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>My Request</p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to='/dashboard/users'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>All Users</p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            <Link to='/dashboard/allPost'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>Users Post</p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            <Link to='/dashboard/allRequest'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>Users Request</p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            <Link to='/dashboard/allWishList'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>Users Wish List</p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-12 col-md-9'>
                        <h5 className='fw-bold text-secondary mb-4'>Dashboard</h5>
                        <hr />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;