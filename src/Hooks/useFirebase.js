import firebaseInit from "../Firebase/firebaseInit";
import { getAuth,onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInit()
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
              
            }
        });
    }, [user])

    return {
        googleSignIn,
        user,
        setUser,
        logOut
    }
};

export default useFirebase;