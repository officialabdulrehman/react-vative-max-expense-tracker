import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { Screens } from "../../screens/Screens.enum";
import { styles } from "./ExpenseItem.styles";

type Props = {
  description: string;
  date: Date;
  amount: number;
};

type NavigationProps = {
  ExpenseManage: {};
};

export const ExpenseItem = (props: Props) => {
  const { description, date, amount } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationProps>>();

  const onPress = () => {
    navigation.navigate(Screens.ExpenseManage, {});
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{new Date(date).toDateString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};
