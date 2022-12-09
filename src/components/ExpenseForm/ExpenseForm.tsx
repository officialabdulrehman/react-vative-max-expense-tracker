import { useState } from "react";
import { View } from "react-native";
import { AddExpense } from "../../store/redux/slices/expense/Expense.model";
import { Button } from "../UI/Button/Button";
import { ButtonMode } from "../UI/Button/ButtonMode.enum";
import { Input } from "../UI/Input/Input";
import { styles } from "./ExpenseForm.styles";

type Props = {
  id?: string;
  onCancel: () => void;
  onSubmit: (data: AddExpense) => void;
};

export const ExpenseForm = (props: Props) => {
  const { id, onCancel, onSubmit } = props;
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAmountChange = (text: string) => {
    setAmount(text);
  };
  const handleDateChange = (text: string) => {
    setDate(text);
  };
  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const handleConfirm = () => {
    const data: AddExpense = {
      amount: +amount,
      date: new Date(date).toISOString(),
      description: description,
    };
    onSubmit(data);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Expense form</Text> */}
      <Input
        label="Amount"
        config={{
          value: amount,
          keyboardType: "decimal-pad",
          onChangeText: handleAmountChange,
          placeholder: "Enter the amound. eg: 99.99",
        }}
      />
      <Input
        label="Date"
        config={{
          value: date,
          keyboardType: "decimal-pad",
          onChangeText: handleDateChange,
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
        }}
      />
      <Input
        label="Description"
        config={{
          value: description,
          onChangeText: handleDescriptionChange,
          multiline: true,
          placeholder: "Enter your details",
          autoCapitalize: "sentences",
          autoCorrect: false,
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode={ButtonMode.FLAT} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleConfirm}>
          {id ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};
