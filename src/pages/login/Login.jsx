import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../component/authprovider/Authprovider';
import { toast } from 'react-toastify';

const Login = () => {
  const {userLogin}=use(AuthContext);
  const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const pass=e.target.pass.value;
        console.log(email,pass);
        userLogin(email,pass).then(res=>toast("Log in to our website")).catch(err=>console.log(err))
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleLogin}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='pass' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <h2>Wanna create new account? <Link className='text-blue-600 hover:underline' to={'register'}>Register now</Link></h2>
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;