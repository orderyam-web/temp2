import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';
import {Link, Route, Switch} from 'react-router-dom';

import checkstyle from './OrderDetail.module.css';

export default class Paymentpage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={checkstyle.pay}>
                <div className={checkstyle.text3} onClick={this.props.onClick}>결제하기</div>
                    
               
            </div>
        )
    }
}

