import React from 'react';
import {Button,Rating} from 'semantic-ui-react';
import {ModalChange,ModalDelete} from "../modal"
import RatingItem from '../rating'

export default  (props) => {
    const {list,order,match,activeID,actions,updateResult } = props
    const item = JSON.parse(window.localStorage.item)
    const {name,author,content,image_url} = item
    const {url} = match.match

    const include = order && (order.find(el=> Number(el.id)==item.id ))!=undefined
    console.log('include:',include)
    console.log('item.id:',item.id)
    function handleBuy(e){
        var cart = document.querySelector('.header-cart-label')
        actions.cart(item)
        cart.style.backgroundColor = 'pink'
        setTimeout(()=>{
            cart.style.backgroundColor = 'white'
        },300)
    }
    return(
        <div>
            <img src={image_url}/>
            <h3>{name}</h3>
            <p>{author}</p>
            <p>{content}</p>
            <RatingItem actions={actions}/>
            <hr/>
            <ModalChange 
                item={item}
                actions={actions}
                updateItem={updateResult}
            />
            <ModalDelete 
                id={activeID}
                update={actions.getList}
                link={url}
            />
            <Button onClick={handleBuy} disabled={include}>Купить</Button>
        </div>
  )
}