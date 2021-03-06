import React, { Component } from "react";
import {reduxForm, Field } from "redux-form";

import { FormButton} from '../formFields';
import history from "../../history";


class ReviewForm extends Component {
    render(){
        const {className, handleSubmit} = this.props;
        

        return (
            <form onSubmit={handleSubmit} className={`${className} signin-form`}>

                <div className='signin-form__line'></div>

                <Field className= 'signin-form__login' 
                    onClick={()=> history.push('/account')}
                    type= 'submit'
                    title='Proceed to Checkout'
                    name='proceed'
                    component={FormButton}
                />

                <Field className= 'signin-form__login' 
                    onClick={()=> history.push('/account')}
                    type= 'button'
                    title='Back'
                    name='back'
                    short={true}
                    component={FormButton}
                />  
               
            </form>
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;