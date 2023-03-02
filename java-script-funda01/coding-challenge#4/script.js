const bill = 430;

const tipPer = (bill >= 50 && bill <=300) ? 0.15:0.2;

console.log(`bill value: ${bill}, tip:${bill*tipPer}, total value : ${bill + (bill*tipPer)} `);
