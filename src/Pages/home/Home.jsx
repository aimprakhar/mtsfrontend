import React from 'react'
import { Featuredd } from '../../components/featuredd/Featuredd'
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/header/Header'
import { MailList } from '../../components/mailList/MailList'
import { Navbar } from '../../components/Navbar'
import { PropertyList } from '../../components/propertyList/PropertyList'
  import "./home.css"
import Nav from '../../components/Nav/Nav'


export const Home = () => {
  return (
    <div className='maindiv'>
        <Nav/>
        {/* <Navbar/> */}
        <Header/> 
        <Featuredd/> 
        {/* <div className="homeContainer">
         <Featuredd/> 

        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList/> 
        <h1 className='homeTitle'>Home Guests Love</h1>
         <FeaturedProperties/> 
        <MailList/>
        // <Footer/>
       </div> */}
       <Footer/>  
    </div>
    // <div>home</div>
  )
}
