import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Function to get the access token from local storage
const getAccessToken = () => {
  return localStorage.getItem('accessToken');
}

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return !!getAccessToken();
}

// ProtectedRoute Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
