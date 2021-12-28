import firebaseInit from "../Firebase/firebaseInit";
import { getAuth, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeUserAuth, addUserAuth, handleLoading } from '../redux/slices/userSlices';
firebaseInit()
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const dispatch = useDispatch()
    const user = useSelector(state=> state.user.userAuth)
    const googleSignIn = () => {

        return signInWithPopup(auth, GoogleProvider)
    }
    const logOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUserAuth([]))
        }).catch((error) => {
        });
    }
    const createAccount = (email, pass) => {
        console.log(email, pass);
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const emailLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
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
    }, [user])

    return {
        googleSignIn,
        logOut,
        createAccount,
        emailLogin,
        updateProfile,
        auth,
    }
};

export default useFirebase;