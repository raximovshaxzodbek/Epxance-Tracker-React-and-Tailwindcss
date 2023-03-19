import { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../hooks/GlobalContext";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3 className="border-b-2 border-gray-400/60 py-2 font-semibold">
        History
      </h3>
      <ul className="flex flex-col gap-3">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} {...transaction} />
          ))
        ) : (
          <div>
            <h2 className="font-lato text-lg font-semibold text-red-500">
              There is no cost
            </h2>
          </div>
        )}
      </ul>
    </>
  );
};
