import { createStore } from 'redux';

const ADD = 'ADD';
const MINUS = 'MINUS';

let reducer = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
}

let store = createStore(reducer)


const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('count');

const updateCount = () => {
    number.innerHTML = store.getState();
}

const addHandler = () => {
    store.dispatch({ type: ADD })
    updateCount();
}

const minusHandler = () => {
    store.dispatch({ type: MINUS })
    updateCount();
}

add.addEventListener('click', addHandler);
minus.addEventListener('click', minusHandler);
