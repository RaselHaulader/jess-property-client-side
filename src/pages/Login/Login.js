import React, { useState } from 'react';
import './LoginStyle.css';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUserAuth } from '../../redux/slices/userSlices';
import axios from 'axios';
const Login = () => {
    const [toggle, setToggle] = useState('login')
    // firebase auth
    const { googleSignIn, resetPassword, updateProfile, auth, createAccount, emailLogin } = useAuth()
    // react form hook
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    // react router
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // redux dispatch
    const dispatch = useDispatch()

    // toggle login and register
    const handleToggle = (type) => {
        setToggle(type)
    }

    //save user data to db
    const saveUserInfo = (data) => {
        axios.post('https://property-bazar-server.onrender.com/saveUser', data)
            .then(res => console.log(res))
    }

    //  google login
    const handleGoogleSignIn = () => {

        googleSignIn().then(({ user }) => {
            // save info to db
            const userInfo = {
                name: user.displayName,
                email: user.email
            }
            saveUserInfo(userInfo)
            // set to redux store
            dispatch(addUserAuth(user))
            // redirect after login
            navigate(from, { replace: true });
        }).catch((error) => {
            window.alert(error.message)
        });
    }
    // email login
    const handleEmailSignIn = (email, pass) => {
        console.log('log in', email, pass);
        emailLogin(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                dispatch(addUserAuth(user))
                navigate(from, { replace: true });
            })
            .catch((error) => {
                window.alert(error.message)
            });
    }
    // register user
    const handleCreateAccount = (email, pass, name) => {
        console.log('create');
        createAccount(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    //save user to db
                    saveUserInfo({ name: name, email: email })
                    // store in redux
                    dispatch(addUserAuth(user))
                    setToggle('login')
                }).catch((error) => {
                    window.alert(error.message)
                })
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    // password reset 
    const handlePasswordReset = (email) => {
        resetPassword(email).then(() => {
            // Password reset email sent!
            // ..
            window.alert('Check Your Email to Reset Your Password')
            handleToggle('login')
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(error.message)

                // ..
            });
    }
    // handle submit
    const onSubmit = data => {
        console.log(data);
        console.log(toggle);
        if (toggle === 'create') {
            //create account
            if (data.password == data.ConfirmPassword) {
                handleCreateAccount(data.email, data.password, data.name)
            } else {
                console.log('pass not matched');
            }
            console.log('create', data);
        } else if (toggle === 'login') {
            // login
            console.log('login ', data);
            handleEmailSignIn(data.email, data.password)
        } else if (toggle === 'reset') {
            handlePasswordReset(data.email)
        }
        reset()
    };
    return (
        <div className='container pt-5'>

            <h3 className='text-center mt-5'>Login</h3>
            <div>
                <form className='form-body d-flex flex-column align-items-center' onSubmit={handleSubmit(onSubmit)}>

                    {
                        toggle === 'create' ? <>
                            <input placeholder='Name' {...register("name", { required: true })} />
                            {errors.name && <span className='text-primary'>This field is required</span>}
                        </> : ''
                    }

                    <input placeholder='Email' {...register("email", { required: true })} />
                    {errors.email && <span className='text-primary'>This field is required</span>}

                    {toggle !== 'reset' && <>
                        <input placeholder='Password' {...register("password", { required: true })} />
                        {errors.password && <span className='text-primary'>This field is required</span>}
                    </>

                    }
                    {
                        toggle === 'create' ? <>
                            <input placeholder='Confirm Password' {...register("ConfirmPassword", { required: true })} />
                            {errors.ConfirmPassword && <span className='text-primary'>This field is required</span>}
                        </> : ''
                    }

                    <input type="submit" />
                </form>
                <div className='text-center'>
                    <small className='text-center mb-0'> Sign in with <span style={{ cursor: 'pointer' }} onClick={handleGoogleSignIn} className='text-danger'>google</span></small>
                    <small className='text-center m-0 p-0'> or
                        {(toggle === 'login' || toggle === 'reset') && <span> <span onClick={() => handleToggle('create')} className='text-danger' style={{ cursor: 'pointer' }}> create </span> an account</span>}
                        {toggle === 'create' && <span> <span onClick={() => handleToggle('login')} className='text-danger' style={{ cursor: 'pointer' }}> Login </span> with Email</span>}

                    </small><br />
                    <small className=''><span onClick={() => handleToggle('reset')} style={{ cursor: 'pointer' }} className='text-danger'>Forget Password?</span> click to reset</small>
                </div>

            </div>
        </div>
    );
};

export default Login;
