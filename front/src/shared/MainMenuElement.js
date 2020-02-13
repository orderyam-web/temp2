import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';
import {Link, Route, Switch} from 'react-router-dom';

import styles from './MainMenuElement.module.css';

export default class MainMenuElement extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        var ImageArray =['americano.png','test.png','caramel.png'
        
];
        return(
            <Link to={{pathname:'/menu/'.concat(this.props.title),
            state:{
                menu_id:this.props.title,
                description:this.props.description,
                price:this.props.price,
                options:this.props.options
            }}} style={{ textDecoration: 'none' }}>
                <div className={this.props.soldout ? styles.Container : styles.Container}>
                    <div className={styles.Title}>{this.props.title}
                    <img src={this.props.image} className={styles.Image} ></img></div>
                    <div className={styles.Description}>{this.props.description}</div>
                    <div className={styles.Price}>{this.props.price}</div>
                </div>
            </Link>
        
        );
        
    }
}