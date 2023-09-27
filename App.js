import { NavigationContainer } from "@react-navigation/native";
import fonts from "./src/global/fonts";
import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
