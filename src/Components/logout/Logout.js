import React from 'react';
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    console.log("I am calling");
    localStorage.setItem('token', undefined);
    navigate("/");
    window.location.reload(false);
    return (
        <>
        </>
    )
}

export default Logout;
