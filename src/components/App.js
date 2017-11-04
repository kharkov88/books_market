import React, { Component } from 'react';
import { Container,Dimmer, Loader, Image, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from'redux'
import * as actions from '../actions'
import './App.css';
import {Api} from "../api"
import Header from "./header"
import Content from "./content"
import {getBooksFromCart} from '../selectors'

import {BrowserRouter as Router,Link,Route} from "react-router-dom";

class App extends Component {
  componentDidMount(){
    this.props.actions.getList()
  }
  render() {
    const {fetchStart,list,actions,match,activeID,order} = this.props
    return (
      <Container className="App">
        <Segment>
          <Dimmer active={fetchStart}>
            <Loader />
          </Dimmer>
          <Header match={match}/>
          <Content 
          actions={actions}
          match={match}
          activeID={activeID}
          list={list}
          order={order}
          />
        </Segment>
      </Container>
    );
  }
}

const  mapStateToProps = state=> ({
  list:state.products,
  activeID:state.active,
  fetchStart:state.fetch,
  //order:getBooksFromCart(state.cart,state.products)
  order:state.cart.ids
})

const mapDispatchToProps = function (dispatch){  
  return {
      actions: bindActionCreators(actions,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
