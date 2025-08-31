import React from 'react';
import './Login.css'

export default function Login (){
    return(
        <div className="form-card">
        <div className="title-text">
            <h1 className="text-gradient">LOG IN</h1>
            <p>Already have an account? <a href="#">Sign Up</a></p>
        </div>
        <div className="form">
            <form action="">
                <div className="form-input">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className="form-input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required/>
                </div>
                <button type="submit">Confirm</button>
            </form>
        </div>
    </div>
    )
}