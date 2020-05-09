import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';


import history from '../../history';

class AccountInformationForm extends Component {
    render() {

        const { className, handleSubmit } = this.props;

        return (

            <form onSubmit={handleSubmit} className={`${className} signin-form`}>
                <Field className='signin-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}/>
                <Field className='signin-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}/>
                <div className='signin-form__line'></div>

                <Field className='signin-form__login'
                onClick={() => history.push('/account')}
                type='submit'
                title='Login'
                name='login'
                component={FormButton}/>
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;