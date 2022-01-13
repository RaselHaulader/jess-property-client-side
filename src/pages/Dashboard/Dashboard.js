import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { handleAdmin } from '../../redux/slices/userSlices';
import Footer from '../Footer/Footer';
import './DashBoardStyle.css';

const Dashboard = () => {
    const [load, setLoad] = useState('initial')
    const [title, setTile] = useState('DashBoard')
    const user = useSelector(state => state.user.userAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scroll(0, 0)
        axios(`https://secret-basin-56489.herokuapp.com/checkUsers/${user.email}`)
            .then(res => {
                console.log(res)
                if (res?.data[0]?.role === 'admin') {
                    setLoad('admin')
                    dispatch(handleAdmin(true))
                } else {
                    setLoad('user')
                    dispatch(handleAdmin(false))
                }
            })
    }, [user])
    return (
        <div>
            <div className='container pt-5'>

                <div className='p-3 mt-5'>
                    <div className='dashboardContainer row'>
                        <div className='col-12 col-md-3 link-container'>
                            <h5 className='fw-bold mb-4' style={{ color: 'crimson' }}>My Account</h5>
                            <hr />
                            <Link to='/dashboard/userProfile' onClick={() => setTile('My Profile')}>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>My Profile </p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            {
                                load === 'user' && <div className=''>

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
                            }
                            {load === 'admin' && <div>
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
                            <h5 style={{ color: 'crimson' }} className='fw-bold mb-4'>{title}</h5>
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