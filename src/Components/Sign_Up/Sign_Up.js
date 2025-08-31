import React from 'react';
import './Sign_Up.css';

export default function Sign_Up (){
    return(
        <div className="form-card">
        <div className="title-text">
            <h1 className="text-gradient">SIGN UP</h1>
            <p>Does not have an account? <a href="#">Log In</a></p>
        </div>
        <div className="form">
            <form action="">
                <div className="form-input">
                    <label for="">Role</label>
                    <select name="" id="">
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>
                <div className="form-input">
                    <label for="name">Name</label>
                    <input type="name" name="name" id="name" required />
                </div>
                <div className="form-input">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <button type="submit">Confirm</button>
            </form>
        </div>
    </div>
    )
}