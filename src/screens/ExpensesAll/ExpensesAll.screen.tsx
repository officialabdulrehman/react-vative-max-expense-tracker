import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExpensesOutput } from "../../components/ExpensesOutput/ExpensesOutput";
import { LoadingOverlay } from "../../components/UI/LoadingOverlay/LoadingOverlay";
import { expenseApi } from "../../services/api/expense/expense.api";
import { setExpenses } from "../../store/redux/slices/expense/expense.slice";
import { RootState } from "../../store/redux/store";

type Props = {};

export const ExpensesAll = (props: Props) => {
  const expenses = useSelector(
    (state: RootState) => state.expenseReducer.expenses
  );
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getExpenses = async () => {
      const data = await expenseApi.list();
      dispatch(setExpenses(data));
      setIsFetching(false);
    };
    getExpenses();
  }, []);
  if (isFetching) {
    return <LoadingOverlay />;
  }
  return (
    <ExpensesOutput
      expenses={expenses}
      period="All Time"
      fallbacktext="No expenses found"
    />
  );
};
