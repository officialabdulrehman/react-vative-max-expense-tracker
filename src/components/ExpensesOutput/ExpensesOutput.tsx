import { View } from "react-native";
import { Expense } from "../../store/redux/slices/expense/Expense.model";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { ExpensesSummary } from "../ExpensesSummary/ExpensesSummary";
import { styles } from "./ExpensesOutput.styles";

type Props = {
  expenses: Expense[];
  period: string;
};

export const ExpensesOutput = (props: Props) => {
  const { expenses, period } = props;
  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};
