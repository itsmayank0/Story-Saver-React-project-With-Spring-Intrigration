import React, { useState, useEffect } from 'react';
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


function Logout() {
    console.log("I am calling")
    const { dispatch } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
            console.log("I useeeffect am calling")
            dispatch({
                type: "LOGOUT",
              });
            navigate("/login");
        
    }, [])
    
    return (
        <>
        </>
    )
}

export default Logout;
