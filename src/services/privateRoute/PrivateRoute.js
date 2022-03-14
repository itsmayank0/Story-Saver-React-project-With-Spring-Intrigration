import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ token, element }) {
  // console.log(token)
  // console.log(element)
  if (token === undefined) {
    return <Navigate to="/login" />;
  }
  console.log((token !== "undefined" && token.length>10) )
  return (token !== "undefined" && token.length>10) ? element : <Navigate to="/login" />;
}
