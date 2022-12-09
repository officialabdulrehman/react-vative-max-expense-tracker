import { FlatList } from "react-native";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

type Props = {
  expenses: {
    id: string;
    amount: number;
  }[];
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
