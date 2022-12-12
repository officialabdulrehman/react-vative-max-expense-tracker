import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseForm } from "../../components/ExpenseForm/ExpenseForm";
import { IconButton } from "../../components/UI/IconButton/IconButton";
import { LoadingOverlay } from "../../components/UI/LoadingOverlay/LoadingOverlay";
import { expenseApi } from "../../services/api/expense/expense.api";
import { AddExpense } from "../../store/redux/slices/expense/Expense.model";
import {
  addExpense,
  removeExpense,
  updateExpense,
} from "../../store/redux/slices/expense/expense.slice";
import { RootState } from "../../store/redux/store";
import { Screens } from "../Screens.enum";
import { styles } from "./ExpenseManage.styles";

type Props = {};

type RouteParams = {
  ExpensesAll: {
    id?: string;
  };
  ExpensesRecent: {
    id?: string;
  };
};

type NavigatedFromSreens = Screens.ExpensesAll | Screens.ExpensesRecent;

type NavigationProps = {};

export const ExpenseManage = (props: Props) => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const route = useRoute<RouteProp<RouteParams, NavigatedFromSreens>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationProps>>();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, id]);

  const handleConfirm = async (data: AddExpense) => {
    setIsLoading(true);
    if (id) {
      dispatch(
        updateExpense({
          ...data,
          id,
        })
      );
      await expenseApi.update(id, data);
    } else {
      const id = await expenseApi.create(data);
      dispatch(addExpense({ ...data, id }));
    }
    setIsLoading(false);
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleDelete = async () => {
    setIsLoading(true);
    if (id) {
      dispatch(removeExpense({ id }));
      await expenseApi.delete(id);
      setIsLoading(false);
    }
    navigation.goBack();
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ExpenseForm id={id} onCancel={handleCancel} onSubmit={handleConfirm} />
        {id && (
          <View style={styles.deleteIconContainer}>
            <IconButton
              name="trash"
              color={theme.colors.secondary400}
              size={30}
              onPress={handleDelete}
            />
          </View>
        )}
      </View>
    </View>
  );
};
