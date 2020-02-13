import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';
import {Link, Route, Switch} from 'react-router-dom';

import styles from './OrderCell.module.css';
import GlobalCounter from './GlobalCounter.js'
import { transform } from '@babel/core';
import CounterContainer from './container/CounterContainer';

export default class OrderCell extends Component{
    constructor(props){
        super(props);
    }
    state = {
        menuPrice: Number(this.props.price) * Number(this.props.count)
        
    }
    handleMenuPrice = (value) => {
        this.setState({
            menuPrice: this.state.menuPrice + Number(value)
        })
        value > 0 ? this.props.onPlus() : this.props.onMinus()
    };
    render(){

        return(
            <div className={styles.CountContainer}>
                <div className={styles.TitleContainer}>
                    <a className={styles.CountTitle}>
                        {this.props.name}
                    </a>
                    <a className={styles.Price}>
                        {this.state.menuPrice}
                    </a>
                </div>
                {this.props.options.map(option => (<div className={styles.Footer}>- {option}</div>))}
                <div className={styles.ActionContainer}>
                    {/* todo: create onClick delete action */}
                    <div className={styles.DeleteButton} onClick={this.props.onDel}>
                        삭제
                    </div>
                    <div style={{position:'absolute', right:'0', bottom:'1px', marginRight:'3px'}}>
                        {/* value: default value of counter */}
                        <CounterContainer number={this.props.count} mprice={this.props.price}  handleMenuPrice={this.handleMenuPrice}/>
                    </div>
                </div>
            </div>

        )
    }
}
