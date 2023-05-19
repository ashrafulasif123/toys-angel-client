import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.inplement';


export const ProvideContext = createContext()

const Authentication = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState([])
    const provider = new GoogleAuthProvider();

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdate = (name, picture) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: picture
          })
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signWithGoogle = () =>{
        return signInWithPopup(auth, provider)
    }
    const userSignOut = () =>{
        return signOut(auth)
    }
    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () =>{
            return unsubscribed()
        }
    } , [])
    // console.log(user)

    const ProvideInfo = {
        user,
        registerUser,
        signInUser,
        signWithGoogle,
        userSignOut,
        userUpdate
    }
    return (
        <ProvideContext.Provider value={ProvideInfo}>
            {children}
        </ProvideContext.Provider>
    );
};

export default Authentication;