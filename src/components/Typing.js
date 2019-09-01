import React from 'react'
import Typed from 'typed.js'

class typing extends React.Component {

  componentDidMount(){
    let options = {
      strings: ['Type things like this', 'And like this'],
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
  <div class='typing'></div>
    )}
}

export default typing