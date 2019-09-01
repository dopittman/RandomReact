import React from 'react'
import TabsHeader from './TabComponents/TabsHeader'

class Tabs extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      tabIndex: 0,
    }

    this.updateTab = this.updateTab.bind(this);
  }

// Updates active tab and article
  updateTab(newVal){
    this.setState({tabIndex: newVal})
  }

  render(){
    return(
      <div className='tabs-container'>
        <TabsHeader
          tabs= {this.props.tabs}
          updateTab={this.updateTab}
          activeTab={this.state.tabIndex}
        />
        <article className='content'>{this.props.tabs[this.state.tabIndex].content}</article>
      </div>
    )
  }
}

export default Tabs;