import React from 'react';

class Calculator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userInputOne: 0,
      userInputTwo: 0,
      total: 0
    }

    //Bind Functions to Constructor
    this.changeInputOne = this.changeInputOne.bind(this);
    this.changeInputTwo = this.changeInputTwo.bind(this);
    this.addOperation = this.addOperation.bind(this);
    this.subOperation = this.subOperation.bind(this);
    this.divOperation = this.divOperation.bind(this);
    this.multiOperation = this.multiOperation.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }


  changeInputOne(event){
    this.setState({userInputOne: event.target.value})
  }
  changeInputTwo(event){
    this.setState({userInputTwo: event.target.value})
  }

  //Operations Functions
  addOperation(event){
    event.preventDefault();
    const inputOne = parseInt(this.state.userInputOne)
    const inputTwo = parseInt(this.state.userInputTwo)
    const totalInt = inputOne + inputTwo;
    this.setState({total: totalInt})
  }

  subOperation(event){
    event.preventDefault();
    const inputOne = parseInt(this.state.userInputOne)
    const inputTwo = parseInt(this.state.userInputTwo)
    const totalInt = inputOne - inputTwo;
    this.setState({total: totalInt})
  }

  divOperation(event){
    event.preventDefault();
    const inputOne = parseInt(this.state.userInputOne)
    const inputTwo = parseInt(this.state.userInputTwo)
    const totalInt = inputOne / inputTwo;
    this.setState({total: totalInt})
  }

  multiOperation(event){
    event.preventDefault();
    const inputOne = parseInt(this.state.userInputOne)
    const inputTwo = parseInt(this.state.userInputTwo)
    const totalInt = inputOne * inputTwo;
    this.setState({total: totalInt})
  }

  clearFields(event){
    event.preventDefault();
    this.setState({
      userInputOne: 0,
      userInputTwo: 0,
      total: 0
    })
  }

  render(){
    const {userInputOne, userInputTwo, total} = {userInputOne:this.state.userInputOne,
          userInputTwo: this.state.userInputTwo, total: this.state.total}

    return(
      <div className='calc-div'>
      <span>Simple Calc</span><hr/>
      <div>
        <span>Input One: <input type='text'
        value={userInputOne}
        onChange={this.changeInputOne}></input></span>
        <br />
        <span>Input Two: <input type='text'
        value={userInputTwo}
        onChange={this.changeInputTwo}></input></span><br />

        <button className='operationsBtn'
        onClick={this.addOperation}>+</button>
        <button className='operationsBtn'
        onClick={this.subOperation}>-</button>
        <button className='operationsBtn'
        onClick={this.divOperation}>/</button>
        <button className='operationsBtn'
        onClick={this.multiOperation}>*</button><br />
        <button onClick={this.clearFields}>Clear</button>
      </div>
        <h1>{total}</h1>
      </div>
    )
  }
}

export default Calculator;