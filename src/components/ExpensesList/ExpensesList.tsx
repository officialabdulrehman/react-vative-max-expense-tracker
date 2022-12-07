import { FlatList } from "react-native";

type Props = {};

export const ExpensesList = (props: Props) => {
  return (
    <FlatList
      data={[]}
      renderItem={(itemData) => <></>}
      keyExtractor={(item) => item}
    />
  );
};
