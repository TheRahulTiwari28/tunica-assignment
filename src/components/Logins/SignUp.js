import React from 'react'
import { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

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
        <div className='signup'>
            <div className='signup-box'>
                <h1>SignUp Now</h1>
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
                    <input 
                        type="password" 
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <input type="submit" value="Sign Up"/>
                </form>
                {/* <p>By Clicking the sign up button, you agree to our <br/>
                    <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
                </p> */}
                <p class="para-2">Already have an account? <a href="/signin">Login Here</a></p>
            </div>
        </div>
    )
}

export default SignUp
