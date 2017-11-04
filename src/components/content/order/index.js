import React from 'react'
import { Button,Label,Icon } from 'semantic-ui-react'

import './index.css'

export default ({order})=>{
    return(
        <div className="content-order">
            <div className="content-order-title">Оформление заказа</div>
            {
                order&&order.map((item,index)=>{
                    return (
                    <div key={index} >
                        <div className="content-order-item">
                            <span >{item.name}</span>
                            <span>{item.price}</span>
                            <span>           
                                 <Label circular className="content-order-label">
                                    <a href='/#'>X</a>
                                </Label>
                            </span>
                        </div>
                    </div>
                    )
                })
            }
            <div style={{margin:'0 65px',textAlign:'right'}}><Button>Заказать</Button></div>
        </div>   
    )
}