import React from 'react';
import './Singin.css';
import user from '../assets/profile.png';
import lock from '../assets/lock.png';
import email from '../assets/email.png';


const Singin = () => {

    const [action, setAction] = ('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction(' ');
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="from-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required />
                        <img className='icon' src={user} alt="profile" />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <img className='icon' src={lock} alt="profile" />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account?<a href="#" oneClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="from-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required />
                        <img className='icon' src={user} alt="profile" />
                    </div>
                    <div className='input-box'>
                        <input type="email" placeholder='Email' required />
                        <img className='icon' src={email} alt="profile" />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <img className='icon' src={lock} alt="profile" />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the term & conditions</label>
                        
                    </div>

                    <button type="submit">Register</button>

                    <div className="register-link">
                        <p>Already have an account?<a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Singin;