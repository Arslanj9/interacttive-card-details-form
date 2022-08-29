import React from 'react'
import CBackImg from '../assets/images/bg-card-back.png'
import '../styles/CardBack.css'
import { useSelector } from 'react-redux'

const CardBack = () => {
  const cvcNum = useSelector((state) => state.cvcNum.value)

  return (
    <div className='CardBack'>
        <img src={CBackImg} alt="Card back image" />
        <div className="cvc-wrapper">
          <p className='cvcNum'>{cvcNum == '' ? '000' : cvcNum}</p>
        </div>
    </div>
  )
}

export default CardBack