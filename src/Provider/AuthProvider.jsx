import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase_Auth/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const google_provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create_User by Email&Pass: 
    const create_user = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    };
    const sign_in_email_pass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    };
    const sign_in_with_google = () => {
        return signInWithPopup(auth, google_provider);
    }

    const log_out = () => {
       return signOut(auth)
    }

    //Observe the Current User : 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        create_user,
        sign_in_email_pass,
        sign_in_with_google,
        log_out,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;