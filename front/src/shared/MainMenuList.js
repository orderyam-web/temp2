import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';

import styles from './MainMenuList.module.css';
import MainMenuElement from './MainMenuElement.js';
import GlobalMainMenuItem from './GlobalMainMenuItem.js';
import americano from './americano2.png'
import caffelatte from './caffelatte2.png'
import caramel from './caramel2.png'
export default class MainMenuList extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu_list : [new GlobalMainMenuItem(
                {
                    id: 0,
                    category: '커피(HOT)', 
                    title: "아메리카노",
                    description: "Lorem Ipsum fDolor",
                    price: 3000,
                    image: americano,
                    options: [{title:"사이즈 선택", option : new Map([['Regular', 0],['Large', 800]]) , type : 'bullet'}, 
                              {title:"옵션", option : new Map([['샷 추가', 800], ['시럽 추가', 500], ['휘핑 추가', 600]]), type:"check"}
                    ],
                    soldout : false,
                }
            ),
            new GlobalMainMenuItem(
                {
                    id: 1,
                    category : '커피(HOT)', 
                    title: "카페라떼",
                    description: "서울우유를 사용해 더욱 부드럽고 맛있는 카페드림만의 시그니처 카페라떼입니다.",
                    price: 2700,
                    image: caffelatte,
                    options: [{title:"사이즈 선택", option : new Map([['Regular', 0],['Large', 800]]) , type : 'bullet'}, 
                              {title:"옵션", option : new Map([['샷 추가', 800], ['시럽 추가', 500], ['휘핑 추가', 600]]), type:"check"}
                    ],
                    soldout : false,
                }
            ),
            new GlobalMainMenuItem(
                {
                    id: 2,
                    category: '커피(ICE)',
                    title: "카라멜 마끼아또",
                    description: "카라멜의 달콤한 맛과 우유의 고소함이 만난 카페드림만의 특별한 카라멜 마끼아또입니다.",
                    price: 3000,
                    image: caramel,
                    options: [{title:"사이즈 선택", option : new Map([['Regular', 0],['Large', 800]]) , type : 'bullet'},
                              {title:"옵션", option : new Map([['샷 추가', 800], ['시럽 추가', 500], ['휘핑 추가', 600]]), type:"check"}
                    ],
                    soldout : true,
                }
            ),// 메뉴 리스트가 여기에 구현되어 있습니다. Option 포함
            ]
        };
    }
    render(){
        return(
            <div className={styles.Background}>
                {this.state.menu_list.map(item => {if (item.state.category === this.props.selectedCategory)
                    return <MainMenuElement title={item.state.title} description={item.state.description} price={item.state.price} image={item.state.image} options={item.state.options} soldout={item.state.soldout}/>
                else if (this.props.selectedCategory === '') //해당하는 카테고리가 선택되었을때 그 메뉴를 화면에 보여주는 기능입니다.
                    return <MainMenuElement title={item.state.title} description={item.state.description} price={item.state.price} image={item.state.image} options={item.state.options} soldout={item.state.soldout}/>})}
                
                <div className={styles.Warning}>º 메뉴이미지는 실제 서빙되는 음식과 다를 수 있음을 알려드립니다.<br/>º 오더얌 고객센터 : 1600-1234</div>
                <Link to='/origin'>
                <div className={styles.Button}>원산지 정보</div>
                </Link> 
            </div> //origin은 원산지 정보를 표시한 웹입니다. Link로 구현되어 있습니다.
        );
    }
}