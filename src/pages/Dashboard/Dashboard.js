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
                            <div className='d-flex align-items-center justify-content-between link-item'>
                                <Link to='/dashboard/userPost'>My Post </Link>
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                            <div className='d-flex align-items-center justify-content-between link-item'>
                                <Link to=''>My WishList </Link>
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                            <div className='d-flex align-items-center justify-content-between link-item'>
                                <Link to=''>My Request </Link>
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>

                        </div>
                        <div>
                            <div className='d-flex align-items-center justify-content-between link-item'>
                                <Link to=''>All Users</Link>
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                            <div className='d-flex align-items-center justify-content-between link-item'>
                                <Link to=''>Users Post </Link>
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                            <div className='d-flex align-items-center justify-content-between link-item'>
                                <Link to=''>Users Wishlist </Link>
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                            <div className='d-flex align-items-center justify-content-between link-item'>
                                <Link to=''>Users Request</Link>
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-9'>
                        <h5 className='fw-bold text-secondary mb-4'>My Post</h5>
                        <hr />
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;