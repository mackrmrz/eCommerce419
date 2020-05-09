import React, { Component } from "react";

import SignupForm from './signupForm';
import Pagetitle from '../pageTitle';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }
    render(){
        return(
            <div className="sign-up">
                <Pagetitle className= 'sign-up__page-title' title='Register'/>
                <SignupForm onSubmit={this.onSubmit} className='sign-up__form'/>
            </div>
        )
    }
}

Signup = connect(null, actions)(Signup);
export default Signup;