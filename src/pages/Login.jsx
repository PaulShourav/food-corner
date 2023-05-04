import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center my-20'>
            <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body  text-center">
            <input type="email" placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="password" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <button className="btn btn-primary">Login</button>
                <div className="card-actions">
                    <Link to='/register'>Create new account?</Link>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Login;