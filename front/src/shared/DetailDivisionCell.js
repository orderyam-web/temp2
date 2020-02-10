import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';

import styles from './DetailDivisionCell.module.css';
import enabled_check from './enabled_check.png'
import disabled from './disabled.png'
import enabled_radio from './enabled_radio.png'

export default class DetailDivisionCell extends Component{
    constructor(props){
        super(props);
    }
    state = {
        selected : false
    }

    handleOnclick = () => {
        if(this.props.type=='bullet'){
            if (this.props.selected == this.props.title){
                this.props.handleBullet('', 0)
            }
            else{
                this.props.handleBullet(this.props.title, this.props.value)
            }
        }
        
        else{
            this.setState({
                selected : !this.state.selected
            })
            if (this.state.selected){
                this.props.handleAddOption(0-Number(this.props.value))
                this.props.delOption(this.props.title)
            }
            else{
                this.props.handleAddOption(this.props.value)
                this.props.addOption(this.props.title)
            }
        }
        
    }

    render(){
        let on_img_src;
        let final_image;
        if(this.props.type=='bullet'){
            on_img_src = enabled_radio;
            final_image = <img src={this.props.selected === this.props.title ? on_img_src : disabled} className={styles.CheckBox}></img>
        }
        else{
            on_img_src = enabled_check;
            final_image = <img src={this.state.selected ? on_img_src : disabled} className={styles.CheckBox}></img>
        }

        return(
            <div className={styles.Container} onClick={this.handleOnclick}>
                {final_image}
                <a className={styles.Title}> {this.props.title}</a>
            <a className={styles.Value}>+ {this.props.value}</a>
            </div>
        )
    }
}