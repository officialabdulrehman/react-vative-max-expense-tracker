import { FlatList } from "react-native";
import { Expense } from "../../store/redux/slices/expense/Expense.model";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

type Props = {
  expenses: Expense[];
};

const render = (item: any) => {
  return (
    <ExpenseItem
      id={item.id}
      description={item.description}
      date={item.date}
      amount={item.amount}
    />
  );
};

export const ExpensesList = (props: Props) => {
  const { expenses } = props;
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => render(item)}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};
