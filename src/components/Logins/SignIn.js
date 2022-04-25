import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './login.css'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([])
    const formsubmit = (e) => {
        e.preventDefault();
        if(email && password){
            const newEntry = {email: email, password: password};

            setAllEntry([...allEntry, newEntry]);
            setEmail('');
            setPassword('');
        }else{
            alert('Please fill the data')
        }
    }
    return (
        <>
        <div className='body'>
            <div className='login-box'>
                <h1>Login</h1>
                <form action='' onSubmit={formsubmit}>
                    <input 
                        type="email" 
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Your Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />   
                    <div class="check">
                        <input type="checkbox"/> 
                        <label>I agree to the Terms Of Services</label>
                    </div>                       
                    <input type="submit" value="Sign in"/>
                </form>
                <p class="para-3">
                    Not have an Account? <NavLink to='/signup'>Sign Up Here</NavLink>
                </p>
            </div>
        </div>
        </>
    )
}

export default SignIn
