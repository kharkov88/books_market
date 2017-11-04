import React from 'react'
import Menu from './menu'
import Cart from './cart'
import * as actions from '../../actions'
import {bindActionCreators} from'redux'
import {connect} from 'react-redux';
import "./index.css"

class Header extends React.Component{
    render(){
        let {match,cart} = this.props
        return (
            <div className="app-header">
                <Menu match={match}/>
                <Cart cart={cart}/>
            </div>
        )
    }
}

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
  }
  const mapStateToProps = function (store){ 
    return {
        cart:store.cart

    }
  }
  
  export default Header = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)