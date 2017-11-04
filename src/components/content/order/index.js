import React from 'react'
import { Button,Label,Icon } from 'semantic-ui-react'

import './index.css'

export default ({order,actions})=>{
    const visible = order.length>0?'block':'none'
    function handleDelete(id){
        actions.deleteFromOrder(id)
    }
    return(
        <div className="content-order" style={{display:visible}}>
            <div className="content-order-title">Оформление заказа</div>
            {
                order&&order.map((item,index)=>{
                    return (
                    <div key={index} >
                        <div className="content-order-item">
                            <span >{item.name}</span>
                            <span>{item.price}</span>
                            <span>           
                                    <Button 
                                        circular 
                                        icon='delete' 
                                        size='mini' 
                                        onClick={()=>handleDelete(item.id)}
                                    />
                            </span>
                        </div>
                    </div>
                    )
                })
            }
            <hr/>

            <div style={{margin:'0 65px',textAlign:'right'}}><Button>Заказать</Button></div>
        </div>   
    )
}