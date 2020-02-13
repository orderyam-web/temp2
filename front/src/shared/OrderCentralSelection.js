import React, { Component } from 'react';
import './global.css';

import styles from './OrderCentralSelection.module.css';
import { connect } from 'react-redux';
import MenuListContainer from './container/MenuListContainer';

class OrderCentralSelection extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div className={styles.Container} style={{paddingBottom: '30px'}}>
                    <div style={{paddingTop:'28px',}}>
                        <a style={{paddingLeft:'24px', fontSize: '18px', color:'#414141'}}>{"카페드림 중앙대점"}</a>
                    </div>
                    <div style={{paddingTop:'1px', width: '100%'}}>
                        <MenuListContainer />
                    </div>
                </div>
                <div className={styles.Container} style={{marginTop: '20px', height:'90px'}}>
                    <a className={styles.CountTitle} style={{position: 'relative', left:'24px', top:'19px'}}>
                        주문 수량
                    </a>
                    <div style={{position: 'absolute', right:'32px', top:'20px', fontSize:'14px', color: '#ed5472'}}>
                        {this.props.totalCount}개
                    </div>
                    <a className={styles.CountTitle} style={{position: 'absolute', left:'24px', top:'51px'}}>
                        총 주문 금액
                    </a>
                    <div style={{position: 'absolute', right:'32px', top:'52px', fontSize:'14px', color: '#ed5472'}}>
                        {this.props.price}
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = ({ counter, menuList }) => ({  //2
    price: counter.price,
    totalCount: menuList.totalCount
}) ;


export default connect(mapStateToProps)(OrderCentralSelection);