'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(element => element[0])
      .join('');
  });
};
createUsernames(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance} €`;
};

const calcDisplaySummary = function (account) {
  const inAmnt = account.movements
    .filter(cur => cur > 0)
    .reduce((acc, cur) => acc + cur, 0);
  const outAmnt = account.movements
    .filter(cur => cur < 0)
    .reduce((acc, cur) => acc + cur, 0);
  const intAmnt = account.movements
    .filter(cur => cur > 0)
    .map(cur => (cur * account.interestRate) / 100)
    .filter(cur => cur > 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${inAmnt} €`;
  labelSumOut.textContent = `${Math.abs(outAmnt)}€`;
  labelSumInterest.textContent = `${intAmnt} €`;
};

const findAccount = function (accs) {
  const username = inputLoginUsername.value;
  const account = accs.find(val => val.username === username);
  return account;
};

const loginCheck = function (acnt) {
  return Number(inputLoginPin.value) === acnt.pin;
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const account = findAccount(accounts);
  if (account) {
    const loginStatus = loginCheck(account);
    if (loginStatus) {
      labelWelcome.textContent = `Welcome back, ${account.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();
      calcDisplayBalance(account.movements);
      displayMovements(account.movements);
      calcDisplaySummary(account);
    } else {
      alert('Pin you entered is wrong');
    }
  } else {
    alert(`Login username is not correct`);
  }
});