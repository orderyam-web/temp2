import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';
import {Link, Route, Switch} from 'react-router-dom';

import styles from './DetailBottomButton.module.css';

export default class DetailBottomButton extends Component{
    constructor(props){
        super(props);
    }

    // /order링크가 주문화면 링크입니다! 
    render(){
        return(
            <div className={styles.Container}>
                <div className={styles.LeftButton} onClick={this.props.addOrder}>주문표에 추가</div>
                <Link to='/order'>
                    <div className={styles.RightButton} onClick={this.props.ordernow}>바로 주문</div>
                </Link>
            </div>
        )
    }
}