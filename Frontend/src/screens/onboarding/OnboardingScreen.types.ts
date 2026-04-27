import type { ImageSourcePropType } from 'react-native';
import type { RootScreenProps } from '../../types/navigation.types';
export type OnboardingSlide = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
};

export type OnboardingScreenProps = RootScreenProps<'Onboarding'>;