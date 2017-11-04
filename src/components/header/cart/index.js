import React from 'react'
import {Icon, Label } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default ({cart})=>{
    var visible = cart.count?'block':'none'
    return(
    <div style={{display:visible}}>
        <Link to='/корзина'>
            <div className="header-cart">
                <Label className="header-cart-label">
                    <Icon name='cart' />
                    {cart.count}
                </Label>
            </div>   
        </Link> 
    </div>
    )
}