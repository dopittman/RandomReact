import React from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Clock from './Components/Clock';
import Tabs from './Components/Tabs';
import Typing from './Components/Typing';


class App extends React.Component {

  state = {
    Tabs : [
      {title:'One',
      content: 'Content One'},
      {title:'Two',
      content: 'Content Two'},
      {title:'Three',
      content: 'Content Three'}
    ]
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
        <Typing />
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
