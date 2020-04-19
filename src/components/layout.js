import React, { Component } from 'react';
import Navbar from './headerNavBar/navbar';

class Layout extends Component {
  render(){
    return (
      <div>
        <Navbar/>
        {/* {...this.props.children} */}
      </div>
    )
  }
}
export default Layout;