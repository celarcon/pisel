import { createContext, useContext, useEffect, useState } from "react";
import { 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        onAuthStateChanged,
        signOut,
        GoogleAuthProvider,
        signInWithPopup,
        sendPasswordResetEmail
        } from 'firebase/auth';
import { auth } from '../firebase';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext ( authContext );
    if( !context ) throw new Error("There in not auth provider");
    return context;
}

export function AuthProvider( { children } ){

    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( true );

    const singup = ( email, password ) => createUserWithEmailAndPassword( auth, email, password );

    const login = ( email, password ) => signInWithEmailAndPassword( auth, email, password );

    const loginWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup( auth, googleProvider);
    }

    const reserPassword = ( email ) => sendPasswordResetEmail( auth, email );

    const logout = () => signOut( auth );
    
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged( auth, currenUser => {
            setUser( currenUser );
            setLoading( false );
        });

        return () => unsubscribe();

    },[]);

    return <authContext.Provider value={{ singup, login, loginWithGoogle, reserPassword, logout, user, loading }}>{ children }</authContext.Provider>;
}