import { useContext, useState } from "react";
import { GlobalContext } from "../hooks/GlobalContext";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const handleAddTransaction = (e) => {
    e.preventDefault();
    addTransaction({
      id: Math.round(Math.random() * 100000),
      text,
      amount: Number(amount),
    });
    setText("");
    setAmount();
  };
  return (
    <>
      <h3 className="border-b-2 border-gray-400/60 py-2 font-semibold">
        Add new transaction
      </h3>
      <form className="flex flex-col gap-3" onSubmit={handleAddTransaction}>
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="font-semibold">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-black/70 bg-white p-2 outline-none"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="font-semibold">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="w-full border border-black/70 bg-white p-2 outline-none"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="bg-[#6C5EB6] p-2 text-white">Add transaction</button>
      </form>
    </>
  );
};
