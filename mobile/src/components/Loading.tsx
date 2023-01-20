import { View, ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
};
