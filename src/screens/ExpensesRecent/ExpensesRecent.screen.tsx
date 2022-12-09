import { useSelector } from "react-redux";
import { ExpensesOutput } from "../../components/ExpensesOutput/ExpensesOutput";
import { Expense } from "../../store/redux/slices/expense/Expense.model";
import { RootState } from "../../store/redux/store";
import { getDateMinusDays } from "../../util/date";

type Props = {};

export const ExpensesRecent = (props: Props) => {
  const expenses = useSelector(
    (state: RootState) => state.expenseReducer.expenses
  ).filter((expense: Expense) => new Date(expense.date) > getDateMinusDays(7));
  return <ExpensesOutput expenses={expenses} period="Last 7 Days" />;
};
