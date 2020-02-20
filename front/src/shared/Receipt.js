import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';
import {Link} from "react-router-dom";
import checkstyle from './receipt.module.css';
import logo from './mark3.png';
import { connect } from 'react-redux';
//import { addMenu } from './store/modules/menuList';
import orderNumber from './orderNumber.js';
class Receipt extends Component{
    constructor(props){
        super(props);
    }
   
    
    
    render(){
        var d=new Date();
        if(d.getHours()>12){
            var timecut="오후";
            var dhour=d.getHours()-12; //영수증 화면에 보여지는 시간 타이머는 그냥 현재 시간을 사용했습니다. 오후 오전 판별을 추가해서요
        }
        else{
            var timecut="오전";
            var dhour=d.getHours()
        }
        var min=d.getMinutes();
        if(min<10){
            min="0"+min
        }
        
        let ordername = this.props.menulist.concat({name:'null'})[0]; 
        var ordernumber = orderNumber.getInstance();
        var ordernum = ordernumber.getID();

        return(
            <Fragment>
            <img className={checkstyle.logo} src={logo}></img>
            <div className={checkstyle.ordercompleteattention}>주문이 완료<div className={checkstyle.text2}>되었습니다!</div></div>
            <hr className={checkstyle.line}></hr>
            <div className={checkstyle.ordernum}>주문번호</div>
            <div className={checkstyle.number}>{ordernum}</div>
            <hr className={checkstyle.line}></hr>
            <div className={checkstyle.info}>카페드림 중앙대점</div>
            <div className={checkstyle.info}>{ordername.name} 외 {Number(this.props.menucount) - 1}개</div>
            <div className={checkstyle.info}>{d.getFullYear()}-{(d.getMonth())+1}-{d.getDate()} {timecut} {dhour}:{min}</div>
            <Link to= './'>
            <div className={checkstyle.Container}>메인페이지로 이동</div>
            </Link>
            
            </Fragment>
        )
    }
}

const mapStateToProps = ({ menuList}) => ({  //2
    menulist: menuList.list,
    menucount: menuList.totalCount
}) ;

export default connect ( // 스토어와 연결
    mapStateToProps
)(Receipt) ;