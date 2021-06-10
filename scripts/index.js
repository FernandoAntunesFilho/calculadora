let primeiroNum = null;
let segundoNum = null;
let operacao = null;

const mostraResultado = (resultado) => {
  const display = document.querySelector('.calc-display');
  if (resultado) {
    display.innerText = resultado;
  } else {
    display.innerText = 0;
  }
};

const soma = (valor1, valor2) => {
  const num1 = valor1.replace(',', '.');
  const num2 = valor2.replace(',', '.');
  const total = Number(num1) + Number(num2);
  const display = document.querySelector('.calc-display');
  display.innerText = total.toString().replace('.', ',');
};

const subtrai = (valor1, valor2) => {
  const num1 = valor1.replace(',', '.');
  const num2 = valor2.replace(',', '.');
  const total = Number(num1) - Number(num2);
  const display = document.querySelector('.calc-display');
  display.innerText = total.toString().replace('.', ',');
};

const multiplica = (valor1, valor2) => {
  const num1 = valor1.replace(',', '.');
  const num2 = valor2.replace(',', '.');
  const total = Number(num1) * Number(num2);
  const display = document.querySelector('.calc-display');
  display.innerText = total.toString().replace('.', ',');
};

const divide = (valor1, valor2) => {
  const num1 = valor1.replace(',', '.');
  const num2 = valor2.replace(',', '.');
  let total = 'Error';
  if (num2 > 0) total = Number(num1) / Number(num2);
  const display = document.querySelector('.calc-display');
  display.innerText = total.toString().replace('.', ',');
};

const porcentagem = (valor1, valor2) => {
  const num1 = valor1.replace(',', '.');
  const num2 = valor2.replace(',', '.');
  const total = Number(num2) * (Number(num1) / 100);
  const display = document.querySelector('.calc-display');
  display.innerText = total.toString().replace('.', ',');
};

const clickCButon = () => {
  primeiroNum = null;
  segundoNum = null;
  operacao = null;
  mostraResultado();
};

const clickCEButton = () => {
  if (operacao) {
    segundoNum = null;
    mostraResultado();
  } else {
    clickCButon();
  }
};

const clickEqualButton = () => {
  if (primeiroNum && segundoNum && operacao) {
    switch (operacao) {
      case '+':
        soma(primeiroNum, segundoNum);
        break;
      case '-':
        subtrai(primeiroNum, segundoNum);
        break;
      case 'x':
        multiplica(primeiroNum, segundoNum);
        break;
      case '/':
        divide(primeiroNum, segundoNum);
        break;
      case '%':
        porcentagem(primeiroNum, segundoNum);
        break;
      default:
        break;
    }
  }
};

const clickOperationButton = (value) => {
  if (primeiroNum && !segundoNum) operacao = value;
};

const virgulaExiste = () => {
  const display = document.querySelector('.calc-display');
  if (!operacao) {
    const displayValue = display.innerText;
    return displayValue.search(',');
  }
  display.innerText = 0;
  const displayValue = display.innerText;
  return displayValue.search(',');
};

const clickVirgulaButton = () => {
  if (virgulaExiste() === -1) {
    if (!operacao) {
      if (primeiroNum) {
        primeiroNum += ',';
      } else {
        primeiroNum = '0,';
      }
      mostraResultado(primeiroNum);
    } else {
      if (segundoNum) {
        segundoNum += ',';
      } else {
        segundoNum = '0,';
      }
      mostraResultado(segundoNum);
    }
  }
};

const clickNumberButton = (value) => {
  if (!operacao) {
    if (primeiroNum) {
      primeiroNum += value.toString();
    } else {
      primeiroNum = value.toString();
    }
    mostraResultado(primeiroNum);
  } else {
    if (segundoNum) {
      segundoNum += value.toString();
    } else {
      segundoNum = value.toString();
    }
    mostraResultado(segundoNum);
  }
};

const mountRow4 = () => {
  const div = document.querySelector('.row-4');
  for (let i = 7; i <= 9; i += 1) {
    const divButton = document.createElement('div');
    divButton.innerText = i;
    divButton.className = 'calc-button number';
    divButton.value = i;
    divButton.onclick = (e) => { clickNumberButton(e.target.value); }; // ONCLICK
    div.appendChild(divButton);
  }
  const ceButton = document.createElement('div');
  const cButton = document.createElement('div');
  ceButton.innerText = 'CE';
  cButton.innerText = 'C';
  ceButton.className = 'calc-button';
  cButton.className = 'calc-button';
  cButton.onclick = () => { clickCButon(); };
  ceButton.onclick = () => { clickCEButton(); };
  div.appendChild(ceButton);
  div.appendChild(cButton);
};

const mountRow3 = () => {
  const div = document.querySelector('.row-3');
  for (let i = 4; i <= 6; i += 1) {
    const divButton = document.createElement('div');
    divButton.innerText = i;
    divButton.className = 'calc-button number';
    divButton.value = i;
    divButton.onclick = (e) => { clickNumberButton(e.target.value); }; // ONCLICK
    div.appendChild(divButton);
  }
  const multiButton = document.createElement('div');
  const divideButton = document.createElement('div');
  multiButton.innerText = 'X';
  divideButton.innerText = '÷';
  multiButton.className = 'calc-button';
  divideButton.className = 'calc-button';
  multiButton.onclick = () => { clickOperationButton('x'); }; // OPERAÇÕES ONCLICK
  divideButton.onclick = () => { clickOperationButton('/'); }; // OPERAÇÕES ONCLICK
  div.appendChild(multiButton);
  div.appendChild(divideButton);
};

const mountRow2 = () => {
  const div = document.querySelector('.row-2');
  for (let i = 1; i <= 3; i += 1) {
    const divButton = document.createElement('div');
    divButton.innerText = i;
    divButton.className = 'calc-button number';
    divButton.value = i;
    divButton.onclick = (e) => { clickNumberButton(e.target.value); }; // ONCLICK
    div.appendChild(divButton);
  }
  const minusButton = document.createElement('div');
  const percentButton = document.createElement('div');
  minusButton.innerText = '-';
  percentButton.innerText = '%';
  minusButton.className = 'calc-button';
  percentButton.className = 'calc-button';
  minusButton.onclick = () => { clickOperationButton('-'); }; // OPERAÇÕES ONCLICK
  percentButton.onclick = () => { clickOperationButton('%'); }; // OPERAÇÕES ONCLICK
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
  zeroButton.className = 'calc-button number';
  commaButton.className = 'calc-button';
  equalButton.className = 'calc-button';
  plusButton.className = 'calc-button plus-button';
  zeroButton.value = 0;
  zeroButton.onclick = (e) => { clickNumberButton(e.target.value); }; // ONCLICK
  commaButton.onclick = () => { clickVirgulaButton(); };
  plusButton.onclick = () => { clickOperationButton('+'); }; // OPERAÇÕES ONCLICK
  equalButton.onclick = () => { clickEqualButton(); };
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

mostraResultado();
