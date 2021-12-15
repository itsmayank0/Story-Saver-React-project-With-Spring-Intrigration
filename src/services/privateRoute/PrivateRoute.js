import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ login, element }) {
  return login ? element : <Navigate to="/login" />;
}
