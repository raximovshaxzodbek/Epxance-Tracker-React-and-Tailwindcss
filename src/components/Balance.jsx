import { useContext } from "react";
import { GlobalContext } from "../hooks/GlobalContext";

export const Balance = () => {
  const { balance } = useContext(GlobalContext);
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase">Your Balance</h4>
      <h1 className="text-3xl font-semibold">${balance}</h1>
    </div>
  );
};
