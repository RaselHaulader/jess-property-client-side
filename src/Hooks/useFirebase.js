import firebaseInit from "../Firebase/firebaseInit";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInit()
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    const createAccount=(email,password,name)=>{
     return   createUserWithEmailAndPassword(auth, email, password)
       
    }
    const emailLogin=()=>{
        return  signInWithEmailAndPassword(auth, email, password)
      
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            } else {
                setLoading(false)
            }
        });
    }, [user])

    return {
        googleSignIn,
        user,
        setUser,
        logOut,
        loading,
        createAccount,
        emailLogin
    }
};

export default useFirebase;