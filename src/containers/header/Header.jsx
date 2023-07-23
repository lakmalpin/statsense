import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='statsense__header section__padding' id="home">
      <div className='statsense__header-content'>
        <h1 className='stat_sense_orange_text'>Welcome To Stat Sense Consulting</h1>
        <p>Stat Sense is a statistics consulting service which offers statistical support for research projects in the applied sciences, specially the health sciences. We provide statistical consultation and assistance with analysis for clinical, genetic, and high throughput biotechnological (genomics, microarrays) data. We help select and/or perform the proper statistical analyses and provide support in interpreting and writing analysis results.</p>
        <div className='statsense__header-content__input'>
          <input type="email" placeholder='Your email'></input>
          <button type="button">Get Started</button>
        </div>
        <div className='statsense__header-content__people'>
          <img src={people} alt='people'/>
          <p>1000+ people have been satisifed with my service</p>
        </div>
      </div>
      <div className='statsense__header-image'>
          <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header