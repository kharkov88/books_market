import React from 'react';
import {Button,Rating} from 'semantic-ui-react';
import {ModalChange,ModalDelete} from "../modal"
import RatingItem from '../rating'

export default  (props) => {
    const {list,match,activeID,actions,updateResult } = props
    const item = JSON.parse(window.localStorage.item)
    const {name,author,content,image_url} = item
    const {url} = match.match
    function handleBuy(){
        actions.cart(item)
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
            <Button onClick={handleBuy}>Купить</Button>
        </div>
  )
}