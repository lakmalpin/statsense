import React from 'react';
import './features.css';
import { Feature } from '../../components';


const FeaturesData = [
  {
    title: 'Title 1',
    text: 'Text 1'
  },
  {
    title: 'Title 2',
    text: 'Text 1'
  },
  {
    title: 'Title 3',
    text: 'Text 1'
  },
  {
    title: 'Title 4',
    text: 'Text 1'
  }
]

const Features = () => {
  return (
    <div className='statsense__features section__padding' id='features'>
      <div className='statsense__features-heading'>
        <h1 className='gradient__text'>
          The Future is now and you just need to realize it. Step into the future today and make it possible.
        </h1>
        <p> Request Early access to get started</p>
      </div>
      <div className='statsense__features-container'>
        {FeaturesData.map((item,index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features