import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form action="">
            <fieldset className="fieldset">
                <label className="label">FullName</label>
          <input type="text" className="input" placeholder="FullName" />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo-url" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
        <h2>Have you already an account Monsieur/Madam? <Link to={'/auth'} className='text-blue-500 hover:underline'>Log In</Link></h2>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;