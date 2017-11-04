import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from'redux';
import { Comment} from 'semantic-ui-react'

import * as actions from '../../../actions'
import Item from "./item"

class List extends React.Component{ 
    render(){
    const {list,match,actions} = this.props
    return(
        <div>
        <Comment.Group>
            {
                list.map((item,index)=>{
                    return <Item key={index} match={match} item={item} activate={actions.getActiveItem}/>
                })
            }
        </Comment.Group>
        </div>
    )
}}
const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
  }
  const mapStateToProps = function (store){ 
    return {
      list:store.products,
      activeID:store.active,
      fetchStart:store.fetch,
      cart:store.cart
    }
  }
  
// export default Books = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Books)

export default List