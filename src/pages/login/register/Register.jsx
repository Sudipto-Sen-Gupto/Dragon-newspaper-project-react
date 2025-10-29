import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../../component/authprovider/Authprovider';

const Register = () => {
  const {createUser,setDetail,updateUser}=use(AuthContext);
  const navigate=useNavigate()
  const location=useLocation()
  const handleRegister=(e)=>{
      e.preventDefault();
      const email=e.target.email.value;
      const pass=e.target.pass.value;
      const name=e.target.name.value;
      const photo=e.target.photo.value;
     createUser(email,pass).then((res)=>{
      const result=res.user;
      updateUser({displayName:name,photoURL:photo}).then(res=>{  setDetail({...result,displayName:name,photoURL:photo}
       
      )
       navigate('/')
      }).catch(err=>console.log(err))
   
     }).catch(err=>console.log(err))
  }
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
                <label className="label">FullName</label>
          <input type="text" className="input" placeholder="FullName" name='name' />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo-url" name='photo' />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='pass' />
          <input type='submit' value={'Sign up'} className="btn btn-neutral mt-4"/>
        </fieldset>
        <h2>Have you already an account Monsieur/Madam? <Link to={'/auth/login'} className='text-blue-500 hover:underline'>Log In</Link></h2>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;