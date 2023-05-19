import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.inplement';


export const ProvideContext = createContext()

const Authentication = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const user= 'hasan'
    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
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
    const userUpdate = (name, picture) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: picture
          })
    }
    

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