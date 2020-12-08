import React, { useContext, useReducer } from 'react';
import {calculateMortgage} from './utils';
import {Actions} from './const';

const AppContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

const reducer = (state, action) => {
  switch(action.type) {
    case Actions.SET_PRICE: return {...state, price: action.payload};
    case Actions.SET_INITIAL_PAYMENT: return {...state, initialPayment: action.payload};
    case Actions.SET_PERIOD: return {...state, period: action.payload};
    case Actions.SET_RATE: return {...state, rate: action.payload};
    case Actions.CALCULATE_OFFER: return {
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
    loanBody: 0,
    monthlyPayment: 0,
    income: 0,
    overpayment: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const setPrice = (amount) => dispatch({
    type: Actions.SET_PRICE,
    payload: amount
  });

  const setInitPm = (amount) => dispatch({
    type: Actions.SET_INITIAL_PAYMENT,
    payload: amount
  });

  const setPeriod = (amount) => dispatch({
    type: Actions.SET_PERIOD,
    payload: amount
  });

  const setRate = (amount) => dispatch({
    type: Actions.SET_RATE,
    payload: amount
  });

  const calculateOffer = () =>  dispatch({
    type: Actions.CALCULATE_OFFER,
  });

  const { price, initialPayment, period, rate, monthlyPayment, income, overpayment, loanBody } = state;

  return(
    <AppContext.Provider value={{
      price, setPrice,
      initialPayment, setInitPm,
      period, setPeriod,
      rate, setRate,
      calculateOffer, monthlyPayment, income, overpayment, loanBody,
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
