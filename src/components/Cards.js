import React from 'react'
import bgMob from '../assets/images/bg-main-mobile.png'
import bgDesktop from '../assets/images/bg-main-desktop.png'
import CardFront from './CardFront'
import CardBack from './CardBack'
import '../styles/Cards.css'

const Cards = () => {
  return (
    <div>
        <img className='bgMobImage' src={bgMob} alt="bg-mob-image"/>
        <img className='bgDesktopImage' src={bgDesktop} alt="bg-desktop-image"/>
        <div className='cardsCont'>
          <CardBack />
          <CardFront />
        </div>
    </div>
  )
}

export default Cards