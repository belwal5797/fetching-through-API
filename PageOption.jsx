import React from 'react';
import {Link} from 'react-router-dom';

const PageOption=()=>{

     return(
         <>
         <h1>LIST OF USERS :</h1>
         <div className='link'>
          <Link to='page1' id='=page1'>USERS OF PAGE 1 :</Link><br/>
          <Link to='page2' id='page2'>USERS OF PAGE 2 :</Link> 
          </div>
         </>
     );
}


export default PageOption;