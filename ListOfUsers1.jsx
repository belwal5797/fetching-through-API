import React,{useEffect, useState}from 'react';

const ListOfUsers1=()=>{

    const [user,setUser]=useState([]);
    const [newUser,SetnewUser]=useState([]);

    const getUsers=async()=>{

     const res=await fetch('https://reqres.in/api/users?page=1');
     const data=await res.json();
     console.log(data);
     /*console.log(data.data[1].first_name);*/
     setUser(data.data);
     

    }

    useEffect(() => {
        getUsers();
    },[])

    return(
        <>
          <table className='table'>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        {
            user.map((info)=>{
                return (
                    <>
                  
                         <tr>
                         <td>{info.first_name}</td>
                         <td> {info.last_name}</td>
                         </tr>
                    </>
                    )
                 
            })
        }
        
        </table>
        

       
        

       </>
    );
}

export default ListOfUsers1;