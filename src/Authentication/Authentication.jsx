import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.inplement';


export const ProvideContext = createContext()

const Authentication = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const registerUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const userUpdate = (name, picture) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: picture
          })
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const userSignOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            setLoading(false)
        })
        return () =>{
            return unsubscribed()
        }
    } , [])
    console.log(user)

    const ProvideInfo = {
        user,
        registerUser,
        signInUser,
        signWithGoogle,
        userSignOut,
        userUpdate,
        loading
    }
    return (
        <ProvideContext.Provider value={ProvideInfo}>
            {children}
        </ProvideContext.Provider>
    );
};

export default Authentication;