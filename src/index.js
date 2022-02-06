const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('count');

let count = 0;

const updateCount = () => {
  number.innerHTML = count;
}

const addHandler = () => {
  count = count + 1;
  updateCount();
}

const minusHandler = () => {
  count = count - 1;
  updateCount();
}


add.addEventListener('click', addHandler);
minus.addEventListener('click', minusHandler);

