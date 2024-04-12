import './App.css';
import {BrowserRouter,Routes,Route,Link }from 'react-router-dom'
import SearchTicket from './Component/SearchTicket';
import NewTicket from './Component/NewTicket';
import Navigationbar from './Component/Navigationbar';
import ContactUs from './Component/ContactUs';
function App() {
  return (
    <div className="App">
      <Navigationbar/>

      <h1>Welcome to Explore the world</h1>
      <BrowserRouter>
      {/* <Link to ="NewTicket">NewTicket</Link>
      <Link to ="SearchTicket">SearchTicket</Link> */}
      <Routes>
        <Route path="/NewTicket" element={<NewTicket/>}/>
        <Route path="/SearchTicket" element={<SearchTicket/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
