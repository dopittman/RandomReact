import React from 'react';

const Span = ({index, activeTab, title, updateTab}) => {

     return( <span className={index === activeTab ? 'active tab-head' : 'tab-head'}
     onClick={()=>{updateTab(index);}}> {title} </span> )
  }


export default Span;