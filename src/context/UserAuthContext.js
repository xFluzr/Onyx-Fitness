import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut, 
         onAuthStateChanged, 
         GoogleAuthProvider, 
         signInWithPopup,
         sendPasswordResetEmail
        } from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export const UserAuthContextProvider = ({children}) => {
    const [user, setUser] = useState("")

    // Rejestracja konta 
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth, email,password);
    }

    // Logowanie
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email,password);
    }

    // Wylogowanie
    const logOut = () => {
        return signOut(auth);
    }

    // Logowanie z Google
    const singInWithGoogle = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    // Zmiana hasła 
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return() => {
            unsubscribe();
        }
    },[]);

    return (
        <userAuthContext.Provider value={{user ,signUp, logIn, logOut, singInWithGoogle, resetPassword}}>
            {children}
        </userAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(userAuthContext);
}