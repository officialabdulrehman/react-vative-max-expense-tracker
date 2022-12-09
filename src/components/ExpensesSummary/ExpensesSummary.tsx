import { Text, View } from "react-native";
import { Expense } from "../../store/redux/slices/expense/Expense.model";
import { styles } from "./ExpensesSummary.styles.";

type Props = {
  expenses: Expense[];
  period: string;
};

export const ExpensesSummary = (props: Props) => {
  const { expenses, period } = props;
  const sum = expenses.reduce((sum: number, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>${sum.toFixed(2)}/- USD</Text>
    </View>
  );
};
