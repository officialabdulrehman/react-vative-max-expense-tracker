import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Button } from "../../components/UI/Button/Button";
import { ButtonMode } from "../../components/UI/Button/ButtonMode.enum";
import { IconButton } from "../../components/UI/IconButton/IconButton";
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

  const { id } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, id]);

  const handleDelete = () => {};
  const handleCancel = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          mode={ButtonMode.FLAT}
          onPress={handleCancel}
        >
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleCancel}>
          {id ? "Update" : "Add"}
        </Button>
      </View>
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
  );
};
