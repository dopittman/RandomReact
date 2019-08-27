import React from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Clock from './Components/Clock';
import Tabs from './Components/Tabs';


class App extends React.Component {

  state = {
    Tabs : [
      {title:'Tab One',
      content: 'Content One'},
      {title:'Tab Two',
      content: 'Content Two'},
      {title:'Tab Three',
      content: 'Content Three'}
    ]
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
        <Clock />
        <Tabs
          tabs={this.state.Tabs}
        />
      </header>
    </div>
  );
  }
}

export default App;
