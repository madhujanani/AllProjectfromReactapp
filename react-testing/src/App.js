import logo from './logo.svg';
import './App.css';
import User from './User';
import { useEffect,useState } from 'react';

function App() {
  // window.fetch=jest.fn(()=>{
  //   const user={title:'iphone 9',brand:'apple'}
  // })
  // return Promise.resolve({
  //   json:()=>Promise.resolve(user)
  // })
  
const [user,setUser]=useState('');
const[error,setError]=useState('')
  useEffect(()=>{
    fetch('https://dummyjson.com/products/1').then(user=>setUser(user)).catch(error=>setError(error.message))
  },[])
  if(error){
    return<span>{error}</span>
  }
  return (
    // <div className="App">
    //   <h1>React-testing</h1>
    //   <span  id="span1" data-testid="MySpan">My new Span</span>
    //   <ul className='animal'>
    //     <li>Dog</li>
    //     <li>Tiger</li>
    //     <li>Cat</li>
    //     <li>Rhino</li>
    //   </ul>
    // </div>
    <div>
      {user ? <User user={user}/>:<span>Loading...</span>}
    </div>
  );
}

export default App;
