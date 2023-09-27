import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import StackNavigator from "./StackNavigation";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Feather from "@expo/vector-icons/Feather";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShwon: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabNar,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-bag"
              size={24}
              color={focused ? colors.primary : "#fff"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-cart"
              size={24}
              color={focused ? colors.primary : "#fff"}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabNar: {
    backgroundColor: colors.tertiary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
