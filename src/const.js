export const Actions = {
  SET_PRICE: 'SET_PRICE',
  SET_INITIAL_PAYMENT: 'SET_INITIAL_PAYMENT',
  SET_PERIOD: 'SET_PERIOD',
  SET_RATE: 'SET_RATE',
  CALCULATE_OFFER: 'CALCULATE_OFFER',
  SAVE_DATA: 'SAVE_DATA',
  CLEAR_DATA: 'CLEAR_DATA',
  LOAD_DATA: 'LOAD_DATA',
};

export const DEFAULT_STATE = {
  price: 0,
  initialPayment: 0,
  period: 0,
  rate: 0,
  loanBody: 0,
  monthlyPayment: 0,
  income: 0,
  overpayment: 0,
};
