import React from 'react';
import AutocompleteInput from './AutocompleteInput';

class Autocomplete extends React.Component{
  constructor(props){
    super(props)
    this.state.names = this.props.names
    this.updateSearch = this.updateSearch.bind(this)
  }

  state= {
      inputVal: '',
      names: null
  }

  updateSearch(search){
    this.setState({inputVal:search.target.value})
  }



  makeList(names){
    var matches = [];
	    if (this.state.inputVal.length === 0) {
	      return this.createList(this.props.names);
      }

	    this.props.names.forEach((name) => {
	      var compare = name.slice(0, this.state.inputVal.length);
	      if (compare.toLowerCase() === this.state.inputVal.toLowerCase()) {
	        matches.push(name);
	      }
	    });

	    if (matches.length === 0) {
	      matches.push('No matches');
      }

      return this.createList(matches);
  }

  createList(arr){
    const list = arr.map((item, ind)=>{
      return <li key={ind}><span>{item}</span></li>
    })
    return list
  }

  render(){
  return ( <div className='autocomplete-div'>
  <h4 className = 'autocomplete-header'>Autocomplete</h4><hr />
    <div className='nameField'>
    <AutocompleteInput
      updateSearch = {this.updateSearch}
    />
      <ul className='name-list'>
        {this.makeList(this.props.names)}
      </ul>
    </div>

    </div> )
  }
}

export default Autocomplete;