import React, { useState } from 'react'
import CFrontImg from '../assets/images/bg-card-front.png'
import '../styles/CardFront.css'
import Logo from '../assets/images/card-logo.svg'
import { useSelector } from 'react-redux'

const CardFront = () => {
  const cardHolderName = useSelector((state) => state.cardHolderName.value)
  const cardHolderNumber = useSelector((state) => state.cardHolderNumber.value)
  const expMonth = useSelector((state) => state.expMonth.value)
  const expYear = useSelector((state) => state.expYear.value)

  return (
    <div className='CardFront'>
        <img src={CFrontImg} alt="cardFrontImage" />
        <div className="text-wrapper">
          <img src={Logo} alt="Logo" className='Logo'/>
          <h3 className="cardNumber">{cardHolderNumber == '' ? "0000 0000 0000 0000" : cardHolderNumber}</h3>
          <div className="box">
            <h5 className="cardHolderName">{cardHolderName == '' ? "Jane Applessed".toUpperCase() : cardHolderName.toUpperCase()}</h5>
            <div className="expDate">
              <h5 className="month">{expMonth == '' ? '00' : expMonth}</h5>
              <h5>/</h5>
              <h5 className="year">{expYear == '' ? '00' : expYear}</h5>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardFront