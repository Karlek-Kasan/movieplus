import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native";

export type OnboardingSlide = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
};

export type OnboardingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};