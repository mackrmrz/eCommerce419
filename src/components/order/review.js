import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';


import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

class Review extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit= (fields) =>{
        console.log(fields);
    }

    render() {
        return(
            <div className='review'>
                <ReviewForm class='review-form' onSubmit={this.handleSubmit}/>
                <PageTitle className='review__page-title' title='Order Review'/>
            </div>
        )
    }
}

Review= connect(null, actions)(Review);

export default Review;