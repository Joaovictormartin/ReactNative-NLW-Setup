import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { New } from "../screens/New";
import { Home } from "../screens/Home";
import { Habit } from "../screens/Habit";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={New} />
      <Screen name="habit" component={Habit} />
    </Navigator>
  );
};
