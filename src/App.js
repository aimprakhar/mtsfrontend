
import './App.css';
import { BrowserRouter,Routes,Route, HashRouter } from 'react-router-dom';
import { Home } from './Pages/home/Home';
import { List } from './Pages/list/List';
import { Hotels } from './Pages/hotels/Hotels';
import { PaymentPage } from './components/paymentPage/PaymentPage';
import Login from './Pages/login/Login';
import Reg from './Pages/login/Reg';
import Error from './Pages/login/Error';
import Form from './components/Forms/Form';
import FormSuccess from './components/Forms/FormSuccess';
import Nav from './components/Nav/Nav';
import About from './components/about/About';
import Contact from './components/contact us/Contact';
import Edit from './components/editdelete/Edit';
import Rental from './components/rental/Rental';
import Join from './components/join/Join';

import { RentalF } from './components/featuredd/RentalF';
import RentalS from './components/rentalf/RentalS';
import { SearchitemD } from './components/searchItem/SearchItemD';
import { useState } from 'react';




function App() {
 const [a,b]=useState("y")
  return (
    <HashRouter>
    <Routes >
     <Route path="/" element={<Home/>}/>
     <Route path="/trips" element={<List/>}/>
      <Route path="/hotels" element={<Hotels/>}/> 
     {/* <Route path="/hotels/find/:id" element={<Hotels/>}/> */}
   
     <Route path="/pay" element={<PaymentPage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Reg/>}/>
     <Route path="/error" element={<Error/>}/>
     <Route path="/form" element={<Form/>}/>
     <Route path="/formSuccess" element={<FormSuccess/>}/>
     <Route path="/nav" element={<Nav/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/edit" element={<Edit/>}/>
     <Route path="/rental" element={<RentalF/>}/>
     <Route path="/join" element={<Join/>}/>
     <Route path="/test" element={<RentalF/>}/>
     <Route path="/f/:tripN" element={<SearchitemD/>}/>
     {/* <Route element={<Home/>}/> */}
 
     

    
 
 
    </Routes>
    
    </HashRouter>
   
    
  );
}

export default App;
