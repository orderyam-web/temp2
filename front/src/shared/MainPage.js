import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';
import {Link, Route, Switch} from 'react-router-dom';

// import styles from './MainPage.module.css';
import MainInfoBar from "./MainInfoBar";
import MainCategoryBar from "./MainCategoryBar";
import MainBanner from "./MainBanner";
import MainMenuList from './MainMenuList';
import top from './top3.png';
import test_banner from './test_banner.png'

export default class MainPage extends React.Component{ 
    constructor(props){
        super(props);
    }

    state = {
        name : '카페드림 중앙대점',
        time : '10:00 - 22:00',
        phone : '050123456780',
        selectedCategory:'',
    }//기본적인 가게 정보를 담은 state입니다.
    
    categoryHandling = (id) => {
        this.setState({
            selectedCategory:id,
        })
        
    } ;
    render(){
        let category_list = ['인기메뉴','커피(HOT)', '커피(ICE)']; // 여기가 category 목록 모은 list입니다! category 추가할때 여기 추가하시면 됩니다!
        return(
            <div>
                <MainInfoBar name = {this.state.name} time = {this.state.time} phone = {this.state.phone}></MainInfoBar>
                <MainCategoryBar category={category_list} selectedCategory={this.state.selectedCategory} categoryHandling={this.categoryHandling}></MainCategoryBar>
                
                {/* Pass images as an array */}
                <MainBanner images={[test_banner, test_banner]}></MainBanner>
                <MainMenuList selectedCategory={this.state.selectedCategory}></MainMenuList>

                {/* Scroll to Top */}
                <img src={top} onClick={() => {window.scrollTo(0, 0)}} style={{position:'fixed', height:'58px', right:'18px', bottom:'18px', boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16);'}}/>
            </div> //Top.png를 클릭하였을때 화면 스크롤이 위로 올라가게 하는 기능입니다.
        );
    }
}