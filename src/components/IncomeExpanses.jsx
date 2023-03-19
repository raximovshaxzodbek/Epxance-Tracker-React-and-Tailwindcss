import { useContext } from "react";
import { GlobalContext } from "../hooks/GlobalContext";

export const IncomeExpanses = () => {
  const { income, expanse } = useContext(GlobalContext);
  
  return (
    <div className="flex min-h-[80px] w-full items-center justify-center bg-white shadow-sm shadow-gray-400">
      <div className="flex w-1/2 flex-col items-center justify-center">
        <h4 className="font-semibold uppercase">Income</h4>
        <p className="font-semibold text-[#7AB78F]">+${income}</p>
      </div>
      <div className="h-[50px] w-[1px] bg-gray-400"></div>
      <div className="flex w-1/2 flex-col items-center justify-center">
        <h4 className="font-semibold uppercase">Expanse</h4>
        <p className="font-semibold text-[#A7515C]">-${Math.abs(expanse)}</p>
      </div>
    </div>
  );
};
