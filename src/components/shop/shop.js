import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

//COMPONENT 
import ShopSearchBar from './shopSearchBar';

class Shop extends Component {

    componentDidMount(){
        const headerLinks = 
        //axios to the backend
        [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
         
        // fetch navbar links
            // set navbar links
            // filter products with links
    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='shop'>
                <h1>Hi THerere</h1>
                 <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar'/>
               <div className='shop__products'>
                   {
                       this.props.filteredProducts.map(product => {
                           return (
                               <div key={product._id} className='shop-product'>
                                   <div className='shop-product__title'>
                                       {product.title}
                                   </div>
                                   <div className='shop-product__description'>
                                       {product.description}
                                   </div>
                               </div>

                           )
                       })
                   }
               </div>
                {/* shop cart button */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { categories, filteredProducts } = state.shop;
    return {
        categories,
        filteredProducts
    }
}


Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;