
import './App.css';
import { BrowserRouter,Routes,Route, HashRouter } from 'react-router-dom';
import { Home } from './Pages/home/Home';

import { Hotels } from './Pages/hotels/Hotels';
import { PaymentPage } from './components/paymentPage/PaymentPage';

import Reg from './Pages/login/Reg';
import Error from './Pages/login/Error';



import { SearchitemD } from './components/searchItem/SearchItemD';
import { useState } from 'react';
import Comp from './Pages/Comp';
import Edit from './components/editdelete/Edit';
import Edit2 from './components/editdelete/Edit2';

import Test from './components/Test';




function App() {
 const [a,b]=useState("y")
  return (
    <HashRouter>
    <Routes >
   
     <Route path="/" element={<Home/>}/>
     {/* ----------------------------------------------------- */}
     {/* Unused */}
      <Route path="/hotels" element={<Hotels/>}/> 
      <Route path="/pay" element={<PaymentPage/>}/>
     
     <Route path="/register" element={<Reg/>}/>
     <Route path="/error" element={<Error/>}/>
     {/* <Route path="/hotels/find/:id" element={<Hotels/>}/> */}
   {/* --------------------------------------------------------------- */}
      {/* Components */}
     <Route path="/about" element={<Comp root="about"/>}/>
     <Route path="/form" element={<Comp root="form"/>}/>
     <Route path="/edit" element={<Comp root="edit"/>}/>
     
     <Route path="/edit2" element={<Comp root="edit2"/>}/>
     <Route path="/contact" element={<Comp root="contact"/>}/>
     <Route path="/trips" element={<Comp root="list"/>}/>
     <Route path="/login" element={<Comp root="login"/>}/>
     <Route path="/formSuccess" element={<Comp root="formSuccess"/>}/>
     <Route path="/rental" element={<Comp root="rental"/>}/>
     <Route path="/join" element={<Comp root="join"/>}/>
     
  
    {/* ---------------------------------------------- */}
    
   
    
    
    
     
    
    
    
   
     <Route path="/f/:tripN" element={<SearchitemD/>}/>
     <Route path="comp" element={<Comp root="form"/>}/>
     
     <Route path="test" element={<Test/>}/>
     

    
 
 
    </Routes>
    
    </HashRouter>
   
    
  );
}

export default App;
