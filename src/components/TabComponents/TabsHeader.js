import React from 'react';
import Span from './Span';

class TabsHeader extends React.Component {

  createTabs(arr){
    const newArr = arr.map((obj, ind) =>{
      const newLi = <Span
      key= {ind}
      index= {ind}
      title= {obj.title}
      updateTab= {this.props.updateTab}
      activeTab= {this.props.activeTab}
      />;

      return newLi;
    });

    return newArr
  }

  render(){
  return(
    <div className='tabHeader'>
      <ul className='tabs-head-container'>{this.createTabs(this.props.tabs)}</ul>
    </div>
  )
  }
}

export default TabsHeader;