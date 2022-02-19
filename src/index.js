import { createStore } from 'redux';

let reducer = (count = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return count + 1;
    case 'Minus':
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
  store.dispatch({ type: 'ADD' })
  updateCount();
}

const minusHandler = () => {
  store.dispatch({ type: 'Minus' })
  updateCount();
}

add.addEventListener('click', addHandler);
minus.addEventListener('click', minusHandler);

