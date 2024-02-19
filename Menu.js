import React from 'react';

import { Link } from "react-router-dom";

 function Menu(){
return (
  <div className='header'>
    <Link to="/Login"> Login</Link>
  </div>  
);

}

export default Menu;