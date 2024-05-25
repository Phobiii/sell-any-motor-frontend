// src/components/SignIn.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="sign-in-container">
            <h2>Sign In</h2>
            <form>
                <input type="email" placeholder="Email Address" required />
                <button type="submit">Next</button>
            </form>
            <p>
                By clicking "Next" or signing in with the tools below, you accept our 
                <a href="/terms-of-use"> Term of use </a> 
                and have read and understood the 
                <a href="/privacy-policy"> Privacy Policy </a>.
            </p>
            <div className="divider">or</div>
            <div className="social-buttons">
                <button className="facebook">Sign in with Facebook</button>
                <button className="google">Sign in with Google</button>
            </div>
            <a href="/register">Not Registered yet?</a>
        </div>
    );
};

export default SignIn;
