import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';

import styles from './DetailCentralSelection.module.css';
import DetailDivision from './DetailDivision';
import GlobalCounter from './GlobalCounter';
import GlobalSelectionMenuItem from './GlobalSelectionMenuItem';



export default class DetailCentralSelection extends Component{
    constructor(props){
        super(props);
    }
    handleIncrement = (value) => {
        this.props.addMenuCount(value);
    } ;

    handleDecrement = (value) => {
        this.props.addMenuCount(0-Number(value));
    } ;
    render(){
        this.innerContent = [];
        for (const value of this.props.data) {
            // let item = value;
            this.innerContent.push(
                <DetailDivision title={value.state.title} type={value.state.type} selection={value.state.selection} addMenuPrice={this.props.addMenuPrice} addOption={this.props.addOption} delOption={this.props.delOption}/>
            
            );
        }
        return(
            <div>
                <div className={styles.Container} style={{paddingBottom: '30px'}}>
                    <div style={{paddingTop:'28px',}}>
                        <a style={{paddingLeft:'26px', fontSize: '18px', }}>{this.props.title}</a>
                        <a style={{float:'right', paddingRight:'26px', fontSize: '18px', }}>{this.props.price}</a>
                    </div>
                    <div style={{paddingLeft:'26px', paddingTop: '4px', fontSize: '11px', color: '#a1a1a1', width:'190px'}}>{this.props.description}</div>
                    <div style={{paddingTop:'9px',  height: '120px', width:'100%'}}>
                        <img src={this.props.image} style={{float:'right', paddingRight:'21px',height: '120px', width:'120px'}}></img>
                    </div>
                    {this.innerContent}
                    <div style={{paddingTop:'18.5px', width: '100%'}}>
                        <div className={styles.CountContainer}>
                            <div className={styles.CountTitle}>
                                수량
                            </div>
                            <div style={{position:'absolute', right:'21px', bottom: '20px'}}>
                                <GlobalCounter number={this.props.count} price={this.props.price} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Container} style={{marginTop: '20px', height:'67px'}}>
                    <a className={styles.CountTitle} style={{position: 'relative', left:'24px', top:'20px'}}>
                        총 주문 금액
                    </a>
                    <div style={{position: 'absolute', right:'32px', top:'20px', fontSize:'18px', color: '#e53e51'}}>
                        {this.props.price * this.props.count}
                    </div>
                </div>
            </div>
            
        )
    }
}