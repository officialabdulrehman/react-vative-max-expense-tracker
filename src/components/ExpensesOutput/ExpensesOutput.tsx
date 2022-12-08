import { View } from "react-native";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { ExpensesSummary } from "../ExpensesSummary/ExpensesSummary";
import { styles } from "./ExpensesOutput.styles";

type Props = {
  expenses: unknown;
  period: string;
};

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A PS5",
    amount: 999.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "A dosen bananas",
    amount: 1.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 9.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Udemy Course",
    amount: 18.99,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A PS5",
    amount: 999.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e8",
    description: "A dosen bananas",
    amount: 1.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 9.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e10",
    description: "Udemy Course",
    amount: 18.99,
    date: new Date("2022-02-18"),
  },
];

export const ExpensesOutput = (props: Props) => {
  const { expenses, period } = props;
  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
