import React, { Component } from "react";
import SigninForm from "./signinForm";
import PageTitle from "../pageTitle";

import { connect } from "react-redux";
import * as actions from '../../actions';



class Signin extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    
    onSubmit= (feilds) => {
        console.log(feilds);
    }
    render(){
        return(
            <div className="signin">
                <PageTitle className="signin__page-title" title="Login" />
               <SigninForm onSubmit={this.onSubmit} className="signin__form"/>
            </div>
        )
    }
}

Signin = connect(null, actions) (Signin);

export default Signin;