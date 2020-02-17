import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';

import styles from './DetailDivision.module.css';
import DetailDivisionCell from './DetailDivisionCell'

let innerContent = [];
export default class DetailDivision extends Component{
    constructor(props){
        super(props);
    }
    state = {
        selectedTitle : '',
        selectedPrice : 0
    }
    addBulletPrice = (title, price) =>{
        this.props.addMenuPrice(0-Number(this.state.selectedPrice)+Number(price))
        this.props.delOption(this.state.selectedTitle)
        //alert(0-Number(this.state.selectedPrice))
        this.setState({
            selectedTitle : title,
            selectedPrice : price
        })
        this.props.addOption(title)
        //alert(this.state.selectedPrice)
    }
    render(){
        innerContent = []
        //let selected = true;
        for (const [key, value] of this.props.selection) {
            if (this.props.type=='bullet'){
                innerContent.push(<DetailDivisionCell title={key} value={value} type={this.props.type} selected={this.state.selectedTitle} handleAddOption={this.props.addMenuPrice} addOption={this.props.addOption} delOption={this.props.delOption} handleBullet = {this.addBulletPrice}></DetailDivisionCell>);
            }
            else{
                innerContent.push(<DetailDivisionCell title={key} value={value} type={this.props.type} handleAddOption={this.props.addMenuPrice} addOption={this.props.addOption} delOption={this.props.delOption}></DetailDivisionCell>);
            }
        }
        return(
            <div className={styles.Container}>
                <div className={styles.Title}>
                    {this.props.title}
                </div>
                {innerContent}
            </div>
        )
    }
}