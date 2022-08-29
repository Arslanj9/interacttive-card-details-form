import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowThankyou } from '../features/confirmSlice'
import { setcardHolderName } from '../features/nameSlice'
import { setcardHolderNumber } from '../features/numberSlice'
import { setExpMonth } from '../features/expMonthSlice'
import { setExpYear } from '../features/expYearSlice'
import { setCvcNum } from '../features/cvcSlice'
import '../styles/GetInput.css'

const GetInput = () => {
  const dispatch = useDispatch()
  const cardHolderName = useSelector((state) => state.cardHolderName.value)

  const onConfirm = (e) => {
    e.preventDefault();
    // if ()
    dispatch(setShowThankyou(true))
  }

  return (
    <div className="GetInput">
      <div className="container">

        <div className="name-wrapper">
          <h5>CARDHOLDER NAME</h5>
          <input className='name-placeholder' type="text" placeholder='e.g. Jane Applessed' value={cardHolderName} onChange={(e) => dispatch(setcardHolderName(e.target.value))} />
        </div>

        <div className="number-wrapper">
          <h5>CARD NUMBER</h5>
          <input className='number-placeholder' type="text" placeholder='e.g. 1234 5678 9123 0000' onChange={(e) => dispatch(setcardHolderNumber(e.target.value))} />
        </div>
        
        <div className="expDate-cvc-wrapper">
          <div className="expDate-wrapper">
            <h5>EXP. DATE (MM/YY)</h5>
            <div className="input-wrapper">
              <input type="number" placeholder='MM' onChange={(e) => dispatch(setExpMonth(e.target.value))} />
              <input type="number" placeholder='YY' onChange={(e) => dispatch(setExpYear(e.target.value))} />
            </div>
          </div>
          <div className="cvc-input-wrapper">
            <h5>CVC</h5>
            <input type="number" placeholder='e.g. 123' onChange={(e) => dispatch(setCvcNum(e.target.value))}/>
          </div>
        </div>

        <button onClick={onConfirm} className='ConfirmBtn'>Confirm</button>
        
      </div>
    </div>
  )
}

export default GetInput