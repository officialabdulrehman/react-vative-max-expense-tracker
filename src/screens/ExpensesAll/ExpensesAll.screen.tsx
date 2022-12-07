import { ExpensesOutput } from "../../components/ExpensesOutput/ExpensesOutput";

type Props = {};

export const ExpensesAll = (props: Props) => {
  return <ExpensesOutput expenses={""} period="All Time" />;
};
