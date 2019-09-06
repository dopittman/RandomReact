import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      time: new Date(),
    }
  }

  tick(){
   this.setState({time: new Date()});
  }

  componentDidMount(){
    this.intervalId = setInterval(()=>{this.tick()}, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.IntervalId);
  }

  render(){
    return(
      <div className='clock-widget'>
      <span>Clock</span><hr />
        <h3>
        <span className='clock-info clock-header'>Date: {this.state.time.toDateString()}</span></h3>
        <h4><span className='clock-header'>Time: </span>
        <span className='clock-info'>{this.state.time.toTimeString().slice(0,8)} EST</span></h4>
      </div>
    )
  }
}

export default Clock