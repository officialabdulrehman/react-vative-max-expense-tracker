import { FlatList, Text } from "react-native";

type Props = {
  expenses: {
    id: string;
    amount: number;
  }[];
};

const render = (item: any) => {
  return <Text>{item.description}</Text>;
};

export const ExpensesList = (props: Props) => {
  const { expenses } = props;
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => render(item)}
      keyExtractor={(item) => item.id}
    />
  );
};
