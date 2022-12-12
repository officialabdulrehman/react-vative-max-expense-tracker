import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExpensesOutput } from "../../components/ExpensesOutput/ExpensesOutput";
import { ErrorOverlay } from "../../components/UI/ErrorOverlay/ErrorOverlay";
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
  const [error, setError] = useState("");

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const data = await expenseApi.list();
        dispatch(setExpenses(data));
      } catch (e) {
        setError("Fetching data from server failed!");
      }
      setIsFetching(false);
    };
    getExpenses();
  }, [setIsFetching]);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const filterRecent = (data: Expense[]) => {
    return data.filter(
      (expense: Expense) => new Date(expense.date) > getDateMinusDays(7)
    );
  };

  if (error.length && !isFetching) {
    return (
      <ErrorOverlay
        message={error}
        onConfirm={() => {
          setError("");
        }}
      />
    );
  }

  return (
    <ExpensesOutput
      expenses={filterRecent(expenses)}
      period="Last 7 Days"
      fallbacktext="No expenses registered for the last 7 days"
    />
  );
};
