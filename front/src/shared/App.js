import React, {useState, useEffect,Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import Container from "@material-ui/core/Container";
import {useCookies} from "react-cookie";
import {makeStyles} from "@material-ui/core";
import './global.css';
import { createStore } from 'redux';
import rootReducer from './store/modules';
import MainPage from "./MainPage";
import MenuDetail from "./MenuDetail";
import OrderDetail from  "./OrderDetail";
import Receipt from "./Receipt";


export const getCookie = function (name) {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};
const store = createStore(rootReducer);
console.log(store.getState());
export default function App() {
    const [cookies, setCookie] = useCookies(['user']);
    // const [open, setOpen] = useState(false);
    // const [enc, setEnc] = useState('');
    // const [mem, setMem] = useState('');

    const current = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(current.getFullYear() + 1);

    let isMobile = true;
    document.title = "OrderYam";

    return (
        <div style={{width: '100%'}}>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/menu/:menu_id" component={MenuDetail}/>
                <Route path="/order" component={OrderDetail}/>
                <Route path="/receipt" component={Receipt}/>

                <Route component={() => (<div>404 Not found </div>)}/>
            </Switch>
        </div>
    );
}
