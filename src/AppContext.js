import React, { useContext, useReducer } from 'react';
import {calculateMortgage, setInitState} from './utils';
import {Actions, DEFAULT_STATE} from './const';

const AppContext = React.createContext();
const storage = window.localStorage;

export const useAppContext = () => {
  return useContext(AppContext);
}

const reducer = (state, action) => {
  switch(action.type) {
    case Actions.SET_PRICE: return {
      ...state,
      price: action.payload,
      initialPayment: state.ratio ? Math.round(action.payload / 100 * state.ratio) : state.initialPayment,
    };
    case Actions.SET_INITIAL_PAYMENT: return {
      ...state,
      initialPayment: action.payload,
      price: state.ratio ? Math.round(action.payload / state.ratio * 100) : state.price,
    };
    case Actions.SET_PERIOD: return {...state, period: action.payload};
    case Actions.SET_RATE: return {...state, rate: action.payload};
    case Actions.SET_RATIO: return {...state, ratio: action.payload};
    case Actions.CALCULATE_OFFER: return {
      ...state,
      ...calculateMortgage(state.price, state.initialPayment, state.rate, state.period)
    };
    case Actions.SAVE_DATA:
      storage.clear();
      for (let key in state) {
        storage.setItem(key,state[key]);
      }
      return state;
    case Actions.CLEAR_DATA:
        storage.clear();
      return state;
    default: return state;
  }
}

const AppProvider = ({ children }) => {
  const initialState = setInitState(DEFAULT_STATE, storage);

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

  const setRatio = (amount) => dispatch({
    type: Actions.SET_RATIO,
    payload: amount
  });

  const calculateOffer = () =>  dispatch({
    type: Actions.CALCULATE_OFFER,
  });

  const saveData = () =>  dispatch({
    type: Actions.SAVE_DATA,
  });

  const clearData = () =>  dispatch({
    type: Actions.CLEAR_DATA,
  });

  const { price, initialPayment, period, rate, monthlyPayment, income, overpayment, loanBody, ratio} = state;

  return(
    <AppContext.Provider value={{
      setRatio, ratio,
      price, setPrice,
      initialPayment, setInitPm,
      period, setPeriod,
      rate, setRate,
      calculateOffer, monthlyPayment, income, overpayment, loanBody,
      saveData, clearData
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
