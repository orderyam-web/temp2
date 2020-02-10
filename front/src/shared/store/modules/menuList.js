const INCREAE_MENU = 'menuList/INCREAE_MENU'; 
const DECREAE_MENU = 'menuList/DECREAE_MENU'; 
const ADD_MENU = 'menuList/ADD_MENU'; 
const DELETE_MENU = 'menuList/DELETE_MENU';

// **** FSA 규칙을 따르는 액션 생성 함수 정의
let id = 0;
export const increseMenu = (id) => ({ type: INCREAE_MENU, payload: id });
export const decreseMenu = (id) => ({ type: DECREAE_MENU, payload: id });
export const addMenu = (menu) => ({ type: ADD_MENU, payload: ({menu, id: id++})});
export const deleteMenu = (id) => ({ type: DELETE_MENU, payload: id});


// **** 초기 상태 정의
const initialstate = {
  list: [
  ],
  totalCount: 0
};

export default function menuList(state=initialstate, action) {
    switch(action.type) {
        case INCREAE_MENU:
            return {
                ...state,
                list: state.list.map(
                    item => item.id === action.payload ? { ...item, count: item.count + 1 } : item
                ),
                totalCount: state.totalCount + 1
            } ;
        case DECREAE_MENU:
            return {
                ...state,
                list: state.list.map(
                    item => item.id === action.payload ? { ...item, count: item.count - 1 } : item
                ),
                totalCount: state.totalCount - 1
            } ;
        case ADD_MENU:
            return{
                ...state,
                list: state.list.concat({
                    id: action.payload.id,
                    name: action.payload.menu.name,
                    price: action.payload.menu.price,
                    options: action.payload.menu.options,
                    count: action.payload.menu.count
                }),
                totalCount: Number(state.totalCount) + Number(action.payload.menu.count)
            } ;
        case DELETE_MENU:
            let dcount = 1;
            state.list.map(item => {if (item.id === action.payload){dcount = item.count}});
            return{
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
                totalCount: Number(state.totalCount) - Number(dcount)
            } ;
        default:
            return state ;
    }
}

