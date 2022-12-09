import { useSelector } from "react-redux";
import { ExpensesOutput } from "../../components/ExpensesOutput/ExpensesOutput";
import { RootState } from "../../store/redux/store";

type Props = {};

export const ExpensesAll = (props: Props) => {
  const expenses = useSelector(
    (state: RootState) => state.expenseReducer.expenses
  );
  return (
    <ExpensesOutput
      expenses={expenses}
      period="All Time"
      fallbacktext="No expenses found"
    />
  );
};
