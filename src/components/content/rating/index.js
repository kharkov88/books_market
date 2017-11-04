import React from 'react';
import {Rating} from 'semantic-ui-react';

export default class RatingItem extends React.Component{
    constructor(props){
        super(props)
        this.handleRating = this.handleRating.bind(this)
    }
    handleRating(e,{rating}){
        console.log(rating)
        this.props.actions.rating(rating)
    }
    render(){
        let {actions} = this.props
        return(
            <div>Ваше мнение:
                <Rating 
                icon='star'
                defaultRating={3}
                maxRating={5}
                onRate={this.handleRating}/>
            </div>
        )
    }
}