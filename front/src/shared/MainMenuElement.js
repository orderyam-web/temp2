import React, { Component } from 'react';
import './global.css';
import {Link, Route, Switch} from 'react-router-dom';

import styles from './MainMenuElement.module.css';

export default class MainMenuElement extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <Link to={this.props.soldout ? 1 : {pathname:'/menu/'.concat(this.props.title),
            state:{
                menu_id:this.props.title,
                description:this.props.description,
                price:this.props.price,
                options:this.props.options,
                soldout:this.props.soldout,
                image:this.props.image
            }}} style={{ textDecoration: 'none' }}>
                <div className={this.props.soldout ? styles.Containersoldout : styles.Container}>
                    <div className={styles.Title}>{this.props.title}
                    <img src={this.props.image} className={styles.Image} >
                    
                    </img>
                    <div  className={styles.soldout} style={this.props.soldout ? {display : 'block'} : {display : 'none'}}>매진 </div></div>
                    <div className={styles.Description}>{this.props.description}</div>
                    <div className={styles.Price}>{this.props.price}</div>
                </div> 
            </Link>
            //soldout은 매진여부를 판단하는 변수입니다. soldout이 true여서 매진일경우 Link가 작동하지 않도록, 매진이 아닐경우 Link가 가능하게 했습니다.
            // state의 변수들은 Menulist에 있는 각 음식들의 데이터를 받아온 값입니다.
        
        );
        
    }
}