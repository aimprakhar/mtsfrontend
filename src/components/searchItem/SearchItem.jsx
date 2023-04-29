import React from 'react'
import {useNavigate } from 'react-router-dom';
import "./searchItem.css"
import { Link } from 'react-router-dom';

export const SearchItem = ({item}) => {
  const navigate =useNavigate();
  const handle=()=>{
    navigate("/hotels/find");
 }

  const p="https://media.istockphoto.com/id/1164435677/photo/happy-hotel-clerks-are-welcoming-professional-at-counter.jpg?s=612x612&w=0&k=20&c=XNbtAFwGK4AHd7JKKQycDwTQcIXFagIxt9TXLNb0Dd4=";

  return (
    
    <div className='searchItem' >
<img src={p} alt="" className='siImg'/>
<div className='div11'>

<div className='div12'>
  <div>
   <span className='red'>StartLocation</span>:{item.From} 
   </div>
   <div>
   <span className='red'>Destination</span>:{item.To}
   </div>
   </div>
      <div  className='cntr div13'>
<div className="siDesc">
{/* <h1 className="siTitle"><span className='red'>StartLocation</span>:{item.From} <br/><span ><span className='red'>Destination</span>:{item.To}</span></h1> */}
{/* <span className="siDistance">{item.To} from centre</span> */}
<span className="siTaxiOp">Mode of Transport :By Road</span>
<span className="siSubtitle">Trip Organisor: {item.Creater_Name} </span>
<span className="siCancelOp">Trip Organisor Contact Number: {item.Creater_Mobile_number}</span>
<span className='siFeatures'>{item.AdditionalDetails}</span>

<span className="siCancelOpSubtitle">You can join and leave the trip as per your consent .Trip organisor will finally decide the final fellow people going for</span>




</div>


<div className="siDetails">
  {/* { item.rating&& 
  <div className="siRating">
    <span>Excellent</span>
    <button>{item.rating}</button>
  </div>
} */}
  <div className='siDetailTexts'>
  {/* <span className="siPrice"><span>{item.Date}</span></span> */}
<span className="siPrice">Expenses {item.AppxTripExpenses}</span>
{/* <span className="siTaxOp">Includes taxes and fees</span> */}

<Link to={`/hotels/find/${item._id}`}> 
<button className='siCheckButton'>Join the Trip</button>
</Link>

  </div>
    
</div>
</div>

</div>



        </div>
  )
}
