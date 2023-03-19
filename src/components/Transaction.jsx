import { useContext } from "react";
import { HiXMark } from "react-icons/hi2";
import { GlobalContext } from "../hooks/GlobalContext";

export const Transaction = (transaction) => {
  const { deleteTranaction } = useContext(GlobalContext);
  let amount = Math.abs(transaction.amount);
  let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <li
      className={
        "group relative flex w-full justify-between border-r-[4px] bg-white p-2 shadow-sm shadow-gray-400 " +
        (transaction.amount > 0 ? "border-[#25C566]" : "border-[#B2301F]")
      }
    >
      {transaction.text}{" "}
      <span>
        {sign}${amount}
      </span>
      <button
        className="absolute top-[calc(50%-15px)] -left-[30px] flex h-[30px] w-[30px] scale-0 items-center justify-center bg-red-500 text-white duration-300 group-hover:scale-100"
        onClick={() => deleteTranaction(transaction.id)}
      >
        <HiXMark />
      </button>
    </li>
  );
};
