import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const {user,createUser}=useContext(AuthContext);
    const handleRegister=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name);
        createUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const result = userCredential.user;
            form.reset();
            //console.log(result);

            // ...
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
          });
    };
    return (
        <div className='flex justify-center my-20'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <form onSubmit={handleRegister} className="card-body  text-center">
                    <input type="text" name='name' placeholder="name" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="password" name='password' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    <button className="btn btn-primary">Register</button>
                    <div className="card-actions">
                        <Link to='/login'>Already have a acocount?Pls login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;