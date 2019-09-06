import React from 'react'
import Typed from 'typed.js'

class typing extends React.Component {

  componentDidMount(){
    let options = {
      strings: ['my random react widgets', 'testing components', 'optimizing code','all kinds of things'],
      typeSpeed: 35,
      backSpeed: 35,
      backDelay: 2000,
      loop: true,
      loopCount: 'infinity'
    }

    this.typed = new Typed('.typing', options);
  }



  render(){
    return(
    <div className='typing-div'>
    <span>This page is for </span>
  <span className='typing' /></div>
    )}
}

export default typing