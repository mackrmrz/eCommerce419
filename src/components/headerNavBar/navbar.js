import React, { Component } from "react";

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                {
                    this.props.navbarLinks.map(link,index) => {
                        return(
                            <a className='navbar__link' key={index} onClick={() => console.log('switch tabs')}>
                                {link.title}
                            </a>
                        )
                    }
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {navbarLinks} = state.navbarLinks;
    return {
        navbarLinks
    }
}

Navbar = connect(mapStateToProps)(Navbar);
export default Navbar;