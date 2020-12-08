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

export const calculateMortgage = (price, initialPayment, interestRate, years) => {
  const loanBody = calcLoanBody(price, initialPayment)
  const monthlyPayment = calcMonthlyPayment(loanBody, interestRate, years);
  const income = calcIncome(monthlyPayment);
  const overpayment = calcOverpayment(monthlyPayment, years, price, initialPayment);

  return {
    loanBody,
    monthlyPayment,
    income,
    overpayment,
  }
}
