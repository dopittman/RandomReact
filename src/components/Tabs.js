import React from 'react'
import TabsHeader from './TabsHeader'

class Tabs extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      tabIndex: 0,
      test: ''
    }
  }

  showTabs(arr, query){
    let collector = [];
    for(let i = 0; i < arr.length; i++){
      collector.push(arr[i][query])
    }
    return collector;
  }

  render(){
    return(
      <div>
      <TabsHeader
        headers={this.showTabs(this.props.tabs, 'title')}
      />
      {/* <ul id='tabUL'>{this.showTabs(this.props.tabs, this.state.tabIndex)}</ul> */}
      </div>
    )
  }
}

export default Tabs;