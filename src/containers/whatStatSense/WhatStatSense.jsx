import React from 'react';
import './whatstatsense.css';
import { Feature } from '../../components';

const WhatStatSense = () => {
  return (
    <div className="statsense__whatstatsense section__margin" id='whatstatsense'>
      <div className='statsense__whatstatsense-heading'>
        <h1 className='stat_sense_orange_text'> Services</h1>
        <p>Explore The Library</p>
      </div>
      {/* <div className='statsense__whatstatsense-feature'>
        <Feature title={"What is Stat Sense?"} text={"testing text"}/>
      </div> */}
      
      <div className='statsense__whatstatsense-container'>
        <Feature title={"Advice"} text={"Project 1 Text"} />
        <Feature title={"Statistics"} text={"Project 2 Text"}/>
        <Feature title={"Statistical Genetics"} text={"Project 3 Text"}/>
        <Feature title={"Statistical Bioinformatics"} text={"Project 3 Text"}/>
      </div>

    </div>
  )
}

export default WhatStatSense