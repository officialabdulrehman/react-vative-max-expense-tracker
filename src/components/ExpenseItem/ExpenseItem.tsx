import { Pressable, Text, View } from "react-native";
import { styles } from "./ExpenseItem.styles";

type Props = {
  description: string;
  date: Date;
  amount: number;
};

export const ExpenseItem = (props: Props) => {
  const { description, date, amount } = props;
  return (
    <Pressable>
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{new Date(date).toDateString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};
