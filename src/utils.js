const calcLoanBody = (W, A) => W - A;

const calcMonthlyPayment = (body, rate, years) =>{
  const monthlyRate = rate / 1200;
  const generalRate = Math.pow(1 + monthlyRate, years * 12);
  return Math.round(body * monthlyRate * generalRate / (generalRate - 1));
};

const calcIncome = (monthlyPayment) => Math.round(5 * monthlyPayment / 3);

const calcOverpayment = (monthlyPayment, years, price, initialPayment) =>{
  return monthlyPayment * years * 12 - price + initialPayment;
};

const testNaN = num => isNaN(num) ? 0 : num;

export const calculateMortgage = (price, initialPayment, interestRate, years) => {
  const loanBody = calcLoanBody(price, initialPayment);
  const monthlyPayment = calcMonthlyPayment(loanBody, interestRate, years);
  const income = calcIncome(monthlyPayment);
  const overpayment = calcOverpayment(monthlyPayment, years, price, initialPayment);

  return {
    loanBody,
    monthlyPayment: testNaN(monthlyPayment),
    income: testNaN(income),
    overpayment: testNaN(overpayment),
  }
}

export const spaceInNum = num => num.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');

export const setInitState = (state, store) => {
  if (store.length === 0) {
    return state;
  }
  const data = {};
  for(let key in state) {
    data[key] = +store.getItem(key);
  }
  return data;
}
