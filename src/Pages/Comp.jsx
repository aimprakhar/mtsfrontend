import React from 'react'
import "./comp.css"
import Form from '../components/Forms/Form'
import About from '../components/about/About';
import Edit from '../components/editdelete/Edit';
import Contact from '../components/contact us/Contact';
import { Home } from './home/Home';
import Nav from '../components/Nav/Nav';
import { Header } from '../components/header/Header';
import { MailList } from '../components/mailList/MailList';
import { Footer } from '../components/Footer/Footer';
import { List } from './list/List';
import Login from './login/Login';
import FormSuccess from '../components/Forms/FormSuccess';
import { RentalF } from '../components/featuredd/RentalF';

import { Featuredd } from '../components/featuredd/Featuredd';
import Edit2 from '../components/editdelete/Edit2';
const Comp = ({root}) => {
    let rot=<Home/>;
 
    if(root==="about"){
        rot=<About/>
    }

    else if(root==="contact"){
        rot=<Contact/>
    }

    else if(root==="edit"){
        rot=<Edit/>
    }
    else if(root==="edit2"){
        rot=<Edit2/>
    }

    else if(root==="form"){
        rot=<Form/>
    }
    else if(root==="list"){
        rot=<List/>
    }
    else if(root==="login"){
        rot=<Login/>
    }
    else if(root==="formSuccess"){
        rot=<FormSuccess/>
    }
    else if(root==="rental"){
        rot=<RentalF/>
    }
    else if(root==="join"){
        rot= <Featuredd type="all"/>
    }

    else {
        rot=<Home/>
    }


  return (
    <>
   <Nav/>
 <Header type="list"/>
    <div className="Comp">
  {  ( rot )}
    </div>
     

   {(root==="about"||root==="form")?(<Footer/>):(<div/>)} 
    </>
  )
}

export default Comp