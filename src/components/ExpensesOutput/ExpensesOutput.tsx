import { View } from "react-native";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { ExpensesSummary } from "../ExpensesSummary/ExpensesSummary";

type Props = {};

export const ExpensesOutput = (props: Props) => {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};
