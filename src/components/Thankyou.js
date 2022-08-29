import React from 'react'
import iconComplete from '../assets/images/icon-complete.svg'
import '../styles/Thankyou.css'

const Thankyou = () => {
  return (
    <div className='Thankyou'>
        <img src={iconComplete} alt="icon complete" />
        <h3>THANK YOU!</h3>
        <h5>We've added your card details</h5>

        <button className='ContinueBtn'>Continue</button>
    </div>
  )
}

export default Thankyou