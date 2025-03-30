import React, { useState,createContext,useContext } from 'react'

export const authcontext=createContext();
export default function Authprovider({children}){
    const initialautheruser=localStorage.getItem("user");
    const [authuser,setauthuser]=useState(
        initialautheruser? JSON.parse(initialautheruser):undefined
    );
    return (
        <authcontext.Provider value={[authuser,setauthuser]}>
            {children}
        </authcontext.Provider>
    );
}
export const useAuth=()=>useContext(authcontext);