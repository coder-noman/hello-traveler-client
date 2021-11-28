import React, { useState } from 'react';
import {useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
  const [error, setError] = useState('');
    const {signInUsingGoogle} = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogIn = () =>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
        .catch((error) => {
          setError(error.message)
        })
    }
    return (
        <div className="my-5">
            <h1 className="text-center">Please <span className="text-primary mt-5">Login</span></h1>
            <div className="d-flex justify-content-center mt-5">
            <div><p className="text-danger">{error}</p></div>
            </div>
            <div className="text-center">
            <button className="btn btn-primary mt-1 me-2 fw-bold" onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default LogIn;