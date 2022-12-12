import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExpensesOutput } from "../../components/ExpensesOutput/ExpensesOutput";
import { LoadingOverlay } from "../../components/UI/LoadingOverlay/LoadingOverlay";
import { expenseApi } from "../../services/api/expense/expense.api";
import { Expense } from "../../store/redux/slices/expense/Expense.model";
import { setExpenses } from "../../store/redux/slices/expense/expense.slice";
import { RootState } from "../../store/redux/store";
import { getDateMinusDays } from "../../util/date";

type Props = {};

export const ExpensesRecent = (props: Props) => {
  const expenses = useSelector(
    (state: RootState) => state.expenseReducer.expenses
  ).filter((expense: Expense) => new Date(expense.date) > getDateMinusDays(7));
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(true);

  const filterRecent = (data: Expense[]) => {
    return data.filter(
      (expense: Expense) => new Date(expense.date) > getDateMinusDays(7)
    );
  };

  useEffect(() => {
    const getExpenses = async () => {
      const data = await expenseApi.list();
      const filteredData = filterRecent(data);
      dispatch(setExpenses(filteredData));
      setIsFetching(false);
    };
    getExpenses();
  }, [setIsFetching]);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={expenses}
      period="Last 7 Days"
      fallbacktext="No expenses registered for the last 7 days"
    />
  );
};
