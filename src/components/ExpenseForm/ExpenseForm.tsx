import { useState } from "react";
import { Text, View } from "react-native";
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

type State = {
  value: string;
  isValid: boolean;
};

export const ExpenseForm = (props: Props) => {
  const { id, onCancel, onSubmit } = props;
  const expense = useSelector(
    (state: RootState) => state.expenseReducer.expenses
  ).find((expense: Expense) => expense.id === id);
  const [amount, setAmount] = useState<State>({
    value: expense?.amount.toString() || "",
    isValid: true,
  });
  const [date, setDate] = useState<State>({
    value: expense?.date || "",
    isValid: true,
  });
  const [description, setDescription] = useState<State>({
    value: expense?.description || "",
    isValid: true,
  });

  const handleAmountChange = (text: string) => {
    setAmount({ value: text, isValid: true });
  };
  const handleDateChange = (text: string) => {
    setDate({ value: text, isValid: true });
  };
  const handleDescriptionChange = (text: string) => {
    setDescription({ value: text, isValid: true });
  };

  const handleConfirm = () => {
    if (!validations()) {
      return;
    }
    const data: AddExpense = {
      amount: +amount,
      date: new Date(date.value).toISOString(),
      description: description.value,
    };
    onSubmit(data);
  };

  const validations = (): boolean => {
    const isAmountValid = !isNaN(+amount.value) && +amount.value > 0;
    const isDateValid = date.value.toString() === "Invalid Date" ? true : false;
    const isDescriptionValid = description.value.trim().length ? true : false;
    if (!isAmountValid || !isDateValid || isDescriptionValid) {
      setAmount({
        value: amount.value,
        isValid: isAmountValid,
      });
      setDate({
        value: amount.value,
        isValid: isDateValid,
      });
      setDescription({
        value: amount.value,
        isValid: isDescriptionValid,
      });
      return false;
    }
    return true;
  };

  const isFormValid = amount.isValid && date.isValid && description.isValid;
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Expense form</Text> */}
      <Input
        label="Amount"
        config={{
          value: amount.value,
          keyboardType: "decimal-pad",
          onChangeText: handleAmountChange,
          placeholder: "Enter the amound. eg: 99.99",
        }}
        invalid={!amount.isValid}
      />
      <Input
        label="Date"
        config={{
          value: date.value,
          keyboardType: "decimal-pad",
          onChangeText: handleDateChange,
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
        }}
        invalid={!date.isValid}
      />
      <Input
        label="Description"
        config={{
          value: description.value,
          onChangeText: handleDescriptionChange,
          multiline: true,
          placeholder: "Enter your details",
          autoCapitalize: "sentences",
          autoCorrect: false,
        }}
        invalid={!description.isValid}
      />
      {!isFormValid && <Text style={styles.errorMsg}>Invalid input</Text>}
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
