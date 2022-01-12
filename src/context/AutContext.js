import React, { useContext, useState, useEffect } from 'react';
import "../firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
  } from "firebase/auth";

const AutContext =React.createContext();

export function useAuth(){
    return useContext(AutContext);
}

export function AuthProvider({children}){
    
    const [loading,SetLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            SetLoading(false);
        })
        return unsubscribe;
    }, [])

    //signup function
   async function signup(email,password,username){
           const auth = getAuth();
           await createUserWithEmailAndPassword(auth,email,password);

           //update proffile
           await updateProfile(auth.currentUser,{
               displayName: username
           });

           const user = auth.currentUser;
           setCurrentUser({
               ...user
           })

    }

    //login function
    function login(email,password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth,email,password)
    }

    //logout function
    function logout(){
         const auth = getAuth();
         return signOut(auth);   
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
      };   

    return(
        <AutContext.Provider value={value}>
            {!loading && children}
        </AutContext.Provider>
    )
}
