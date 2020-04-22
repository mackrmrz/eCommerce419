import React, { Component } from 'react';
import Navbar from './headerNavBar/navbar';
import Header from './headerNavBar/header';

class Layout extends Component {
  render(){
    return (
      <div className="layout">
        {...this.props.children}
        <Header/>
        <Navbar/>
      </div>
    )
  }
}
export default Layout;