import React, { createContext, useReducer } from "react";
import { initialState } from "./InitialState";
import { reducer } from "./reducer";

export const GlobalContext = createContext({
  transactions: [],
  income: 0,
  expanse: 0,
  balance: 0,
  deleteTranaction: null,
  addTransaction: null,
});

export default function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // delete transaction
  const deleteTranaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  // add transaction
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  let amounts = state.transactions.map((transaction) => transaction.amount);
  let income = amounts
    .filter((amount) => amount >= 0 && amount)
    .reduce((prev, next) => (prev += next), 0);
  let expanse = Math.abs(
    amounts
      .filter((amount) => amount < 0 && amount)
      .reduce((prev, next) => (prev += next), 0)
  );
  let balance = income - expanse;
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
        income,
        expanse,
        balance,
        deleteTranaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
