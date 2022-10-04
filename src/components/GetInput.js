import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowThankyou } from '../features/confirmSlice'
import { setcardHolderName } from '../features/nameSlice'
import { setcardHolderNumber } from '../features/numberSlice'
import { setExpMonth } from '../features/expMonthSlice'
import { setExpYear } from '../features/expYearSlice'
import { setCvcNum } from '../features/cvcSlice'
import '../styles/GetInput.css'

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// ------ schema for yup ------
const schema = yup.object().shape({
  cardHolderName: yup.string().required("Please Enter Your Name"),
  cardNumber: yup.number().min(2).max(9999999999999999, "Card Number too long").typeError("Please Enter Card Number").required(),
  expMonthNum: yup.number().min(1).max(12).typeError("*").required(),
  expYearNum: yup.number().min(1).max(99).typeError("*").required(),
  cvcNum: yup.number().min(1).max(999).typeError("*").required(),
})


const GetInput = () => {
  // ------ redux ------
  const dispatch = useDispatch()
  const cardHolderName = useSelector((state) => state.cardHolderName.value)

  const onConfirm = (data) => {
    console.log(data)
    dispatch(setShowThankyou(true))
  }

  // ------ react hook form ------
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });



  return (
    <div className="GetInput">
      <div className="container">

        <form onSubmit={handleSubmit(onConfirm)}>
          <div className="name-wrapper">
            <h5>CARDHOLDER NAME</h5>
            <input className='name-placeholder' {...register("cardHolderName")} type="text" placeholder='e.g. Jane Applessed' value={cardHolderName} onChange={(e) => dispatch(setcardHolderName(e.target.value))} />
            <p className='errors'>{errors.cardHolderName?.message}</p>
          </div>

          <div className="number-wrapper">
            <h5>CARD NUMBER</h5>
            <input className='number-placeholder' {...register("cardNumber")} type="text" placeholder='e.g. 1234 5678 9123 0000' onChange={(e) => dispatch(setcardHolderNumber(e.target.value))} />
            <p className='errors'>{errors.cardNumber?.message}</p>
          </div>
          
          <div className="expDate-cvc-wrapper">
            <div className="expDate-wrapper">
              <h5>EXP. DATE (MM/YY)</h5>

              <div className="input-wrapper">
                <input type="number" max="12" min="01" {...register("expMonthNum")} placeholder='MM' onChange={(e) => dispatch(setExpMonth(e.target.value))} />
                <p className="errors error-asterisk">{errors.expMonthNum?.message}</p>
                <input type="number" max="99" min="01" {...register("expYearNum")} placeholder='YY' onChange={(e) => dispatch(setExpYear(e.target.value))} />
                <p className="errors error-asterisk">{errors.expYearNum?.message}</p>
              </div>

            </div>
            <div className="cvc-input-wrapper">

              <h5>CVC</h5>
              <div className="cvcDiv">
                <input type="number" max="999" min="100" {...register("cvcNum")} placeholder='e.g. 123' onChange={(e) => dispatch(setCvcNum(e.target.value))}/>
                <p className="errors error-asterisk">{errors.cvcNum?.message}</p>
              </div>

            </div>
          </div>

          <input className='ConfirmBtn' type="submit" />
        </form>

        
      </div>
    </div>
  )
}

export default GetInput
