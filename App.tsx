import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { RootNavigator } from "./src/navigators/Root.navigation";
import { store } from "./src/store/redux/store";

// import { SERVER_URL } from "react-native-dotenv";
// console.log("SERVER_URL => ", SERVER_URL);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RootNavigator />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}
