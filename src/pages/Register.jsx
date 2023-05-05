import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const [showPassword,setShowPassword]=useState(true);
    const { user, createUser, googleLogin } = useContext(AuthContext);
    const [error,setError]=useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length<=6){
            setError('Pls enter at least 6 charecter.')
            return
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
            .then((error) => {
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
                    <p onClick={()=>setShowPassword(!showPassword)} className='ms-0'>
                    {
                        showPassword? <span>Show password</span>:<span>Hide password</span>
                    }
                    </p>
                   
                    <button className="btn btn-primary w-full">Register</button>
                    <div className="card-actions">
                        <Link to='/login'>Already have a acocount?Pls login</Link>
                    </div>
                    <button onClick={handleGoogleAuth} className="btn btn-primary">Google</button>
                </form>


            </div>
        </div>
    );
};

export default Register;