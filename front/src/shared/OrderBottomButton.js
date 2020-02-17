import React, { Component } from 'react';
import './global.css';
import {Link, Route, Switch} from 'react-router-dom';

import styles from './DetailBottomButton.module.css';

export default class OrderBottomButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={styles.Container}>
                <Link to='/'>
                    <div className={styles.LeftButton}>더 주문하기</div>
                </Link>
                {/* todo: create checkout window */}
                <div className={styles.RightButton} onClick={this.props.addOrder}>결제하기</div>
            </div>
        )
    }
}