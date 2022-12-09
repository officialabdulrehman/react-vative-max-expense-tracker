import { View } from "react-native";
import { Input } from "../UI/Input/Input";
import { styles } from "./ExpenseForm.styles";

type Props = {};

export const ExpenseForm = (props: Props) => {
  const handleAmountChange = () => {};
  const handleDateChange = () => {};
  const handleDescriptionChange = () => {};
  return (
    <View style={styles.container}>
      <Input
        label="Amount"
        config={{
          keyboardType: "decimal-pad",
          onChangeText: handleDateChange,
          placeholder: "Enter the amound. eg: 99.99",
        }}
      />
      <Input
        label="Date"
        config={{
          keyboardType: "decimal-pad",
          onChangeText: handleAmountChange,
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
        }}
      />
      <Input
        label="Description"
        config={{
          onChangeText: handleDescriptionChange,
          multiline: true,
          placeholder: "Enter your details",
          autoCapitalize: "sentences",
          autoCorrect: false,
        }}
      />
    </View>
  );
};
