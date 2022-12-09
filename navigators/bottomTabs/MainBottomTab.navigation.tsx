import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { IconButton } from "../../src/components/UI/IconButton/IconButton";
import { ExpensesAll } from "../../src/screens/ExpensesAll/ExpensesAll.screen";
import { ExpensesRecent } from "../../src/screens/ExpensesRecent/ExpensesRecent.screen";
import { Screens } from "../../src/screens/Screens.enum";
import { RootState } from "../../src/store/redux/store";

const BottomTabs = createBottomTabNavigator();

export const MainBottomTabNavigator = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return (
    <BottomTabs.Navigator
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
            onPress={() => {
              // navigation.navigate(Screens.ExpenseManage, {});
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name={Screens.ExpensesRecent}
        component={ExpensesRecent}
        options={{
          title: "Recent",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="archive" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={Screens.ExpensesAll}
        component={ExpensesAll}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
