import firebaseInit from "../Firebase/firebaseInit";
import { getAuth, updateProfile, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeUserAuth, addUserAuth, handleLoading } from '../redux/slices/userSlices';
import axios from "axios";
firebaseInit()
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.userAuth)
    // google sign in
    const googleSignIn = () => {

        return signInWithPopup(auth, GoogleProvider)
    }
    // logout
    const logOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUserAuth([]))
        }).catch((error) => {
        });
    }
    // create account
    const createAccount = (email, pass) => {
        console.log(email, pass);
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    // email login
    const emailLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // password reset
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)

    }

    // email verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
                window.alert('Verification email has been sent to your mail')
            });
    }
    // auth state monitor
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('stateChanged')
                dispatch(addUserAuth(user))

                dispatch(handleLoading(false))
            } else {
                dispatch(handleLoading(false))
            }
        });
    }, [])

    return {
        googleSignIn,
        logOut,
        createAccount,
        emailLogin,
        updateProfile,
        auth,
        resetPassword,
        verifyEmail
    }
};

export default useFirebase;