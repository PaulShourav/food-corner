import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { user, logIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/'
    const handleLogin = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const result = userCredential.user;
                form.reset();
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage);
            });
    };
    return (
        <div className='flex justify-center my-20'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <p className='text-2xl font-bold text-center'>Login</p>
                {
                    error && <p className='text-red-700 text-center'>{error}</p>
                }
                <form onSubmit={handleLogin} className="card-body  text-center pt-5">
                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="password" name='password' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    <button className="btn btn-primary">Login</button>
                    <div className="card-actions">
                        <Link to='/register'>Create new account?</Link>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;