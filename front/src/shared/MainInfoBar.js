import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './global.css';
import * as serviceWorker from '../serviceWorker';
import {Link} from 'react-router-dom';
import styles from './MainInfoBar.module.css'
import bag_image from './bag.png';
import mark_image from './mark2.png';

export default class MainInfoBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <div className={styles.InfoBar}>
                <img className={styles.Mark} src={mark_image}></img>
                <Link to='./order'>
                <img className={styles.BagImage} src={bag_image}/>
                </Link>
        <a className={styles.TitleA}>{this.props.name}
        <div className={styles.DescriptionA}>영업시간  {this.props.time}<br/>전화번호  {this.props.phone}</div></a>
                <br/>
        
            </div>
        );
    }
}