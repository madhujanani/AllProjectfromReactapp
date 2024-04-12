import React, { useEffect, useState } from 'react'
import { createUser, getUser } from '../Services/UserService';
import { useNavigate ,useParams} from 'react-router-dom';
import DateFormatter from '../utils/DateFormatter';

const UserComponent = () => {
  const [name,setName]= useState('');
  const [phoneNo,setPhoneNo]= useState('');
  const [email,setEmail]= useState('');
  const [address,setAddress]= useState('');
  const [date,setdate]= useState('');
  const [password,setPassword]= useState('');
  const [uploadPhoto,setUploadPhoto]= useState('');
  const [userType,setUserType]= useState('');

  const{id}=useParams();

 const [errors,seterrors]= useState({
      name:'',
      phoneNo:'',
      email:'',
      address:'',
      date:'',
      password:'',
      uploadPhoto:'',
      userType:''
  })



  
//const handleName=(e)=>setName(e.target.value) this line moved to 64. same way we can do with all functions, 

const  handlePhoneNumber=(e)=>{ //13 ,,15-17 ,19-21 same as 23-25,27-29 and so on difference is normal function vs arrow functions
  setPhoneNo(e.target.value)
}

const handleEmail=(e)=>{
  setEmail(e.target.value)
}

function handleAddress(e){
  setAddress(e.target.value)
}

function handleDate(e){
  setdate(e.target.value)
}

function handlePassword(e){
  setPassword(e.target.value)
}

function handleUploadPhoto(e){
  setUploadPhoto(e.target.value)
}

function handleUserType(e){
  setUserType(e.target.value)
}

const  navigator=useNavigate();

useEffect(()=>{

  if(id){
    getUser(id).then((response)=>{
      setName(response.data.name);
      setPhoneNo(response.data.phoneNo);
      setEmail(response.data.email);
      setAddress(response.data.address);
      setdate(DateFormatter(response.data.date, "YYYY-MM-DD"));
      setPassword(response.data.password)
      setUploadPhoto(response.data.uploadPhoto)
      setUserType(response.data.userType)
    }).catch(error=>{
      console.error(error)
    })
  }

},[id])


function saveUser(e){
  e.preventDefault();

  if (validateForm()) {
    const user ={name,phoneNo,email,address,date,password,uploadPhoto,userType}
    console.log(user);
  
    createUser(user).then((response)=>{
      console.log(response.data);
      navigator('/users')
    })
  }

}

function validateForm(){
  let valid =true;

  const errorsCopy ={...errors}

  if (name.trim()) {
    errorsCopy.name='';
  } else {
    errorsCopy.name='Name is required';
    valid=false;
  }

  if (phoneNo.trim()) {
    errorsCopy.phoneNo='';
  } else {
    errorsCopy.phoneNo='PhoneNumber is required';
    valid=false;
  }

  if (email.trim()) {
    errorsCopy.email='';
  } else {
    errorsCopy.email='Email is required';
    valid=false;
  }
  
  if (address.trim()) {
    errorsCopy.address='';
  } else {
    errorsCopy.address='address is required';
    valid=false;
  }

  if (date.trim()) {
    errorsCopy.date='';
  } else {
    errorsCopy.date='Date is required';
    valid=false;
  }

  if (password.trim()) {
    errorsCopy.password='';
  } else {
    errorsCopy.password='password is required';
    valid=false;
  }

  if (uploadPhoto.trim()) {
    errorsCopy.uploadPhoto='';
  } else {
    errorsCopy.uploadPhoto='photo is required';
    valid=false;
  }

  if (userType.trim()) {
    errorsCopy.userType='';
  } else {
    errorsCopy.userType='user Type is required';
    valid=false;
  }
  seterrors(errorsCopy);
  return valid;
}

function pageTitle(){

  if(id){
    return   <h2 className='text-center'>Update Users</h2> ;
  }
  else{
    return   <h2 className='text-center'>Add Users</h2> ;

  }

}
  return (
    <div className='container'>
      <br></br><br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'> 
        {
        pageTitle()
        }
        <div className='card-body'>
          <form>
            <div className='form-group mb-2'>
              <label className='form-label'>Name:</label>
              <input 
              type='text'
              placeholder='Enter your name'
              name='name'
              value={name}
              className={`form-control ${errors.name? 'is-invalid':''}`}
              onChange={(e)=>setName(e.target.value)}
              >               
              </input>
              {errors.name && <div className='invalid-feedback'>{errors.name} </div>}
            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>PhoneNumber:</label>
              <input 
              type='number'
              placeholder='Enter your phonenumber'
              name='phoneno'
              value={phoneNo}
              className={`form-control ${errors.phoneNo? 'is-invalid':''}`}
              onChange={handlePhoneNumber}
              >               
              </input>
              {errors.phoneNo && <div className='invalid-feedback'>{errors.phoneNo} </div>}

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Email:</label>
              <input 
              type='text'
              placeholder='Enter your  mailId'
              name='email'
              value={email}
              className={`form-control ${errors.email? 'is-invalid':''}`}
              onChange={handleEmail}
              >               
              </input>
              {errors.email && <div className='invalid-feedback'>{errors.email} </div>}

            </div>

          

            <div className='form-group mb-2'>
              <label className='form-label'>Address:</label>
              <input 
              type='text'
              placeholder='Enter your Address'
              name='address'
              value={address}
              className={`form-control ${errors.address? 'is-invalid':''}`}
              onChange={handleAddress}
              >               
              </input>
              {errors.address && <div className='invalid-feedback'>{errors.address} </div>}

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Date:</label>
              
              <input 
              type='date'              
              placeholder='Enter date'
              name='address'
              value={date}
              

              className={`form-control ${errors.date? 'is-invalid':''}`}
              onChange={handleDate}
              >               
              </input>
              {errors.date && <div className='invalid-feedback'>{errors.date} </div>}

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Password:</label>
              <input 
              type='password'
              placeholder='Enter password'
              name='password'
              value={password}
              className={`form-control ${errors.password? 'is-invalid':''}`}
              onChange={handlePassword}
              >               
              </input>
              {errors.password && <div className='invalid-feedback'>{errors.password} </div>}

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Upload Photo:</label>
              <input 
              type='text'
              placeholder='upload photo'
              name='photo'
              value={uploadPhoto}
              className={`form-control ${errors.uploadPhoto? 'is-invalid':''}`}
              onChange={handleUploadPhoto}
              >               
              </input>
              {errors.uploadPhoto && <div className='invalid-feedback'>{errors.uploadPhoto} </div>}

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>User Type:</label>
              <input 
              type='text'
              placeholder='Enter type'
              name='usertype'
              value={userType}
              className={`form-control ${errors.userType? 'is-invalid':''}`}
              onChange={handleUserType}
              >               
              </input>
              {errors.userType && <div className='invalid-feedback'>{errors.userType} </div>}

            </div>

            <button className='btn btn-success' onClick={saveUser}>Submit</button>
          </form>

        </div>
        </div>

      </div>
        <h1></h1>
    </div>
  )
}

export default UserComponent
