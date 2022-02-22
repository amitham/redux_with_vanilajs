import { createStore } from 'redux';

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

let reducer = (itemArray = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...itemArray, { text: action.text, id: Date.now() }];
        case DELETE_ITEM:
            //return count - 1;
            return itemArray.filter(a => a.id != action.id);
        //return newArray;
        default:
            return itemArray;
    }
}

let store = createStore(reducer)


const btn_add_item = document.getElementById('btn_add_item');
const item_list = document.getElementById('item_list');

const updateList = () => {
    let items = store.getState();
    item_list.innerHTML = '';
    items.forEach(item => {

        let span = document.createElement('span');
        span.innerHTML = item.text;

        let button = document.createElement('button');
        button.innerText = 'Delete';
        button.addEventListener('click', deleteItemHandler)

        let li = document.createElement('li');
        li.id = item.id;
        li.append(span);
        li.append(button);

        item_list.append(li);
    });
}

const addItemHandler = () => {
    let text = document.getElementById('item_name');
    if (text.value) {
        store.dispatch({ type: ADD_ITEM, text: text.value })
        updateList();
        text.value = '';
    }
}

const deleteItemHandler = (event) => {
    const id = event.target.parentNode.id
    store.dispatch({ type: DELETE_ITEM, id })
    updateList();
}

btn_add_item.addEventListener('click', addItemHandler);
