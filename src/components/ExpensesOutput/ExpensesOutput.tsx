import { Text, View } from "react-native";
import { Expense } from "../../store/redux/slices/expense/Expense.model";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { ExpensesSummary } from "../ExpensesSummary/ExpensesSummary";
import { styles } from "./ExpensesOutput.styles";

type Props = {
  expenses: Expense[];
  period: string;
  fallbacktext: string;
};

export const ExpensesOutput = (props: Props) => {
  const { expenses, period, fallbacktext } = props;
  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} expenses={expenses} />
      {expenses.length ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text style={styles.fallbackText}>{fallbacktext}</Text>
      )}
    </View>
  );
};
