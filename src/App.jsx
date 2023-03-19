import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { IncomeExpanses } from "./components/IncomeExpanses";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F3]">
      <h2 className="text-xl font-semibold">Expance Tracker</h2>
      <div className="mx-auto pt-4 flex w-[350px] flex-col gap-4">
        <Balance />
        <IncomeExpanses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
