import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';
import { connect } from 'react-redux';

import checkstyle from './OrderDetail.module.css';
import DetailAppBar from './DetailAppBar';
import OrderCentralSelection from './OrderCentralSelection';
import OrderBottomButton from './OrderBottomButton';
import kakao from './kakao.png';
import card from './card.png';
import Paymentpage from './Paymentpage';
class OrderDetail extends Component{
    constructor(props){
        super(props);
    }
    
    state = {
        addedToOrder : false,
        opacity : 1.0,
        cellnum : 0,
        num :0,
        paymentStyle : '',
    }
    savecellnum(){
        var cellnum = document.getElementById("cellnum").value;
        var as=cellnum;
        }
    
    addOrder = () => {
        this.setState({
            addedToOrder : true,
            opacity : 0.3
        })
    }
    handleClick = () => {
        this.addOrder()
        
    }

    kakaoHandleClick = () => {
        // do something meaningful, Promises, if/else, whatever, and then
        window.location.assign('http://localhost:5000/kakaopay');
    }

    inicisHandleClick = () => {
        // do something meaningful, Promises, if/else, whatever, and then
        window.location.assign('http://localhost:8080/local_inicis/INIStdPayRequest.jsp');
    }
    
    handlePaymentStyle = (value) => {
        this.setState({
            paymentStyle : value
        })
    }
    handlePaymentClick = () => {
        if (this.state.paymentStyle == 'kakao'){
            this.kakaoHandleClick()
        }
        else if (this.state.paymentStyle == 'inicis'){
            this.inicisHandleClick()
        }
        else{
            alert('error!')
        }
    }
       
        
    render(){
        function savecellnum(){
            var cellnum = document.getElementById("cellnum").value;
            var temp=cellnum;
            }
        return(
            <Fragment>
            <div style={{position:'absolute', backgroundColor:'#F2F2F2', height:'auto', width:'100%', opacity:this.state.opacity}}>
                <DetailAppBar title="결제하기"></DetailAppBar>
                <div style={{marginTop:'86px', marginBottom:'179px'}}>
                    <OrderCentralSelection></OrderCentralSelection>
                    <OrderBottomButton addOrder={this.handleClick}></OrderBottomButton>
                </div>
                </div>
                <div className={checkstyle.backbox} style={this.state.addedToOrder ? {display : 'block'} : {display : 'none'}}>
                    <div className={checkstyle.requirephonenum}>알림톡 서비스를 위한 핸드폰 번호를 입력해주세요!</div>
                    <div className={checkstyle.phonebox} id="cellnum">
                        
                        <input type="text"></input><input type="text"></input><input type="text"></input>

                    </div>
                    <div className={checkstyle.selectpaytool}>결제수단 선택</div>
                    <img src={kakao}className={checkstyle.kakao} style={this.state.paymentStyle == 'kakao' ? {borderStyle : 'solid'} : {borderStyle : 'none'}} onClick={() => this.handlePaymentStyle('kakao')}></img>
                    <img src={card} className={checkstyle.card} style={this.state.paymentStyle == 'inicis' ? {borderStyle : 'solid'} : {borderStyle : 'none'}} onClick={() => this.handlePaymentStyle('inicis')}></img>
                    <Paymentpage onClick = {this.handlePaymentClick}></Paymentpage>
                    </div>
            
            </Fragment>
        )
    }
}

const mapStateToProps = ({ menuList}) => ({  //2
    menulist: menuList.list,
}) ;

export default connect ( // 스토어와 연결
    mapStateToProps,
)(OrderDetail) ;
