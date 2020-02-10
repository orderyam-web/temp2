import React, { Component } from 'react';
import { connect } from 'react-redux';
import GlobalCounter from '../GlobalCounter.js'
import { count_increment, count_decrement } from '../store/modules/counter';

class CounterContainer extends Component { //3
    handleIncrement = (value) => {
        this.props.count_increment(value);
        this.props.handleMenuPrice(value);
    } ;

    handleDecrement = (value) => {
        this.props.count_decrement (value) ;
        this.props.handleMenuPrice(0-Number(value));
    } ;

    render() {
        const { number, mprice } = this.props ;
        return (
            <GlobalCounter 
                number={number}
                price={mprice}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        ) ;
    } 
}


const mapStateToProps = ({ counter }) => ({  //2
    price: counter.price,
}) ;

const mapDispatchToProps = {count_increment, count_decrement} ; //1

export default connect ( // 스토어와 연결
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer) ;