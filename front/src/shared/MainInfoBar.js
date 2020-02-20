import React, { Component } from 'react';
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
        ); // 장바구니 아이콘을 클릭하면 /order 화면으로 넘어가는 link가 구현되어 있습니다.
    } 
}