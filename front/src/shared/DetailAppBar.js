import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
// import './global.css';
import * as serviceWorker from '../serviceWorker';

import styles from './DetailAppBar.module.css';
import back from './back.png';

export default class DetailAppBar extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className={styles.AppBar}>
                <Link to='/'>
                    <img src={back} style={{width: '20px', position:' absolute', left:'21px', top:'25px'}}/>
                </Link>
                {this.props.title}
            </div>
        )
    }
}