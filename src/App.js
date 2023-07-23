import React from 'react'

import { Footer, Blog, Possibility, Features, WhatStatSense, Header} from './containers';
import {CTA, Navbar} from './components';
import './App.css';

const app = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <WhatStatSense/>
      <Features />
      <Possibility />
      <CTA />
      <Blog/>
      <Footer/>
    </div>
  )
}

export default app