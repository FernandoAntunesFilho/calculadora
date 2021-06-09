const mountRow4 = () => {
  const div = document.querySelector('.row-4');
  for (let i = 7; i <= 9; i += 1) {
    const divButton = document.createElement('div');
    divButton.innerText = i;
    divButton.className = 'calc-button';
    div.appendChild(divButton);
  }
  const ceButton = document.createElement('div');
  const cButton = document.createElement('div');
  ceButton.innerText = 'CE';
  cButton.innerText = 'C';
  div.appendChild(ceButton);
  div.appendChild(cButton);
};

const mountRow3 = () => {
  const div = document.querySelector('.row-3');
  for (let i = 4; i <= 6; i += 1) {
    const divButton = document.createElement('div');
    divButton.innerText = i;
    divButton.className = 'calc-button';
    div.appendChild(divButton);
  }
  const multiButton = document.createElement('div');
  const divideButton = document.createElement('div');
  multiButton.innerText = 'X';
  divideButton.innerText = '÷';
  div.appendChild(multiButton);
  div.appendChild(divideButton);
};

const mountRow2 = () => {
  const div = document.querySelector('.row-2');
  for (let i = 1; i <= 3; i += 1) {
    const divButton = document.createElement('div');
    divButton.innerText = i;
    divButton.className = 'calc-button';
    div.appendChild(divButton);
  }
  const minusButton = document.createElement('div');
  const percentButton = document.createElement('div');
  minusButton.innerText = '-';
  percentButton.innerText = '%';
  div.appendChild(minusButton);
  div.appendChild(percentButton);
};

const mountRow1 = () => {
  const div = document.querySelector('.row-1');
  const zeroButton = document.createElement('div');
  const commaButton = document.createElement('div');
  const equalButton = document.createElement('div');
  const plusButton = document.createElement('div');
  zeroButton.innerText = '0';
  commaButton.innerText = ',';
  equalButton.innerText = '=';
  plusButton.innerText = '+';
  div.appendChild(zeroButton);
  div.appendChild(commaButton);
  div.appendChild(equalButton);
  div.appendChild(plusButton);
};

const mountCalcButtons = () => {
  mountRow1();
  mountRow2();
  mountRow3();
  mountRow4();
};

mountCalcButtons();
