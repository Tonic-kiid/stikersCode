import { useState,useEffect } from 'react';

import "./SignUp.css";

function SignUp(){
   const[formValues,setFormvalues] =useState({ name:"", lastName:"",number:"",email:"",password:"",cPassword:""});
   const [name, setName] =useState('')
   const [lastName, setLastName] =useState('')
   const [number, setNumber] =useState('')
   const [email, setEmail] =useState('')
   const [password, setPassword] =useState('')
   const [cPassword, setCPassword] =useState('')
   const[formErrors,setFormerrors] =useState({});
   const[isSubmit,setIsSubmit] =useState(false);

   const handleChange = (e) => {
    const {name,value} =e.target;
    setFormvalues(prevState => ({
        ...prevState,
        [name]:value
    }))
    setFormvalues({...formValues , name: value});
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
    if(!name){
        errors.name = "Name is required"
    }
    if(!lastName){
        errors.lastName = "Last name is required";
    }
    if(!number){
        errors.number = "Number is required";
    }
    if(!email){
        errors.email = "Email is required";
    }else if(!regex.test(email)){
        errors.email = "this i not a valid email "; 
    }
    if(!password){
        errors.password = "Password is required";
    }else if(password<8){
        errors.password = "Password cannot be less than 8 caharcters";
    }
    if(!cPassword){
        errors.cPassword = "Plaese confirm your password ";
    }else if(cPassword!== password)
    {
        errors.cPassword = "Password does not match" ; 
    }
    return errors;
   };

    return (
        <div>
        {Object.keys(formErrors).length===0 && isSubmit ? (<div className='ui message success'>Signed in successfully</div> ) : (
        <><pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        
        <form onSubmit={handleSubmit}>
            <div className='login-container'>
                <div className='heading'>
                    <h1>Sign Up</h1>
                </div>

                <div>
                    <label>First Name</label>
                    <input type="text" placeholder='First Name'  onChange={(event)=>setName(event.target.value)} name="name" />
                </div>
                <p>{formErrors.name}</p>
                <div>
                    <label>Last Name</label>
                    <input type="text" placeholder='Last Name'  onChange={(event)=>setLastName(event.target.value)} name="lastName"/>
                </div>
                <p>{formErrors.lastName}</p>

                <div>
                    <label>Phone number</label>
                    <input type="tel" placeholder='Your Phone number'  onChange={(event)=>setNumber(event.target.value)} name= "number"/>
                </div>
                <p>{formErrors.number}</p>

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
                    <label>Confirm password</label>
                    <input type="text" placeholder='Confirm Password' onChange={(event)=>setCPassword(event.target.value)} name= "cPasword"  />
                </div>
                <p>{formErrors.cPassword}</p>

                <div className='submit-container'>
                    <button type="submit">SignUp</button>
                </div>
            </div>

        </form></>
        )}
</div>
    )
    
}
        

export default SignUp;