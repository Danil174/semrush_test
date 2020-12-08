import React, { useContext, useReducer } from 'react';

const AppContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_PRICE': return {...state, price: action.payload};
    case 'SET_INITIAL_PAYMENT': return {...state, initialPayment: action.payload};
    case 'SET_PERIOD': return {...state, period: action.payload};
    case 'SET_RATE': return {...state, rate: action.payload};
    case 'CALCULATE_OFFER': return {
      ...state,
      ...calculateMortgage(state.price, state.initialPayment, state.rate, state.period)
    };
    default: return state;
  }
}

const AppProvider = ({ children }) => {
  const initialState = {
    price: 0,
    initialPayment: 0,
    period: 0,
    rate: 0,
    loanPrincipal: 0,
    monthlyPayment: 0,
    income: 0,
    overpayment: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const setPrice = (amount) => dispatch({
    type: 'SET_PRICE',
    payload: amount
  });

  const setInitPm = (amount) => dispatch({
    type: 'SET_INITIAL_PAYMENT',
    payload: amount
  });

  const setPeriod = (amount) => dispatch({
    type: 'SET_PERIOD',
    payload: amount
  });

  const setRate = (amount) => dispatch({
    type: 'SET_RATE',
    payload: amount
  });

  const calculateOffer = () =>  dispatch({
    type: 'CALCULATE_OFFER',
  });

  const { price, initialPayment, period, rate, monthlyPayment, income, overpayment, loanPrincipal } = state;

  return(
    <AppContext.Provider value={{
      price, setPrice,
      initialPayment, setInitPm,
      period, setPeriod,
      rate, setRate,
      calculateOffer, monthlyPayment, income, overpayment, loanPrincipal,
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;

const calcLoanBody = (W, A) => W - A;

const calcMonthlyPayment = (body, rate, years) =>{
  const monthlyRate = rate / 1200;
  const generalRate = Math.pow(1 + monthlyRate, years * 12);
  return Math.round(body * monthlyRate * generalRate / (generalRate - 1));
};

const INCOME = (monthlyPayment) => Math.round(5 * monthlyPayment / 3);

const over = (monthlyPayment, years, price, initialPayment) =>{
  return monthlyPayment * years * 12 - price + initialPayment;
};

const calculateMortgage = (price, initialPayment, interestRate, years) => {
  const loanBody = calcLoanBody(price, initialPayment)
  const monthlyPayment = calcMonthlyPayment(loanBody, interestRate, years);
  const income = INCOME(monthlyPayment);
  const OP = over(monthlyPayment, years, price, initialPayment);
  return {
    loanPrincipal: loanBody,
    monthlyPayment,
    income,
    overpayment: OP,
  }
}
