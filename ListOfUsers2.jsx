import React,{useEffect, useState}from 'react';

const ListOfUsers2=()=>{

    const [newUser,SetnewUser]=useState([]);

    const getUsers1=async()=>{

        const res1=await fetch('https://reqres.in/api/users?page=2');
        const data1=await res1.json();
        console.log(data1);
        SetnewUser(data1.data);

       }



       useEffect(() => {
        getUsers1();
    },[])

    return(
        <>
            <table className='table1'>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        {
            newUser.map((info1)=>{
                return (
                    <>
                  
                         <tr>
                         <td>{info1.first_name}</td>
                         <td> {info1.last_name}</td>
                         </tr>
                    </>
                    )
                 
            })
        }
        
        </table>
        </>
    );
}

export default ListOfUsers2;