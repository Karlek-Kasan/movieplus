import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { styles } from "./SplashScreen.styles";
import type { SplashScreenProps } from "./SplashScreen.types";

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1B2A" />
      <Text style={styles.title}>Movie Plus</Text>
    </View>
  );
};

export default SplashScreen;