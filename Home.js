import React from 'react';

import { Link } from 'react-router-dom';

function Home()
{
return(
 <div className='header'>
    <h1>Welcome to code Strikers menu website</h1>
    <p>please select any of the options to start ordering, if you have not registered please do so</p> 
    <div>
        <Link>signUp</Link>
        <Link>Login</Link>
        </div>  
 </div>
)
}
export default Home;