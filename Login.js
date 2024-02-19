import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
function Login()
{
    const[formValues,setFormvalues] =useState({ name:"", lastName:"",number:"",email:"",password:"",cPassword:""});
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const[formErrors,setFormerrors] =useState({});
    const[isSubmit,setIsSubmit] =useState(false);
    const handleChange = (e) => {
        const {name,value} =e.target;
        setFormvalues(prevState => ({
            ...prevState,
            [name]:value
        }))
        setFormvalues({...formValues , email: value});
       };

       const handleSubmit= (e) => {
        e.preventDefault();
        setFormerrors(validate(formValues));
        setIsSubmit(true);
       };

       useEffect(() => {
        console.log(formErrors);
       if(Object.keys(formErrors).length===0 && isSubmit){
        console.log(formValues);
       }
       },[formErrors]);
       const validate= (values) => {
        const errors ={};
        const regex = /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if(!email){
            errors.email = "Email is required";
        }else if(!regex.test(email)){
            errors.email = "this is not a valid email "; 
        }
        if(!password){
            errors.password = "Password is required";
        }else if(password<8){
            errors.password = "Password cannot be less than 8 caharcters";
        }
    }
return(
    <div>
        {Object.keys(formErrors).length===0 && isSubmit ? (<div className='ui message success'>Signed in successfully</div> ) : (
        <><pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        
        <form onSubmit={handleSubmit}>
            <div className='login-container'>
                <div className='heading'>
                    <h1>Login</h1>
                </div>

              
                <div>
                    <label>Email</label>
                    <input type="text" placeholder='Your Email'  onChange={(event)=>setEmail(event.target.value)} name= "email" />
                </div>
                <p>{formErrors.email}</p>

                <div>
                    <label>Password</label>
                    <input type="password" placeholder='Password'  onChange={(event)=>setPassword(event.target.value)} name= "password" />
                </div>
                <p>{formErrors.password}</p>

<div>
    <Link>Forgot Password</Link>
</div>
                <div className='submit-container'>
                    <button type="submit">SignUp</button>
                </div>
            </div>

        </form></>
        )}
</div>
    )
    
}
   

        
       

export default Login;