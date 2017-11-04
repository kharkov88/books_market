import {combineReducers} from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers(
    {
        active,
        products:getList,
        changing,
        cart,
        fetch,
        form:reduxFormReducer
    }
)
function fetch (state=false,{type}){
    if(type=='FETCH_START')return !state
    return state
}
function changing(state={},{type,payload,num}){
    switch(type){
        case 'CHANGE':
        return payload
        case 'RATING':
        return Object.assign({},state,{
            rating:num
        })
        default:return state
    }
}
function active(state={},action){
    if(action.type=='GET_ACTIVE_ITEM'){
        return action.id
    }
    return state
}
function getList(state=[],action){
    switch(action.type){
        case 'UPDATE_LIST':
        return action.list
        case 'UPDATE_ITEM':
        let {id} = action.payload
        return state.map(item=>{
            if(item.id==id)return action.payload 
            return  item
        })            
        default:return state
    } 
}
function cart(state={count:0,ids:[]},{type,payload}){
    switch(type){
        case 'INCREMENT':
        return Object.assign({},state,{
            count:++state.count,
            ids:[
                ...state.ids,
                payload
            ]
        })
        case 'ORDER':
        return Object.assign({},state,{order:payload})
        default: return state
    }
}