import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

export default class extends Component {
    constructor(){
        super()
        this.state = {}
        this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    }
  
    render() {
      const { activeItem } = this.state
      const {match} = this.props
      return (
          <div>
        <Menu>         
            <Menu.Item as={Link} to={`${match.url}магазин`}
                className="link-shop"
                name='магазин'
                active={activeItem === 'магазин'}
                onClick={this.handleItemClick}
            >
             Магазин 
            </Menu.Item>
                
            <Menu.Item as={Link} to={`${match.url}добавить`}
                name='добавить'
                active={activeItem === 'добавить'}
                onClick={this.handleItemClick}
            >
            Добавить
            </Menu.Item> 
            <Menu.Item as={Link} to={`/`}
                name='home'
                fixed="right"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
            >
            Home
            </Menu.Item> 
        </Menu>
        </div>
      )
    }
  }