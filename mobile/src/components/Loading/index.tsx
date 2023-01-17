

import { ActivityIndicator, View } from "react-native";

import styles from './styles'

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#7C3AED"/>
    </View>
  );
}