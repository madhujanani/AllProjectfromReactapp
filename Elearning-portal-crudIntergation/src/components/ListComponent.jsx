import React, { useEffect, useState } from 'react'
import { listUsers } from '../Services/UserService'
import { useNavigate } from 'react-router-dom'
const ListComponent = () => {

    // const dummyData=[
    //     {
    //     "userId": 52,
    //     "name": "Anil",
    //     "phoneNo": 450966934,
    //     "email": "ankil@gmail/com",
    //     "address": "ambala",
    //     "date": "09-11-2022",
    //     "password": "anil",
    //     "uploadPhoto": "img1.png",
    //     "userType": "Admin"
    //     },
    //     {
    //         "userId": 62,
    //         "name": "bali",
    //         "phoneNo": 4998966934,
    //         "email": "bali@gmail/com",
    //         "address": "delhi",
    //         "date": "06-11-2021",
    //         "password": "bali",
    //         "uploadPhoto": "img2.png",
    //         "userType": "Student",
    //     },
    //     {
    //         "userId": 72,
    //         "name": "porni",
    //         "phoneNo": 451234567,
    //         "email": "porni@gmail/com",
    //         "address": "punjab",
    //         "date": "07-10-2019",
    //         "password": "porni",
    //         "uploadPhoto": "img8.png",
    //         "userType": "student"
    //         },
       //         ]
    const [users,setUsers]=useState([]) //in order to hold the state of api use usestate
    useEffect(()=>{         //to make api or ajax call we need to use useeffect hook
        listUsers().then((response)=>{ //listuser ( from user service component)
            setUsers(response.data)
        }).catch(error=>{
            console.error(error);
        })
    },[])

    const navigator =useNavigate();//just like obj creation in java

    function addNewUser(){
            //inorder to navigate  user from one page to other use usenavigate hook
            navigator('/add-user')// as we are clicking the button it will navigate to add user commponent
    }

    function updateUser(id){
        navigator(`/edit-user/${id}`)
    }
    
  return (
    <div className='container'>
        <h1 className='text-center'>All User Details</h1>
        <button className='btn btn-primary mb-2' onClick={addNewUser}>Add User</button>
        <table className=' table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>PhoneNo</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>password</th>
                    <th>Photo</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user=>
                        <tr key={user.userId}>
                        <td>{user.userId}</td>
                        <td>{user.name}</td>
                        <td>{user.phoneNo}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.date}</td>
                        <td>{user.password}</td>
                        <td>{user.uploadPhoto}</td>
                        <td>{user.userType}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=>updateUser(user.userId)}>Update</button>
                        </td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListComponent