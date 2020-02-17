import React, { Component } from 'react';
import './global.css';


import checkstyle from './OrderDetail.module.css';

export default class Paymentpage extends Component{
    constructor(props){
        super(props);
    }
    //결제하기 박스 관련 코드
    render(){
        return(
            <div className={checkstyle.paybox} onClick={this.props.onClick}>
                <div className={checkstyle.finalpay}>결제하기</div>
                    
               
            </div>
        )
    }
}

