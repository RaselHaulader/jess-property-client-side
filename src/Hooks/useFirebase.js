import firebaseInit from "../Firebase/firebaseInit";
import { getAuth,signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
firebaseInit()
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})
    
    const googleSignIn = () => {
      return  signInWithPopup(auth, GoogleProvider)
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    return {
        googleSignIn,
        user,
        setUser,
        logOut
    }
};

export default useFirebase;