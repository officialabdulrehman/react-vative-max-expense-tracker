import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { ExpenseManage } from "./src/screens/ExpenseManage/ExpenseManage.screen";
import { ExpensesAll } from "./src/screens/ExpensesAll/ExpensesAll.screen";
import { ExpensesRecent } from "./src/screens/ExpensesRecent/ExpensesRecent.screen";
import { Screens } from "./src/screens/Screens.enum";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const NavigationBottomTabs = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name={Screens.ExpensesRecent}
        component={ExpensesRecent}
      />
      <BottomTabs.Screen name={Screens.ExpensesAll} component={ExpensesAll} />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={Screens.ExpenseManage}
            component={ExpenseManage}
          />
          <Stack.Screen
            name={Screens.NavigationBottomTabs}
            component={NavigationBottomTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
