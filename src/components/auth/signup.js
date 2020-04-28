import React, { Component } from "react";

import SignupForm from './signupForm';
import Pagetitle from '../pageTitle';

class Signup extends Component {

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
export default Signup;