import { useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import {
  AddExpense,
  Expense,
} from "../../store/redux/slices/expense/Expense.model";
import { RootState } from "../../store/redux/store";
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
  const expense = useSelector(
    (state: RootState) => state.expenseReducer.expenses
  ).find((expense: Expense) => expense.id === id);
  const [amount, setAmount] = useState<string>(
    expense?.amount.toString() || ""
  );
  const [date, setDate] = useState<string>(expense?.date || "");
  const [description, setDescription] = useState<string>(
    expense?.description || ""
  );

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
