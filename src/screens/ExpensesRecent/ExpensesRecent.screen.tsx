import { ExpensesOutput } from "../../components/ExpensesOutput/ExpensesOutput";

type Props = {};

export const ExpensesRecent = (props: Props) => {
  return <ExpensesOutput expenses={""} period="Last 7 Days" />;
};
