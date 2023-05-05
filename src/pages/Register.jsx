import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = () => {
    const [showPassword,setShowPassword]=useState(true);
    const { user, createUser, googleLogin,githubLogin } = useContext(AuthContext);
    const [error,setError]=useState('');

    const handleRegister = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        if(password.length<=6){
            setError('Pls enter at least 6 charecter.');
            return;
        }
        if (!(password==confirm_password)) {
            setError("Password dosn't match.");
            return;
        }
        if(!/(?=.*[!@#$%^&*])/.test(password)) {
            setError("At least one special character");
            return;
        }
        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const result = userCredential.user;
                form.reset();
                //console.log(result);

            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleGoogleAuth = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleGithubAuth = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='flex justify-center my-20'>
            <div className="card w-96 bg-base-100 shadow-xl ">
               
                <p className='text-2xl font-bold text-center'>Register</p>
                {
                    error && <p className='text-red-700 text-center'>{error}</p>
                }
                
             
                
                <form onSubmit={handleRegister} className="card-body  text-center pt-5" >
                    <input type="text" name='name' placeholder="name" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type={showPassword?'password':'text'} name='password' placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type={showPassword?'password':'text'} name='confirm_password' placeholder="Confirm Password" className="input input-bordered input-primary w-full max-w-xs" />
                    <p onClick={()=>setShowPassword(!showPassword)} className='ms-0'>
                    {
                        showPassword? <span><FontAwesomeIcon icon="fa-regular fa-eye" /> Show password</span>:<span><FontAwesomeIcon icon="fa-regular fa-eye-slash" /> Hide password</span>
                    }
                    </p>
                   
                    <button className="btn btn-primary w-full">Register</button>
                    <div className="card-actions">
                        <Link to='/login'>Already have a acocount?Pls login</Link>
                    </div>
                    <button onClick={handleGoogleAuth} className="btn btn-primary"> Google</button>
                    <button onClick={handleGithubAuth} className="btn btn-primary"> Github</button>
                </form>


            </div>
        </div>
    );
};

export default Register;