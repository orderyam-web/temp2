import { combineReducers } from 'redux' ;
import counter from './counter' ;
import menuList from './menuList';

export default combineReducers({
    counter,
    menuList,
    //다른 리듀서를 만들게 되면 여기에 import
}) ;

