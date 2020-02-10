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
            // 카테고리명을 포함해서 리퀘주세요
            //db서버에서 카테고리에 맞는 메뉴와 컴포넌트를 넘겨드리면 
            //for문으로 추가해주세요
            menu_list : [new GlobalMainMenuItem(
                {
                    id: 0,
                    title: "아메리카노",
                    description: "Lorem Ipsum fDolor",
                    price: 3000,
                    image: americano,
                    options: [{title:"사이즈 선택", option : new Map([['Regular', 0],['Large', 800]]) , type : 'bullet'}, 
                              {title:"옵션", option : new Map([['샷 추가', 800], ['시럽 추가', 500], ['휘핑 추가', 600]]), type:"check"}
                    ]
                }
            ),
            new GlobalMainMenuItem(
                {
                    id: 1,
                    title: "카페라떼",
                    description: "서울우유를 사용해 더욱 부드럽고 맛있는 카페드림만의 시그니처 카페라떼입니다.",
                    price: 2700,
                    image: caffelatte,
                    options: [{title:"사이즈 선택", option : new Map([['Regular', 0],['Large', 800]]) , type : 'bullet'}, 
                              {title:"옵션", option : new Map([['샷 추가', 800], ['시럽 추가', 500], ['휘핑 추가', 600]]), type:"check"}
                    ]
                }
            ),
            new GlobalMainMenuItem(
                {
                    id: 2,
                    title: "카라멜 마끼아또",
                    description: "카라멜의 달콤한 맛과 우유의 고소함이 만난 카페드림만의 특별한 카라멜 마끼아또입니다.",
                    price: 3000,
                    image: caramel,
                    options: [{title:"사이즈 선택", option : new Map([['Regular', 0],['Large', 800]]) , type : 'bullet'},
                              {title:"옵션", option : new Map([['샷 추가', 800], ['시럽 추가', 500], ['휘핑 추가', 600]]), type:"check"}
                    ]
                }
            ),
            ]
        };
    }
    render(){
        let innerContent = []
        for (const item in this.state.menu_list){
            const what = this.state.menu_list[item];
            innerContent.push(<MainMenuElement title={what.state.title} description={what.state.description} price={what.state.price}
                image={what.state.image} options={what.state.options}/>);
        }
        return(
            <div className={styles.Background}>
                {innerContent}
                <div className={styles.Warning}>º 메뉴이미지는 실제 서빙되는 음식과 다를 수 있음을 알려드립니다.<br/>º 오더얌 고객센터 : 1600-1234</div>
                <div className={styles.Button}>원산지 정보</div>
            </div>
        );
    }
}