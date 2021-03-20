console.log('Hola mundo')

document.addEventListener('DOMContentLoaded', (event) => {
  let content = document.createElement('div');
  content.className = 'content';

  let counter = document.createElement('span');
  counter.className = 'counter';
  counter.innerHTML = '0';

  let actions = document.createElement('div');
  actions.className = 'actions';

  let buttonPlus = document.createElement('button');
  buttonPlus.id = 'plus';
  buttonPlus.innerHTML = '<i class="fas fa-plus"></i>';

  let buttonMinus = document.createElement('button');
  buttonMinus.id = 'minus';
  buttonMinus.innerHTML = '<i class="fas fa-minus"></i>';

  content.append(counter);
  actions.append(buttonPlus);
  actions.append(buttonMinus);
  content.append(actions);


  document.body.append(content);

  let counterFn = counterManage();
  buttonPlus.addEventListener('click', () =>  {
    let value = counterFn.add()
    if(value > 0) counter.style.color = 'rgb(100, 120, 220)';
    counter.innerHTML = value;
})
  buttonMinus.addEventListener('click', () => {
    let value = counterFn.substract();
    if (value <= 0) counter.style.color = 'tomato';
    counter.innerHTML = value;
  })
})


const counterManage = () => {
  let value = 0;

  return {
    add: () => value += 1,
    substract: () => value -= 1
  }
}
