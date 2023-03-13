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
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    console.log(acc);
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

const calcDisplaySummary = function (movements) {
  const inAmnt = movements
    .filter(cur => cur > 0)
    .reduce((acc, cur) => acc + cur, 0);
  const outAmnt = movements
    .filter(cur => cur < 0)
    .reduce((acc, cur) => acc + cur, 0);
  const intAmnt = movements
    .filter(cur => cur > 0)
    .map(cur => (cur * 1.2) / 100)
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

const loginCheck = function (acc) {
  return Number(inputLoginPin.value) === acc.pin;
};

const account = findAccount(accounts);

const loginStatus = loginCheck(account);



const loginCallback = function(){

  const account = findAccount(accounts);
  const loginStatus = loginCheck(account); 
  if (loginStatus){
    calcDisplayBalance(account.movements);
    displayMovements(account.movements);
    calcDisplaySummary(account.movements)
  }
  else{
    alert(`Login username or Pin is not correct`)
  }

}

btnLogin.addEventListener("click",function(e){

  uye.preventDefault();

} 



)

// console.log(inputLoginUsername)
// console.log(inputLoginPin)
// btnLogin

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, -3000, -650, -130, 70, -1300];

// const maxVal = movements.reduce((acc, cur) => (cur > acc ? cur : acc), 0);

// console.log(maxVal);

// // const euroToUsd = 1.1;

// // const movementsUSD = movements.map(mov => mov * euroToUsd);

// // console.log(movementsUSD);

// // /////////////////////////////////////////////////

// movements.map()
