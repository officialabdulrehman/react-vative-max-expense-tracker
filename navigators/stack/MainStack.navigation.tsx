import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { IconButton } from "../../src/components/UI/IconButton/IconButton";
import { ExpenseManage } from "../../src/screens/ExpenseManage/ExpenseManage.screen";
import { Screens } from "../../src/screens/Screens.enum";
import { RootState } from "../../src/store/redux/store";
import { MainBottomTabNavigator } from "../bottomTabs/MainBottomTab.navigation";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: theme.backgroundColors.primary000,
        },
        headerTintColor: theme.colors.primary400,
        tabBarStyle: {
          backgroundColor: theme.backgroundColors.primary000,
        },
        tabBarActiveTintColor: theme.colors.primary400,
        headerRight: () => (
          <IconButton
            name="add"
            size={26}
            color={theme.colors.primary400}
            onPress={() => {}}
          />
        ),
      })}
    >
      <Stack.Screen
        name={Screens.NavigationBottomTabs}
        component={MainBottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={Screens.ExpenseManage} component={ExpenseManage} />
    </Stack.Navigator>
  );
};
