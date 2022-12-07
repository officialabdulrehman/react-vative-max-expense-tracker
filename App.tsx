import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider, useSelector } from "react-redux";
import { ExpenseManage } from "./src/screens/ExpenseManage/ExpenseManage.screen";
import { ExpensesAll } from "./src/screens/ExpensesAll/ExpensesAll.screen";
import { ExpensesRecent } from "./src/screens/ExpensesRecent/ExpensesRecent.screen";
import { Screens } from "./src/screens/Screens.enum";
import { RootState, store } from "./src/store/redux/store";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const NavigationBottomTabs = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.backgroundColors.primary000,
        },
        headerTintColor: theme.colors.primary400,
        tabBarStyle: {
          backgroundColor: theme.backgroundColors.primary000,
        },
        tabBarActiveTintColor: theme.colors.primary400,
      }}
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

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={Screens.NavigationBottomTabs}
              component={NavigationBottomTabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Screens.ExpenseManage}
              component={ExpenseManage}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}
