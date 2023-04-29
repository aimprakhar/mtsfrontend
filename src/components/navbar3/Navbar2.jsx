import React from 'react'
import "./navbar2.css"

const Navbar2 = () => {
  return (
  <nav>

  <input type="checkbox" id="check" />
  <label htmlFor="check" className="checkbtn">
    hi
  </label>

  {/* <label htmlFor="" >MyPrakhar</label> */}
  <label className='logo'>MyPrakhar</label>
  <ul>
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="/">about</a>
    </li>
    <li>
        <a href="/">services</a>
    </li>
    <li>
        <a href="/">contact</a>
    </li>
  </ul>

  </nav>

  )
}

export default Navbar2