import React from 'react';
import {Route} from "react-router-dom";
import {Button,Rating} from 'semantic-ui-react';


import "./index.css"
import * as actions from '../../actions'
import AddForm from "./add"
import List from "./list"
import Product from './product'
import Order from './order'
import {Api} from "../../api"


export default  ({activeID,list,actions,order})=>{
    let showResults =  function (values) {
        Api.add(values).then(()=>actions.getList())
    };
    let updateResult =  function (values) {
        actions.updateItem(values)
        Api.change(values)
    };
    return(
        <div className="content">
            <Route exact path="/" component={About}/>
            <Route exact path="/магазин" component={(match)=><List match={match} list={list} actions={actions}/>}/>
            <Route 
                path={`/магазин/:productId`}
                component={(match)=>(
                    <Product 
                        match={match}
                        list={list}
                        order={order}
                        activeID={activeID}
                        actions={actions}
                        updateResult={updateResult}
                    />)}
            />
            <Route path="/добавить" component={()=><AddForm onSubmit={showResults} />}/>
            <Route path="/корзина" component={()=><Order order={order} actions={actions}/>}/>
        </div>
    )
}    
const About = ()=>(
    <div>
        <p>Жми магазин и выбирай продукт :)</p>
    </div>
)

