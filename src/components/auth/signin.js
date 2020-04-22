import React, { Component } from "react";
import SigninForm from "./signinForm";
import PageTitle from "../pageTitle";



class Signin extends Component {
    
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


export default Signin;