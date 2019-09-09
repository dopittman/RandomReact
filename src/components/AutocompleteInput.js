import React from 'react';

class AutocompleteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  render(){
    return(
      <div>
        <input className='name-search' type='text' placeholder='Type name here'
        onChange={this.props.updateSearch}></input>
      </div>
    )
  }
}

export default AutocompleteInput;