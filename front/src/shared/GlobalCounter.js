import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';

import styles from './GlobalCounter.module.css';

export default class GlobalCounter extends Component{
    constructor(props){
        super(props);
    }

    state = {
        number: this.props.number,
        price: this.props.price
    }

    handleIncrease = () => {
        this.setState({
            number : this.state.number +1,
            price : Number(this.state.price) + Number(this.props.price)
        })
        this.props.onIncrement(this.props.price)
    }

    handleDecrease = () => {
        if (this.state.number > 0){
            this.setState({
            number : this.state.number -1,
            price : Number(this.state.price) - Number(this.props.price)
            })
            this.props.onDecrement(this.props.price)
        }
    }

    render(){
        return(
            <div className={styles.Container}>
                <div className={styles.Minus} onClick={this.handleDecrease}>
                    -
                </div>
                <div className={styles.Content}>
                    {this.state.number}
                </div>
                <div className={styles.Plus} onClick={this.handleIncrease}>
                    +
                </div>
            </div>
        )
    }

}
