import React from 'react';
import './whatstatsense.css';
import { Feature } from '../../components';

const WhatStatSense = () => {
  return (
    <div className="statsense__whatstatsense section__margin" id='whatstatsense'>
      <div className='statsense__whatstatsense-feature'>
        <Feature title={"What is Stat Sense?"} text={"testing text"}/>
      </div>
      <div className='statsense__whatstatsense-heading'>
        <h1 className='gradient__text'> The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='statsense__whatstatsense-container'>
        <Feature title={"Project 1"} text={"Project 1 Text"} />
        <Feature title={"Project 2"} text={"Project 2 Text"}/>
        <Feature title={"Project 3"} text={"Project 3 Text"}/>
      </div>

    </div>
  )
}

export default WhatStatSense