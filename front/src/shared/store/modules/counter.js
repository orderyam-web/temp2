
const COUNT_INCREMENT='counter/COUNT_INCREMENT';
const COUNT_DECREMENT='counter/COUNT_DECREMENT';

export const count_increment= (value) => ({type:COUNT_INCREMENT, value:value});
export const count_decrement= (value) => ({type:COUNT_DECREMENT, value:value});

const initialstate={
    price: 0,
};

export default function Counter(state=initialstate, action) {
    switch(action.type) {
        case COUNT_INCREMENT:
            return {
                ...state,
                price: Number(state.price) + Number(action.value) ,
            } ;
        case COUNT_DECREMENT:
            return {
                ...state,
                price: Number(state.price) - Number(action.value),
            } ;
        default:
            return state ;
    }
}