import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ViewToken,
} from "react-native";
import { styles } from "./OnboardingScreen.style";
import type { OnboardingScreenProps, OnboardingSlide } from "./OnboardingScreen.types";

const { width } = Dimensions.get("window");

const slides: OnboardingSlide[] = [
  {
    id: "1",
    image: { uri: "https://picsum.photos/seed/onboard1/400/600" },
    title: "Lorem ipsum dolor sit amet consectetur esplicit",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.",
  },
  {
    id: "2",
    image: { uri: "https://picsum.photos/seed/onboard2/400/600" },
    title: "Lorem ipsum dolor sit amet consectetur esplicit",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.",
  },
  {
    id: "3",
    image: { uri: "https://picsum.photos/seed/onboard3/400/600" },
    title: "Lorem ipsum dolor sit amet consectetur esplicit",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.",
  },
];

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index ?? 0);
      }
    }
  ).current;

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: activeIndex + 1 });
    } else {
      navigation.replace("LoginScreen"); 
    }
  };

  const renderSlide = ({ item, index }: { item: OnboardingSlide; index: number }) => (
    <View style={{ width }}>
      {/* Image area */}
      <View style={styles.imageContainer}>
        {/* Slide 2 side cards */}
        {index === 1 && (
          <>
            <View style={[styles.sideCard, styles.sideCardLeft]}>
              <Image
                source={{ uri: "https://picsum.photos/seed/side1/200/400" }}
                style={styles.sideCardImage}
              />
            </View>
            <View style={[styles.sideCard, styles.sideCardRight]}>
              <Image
                source={{ uri: "https://picsum.photos/seed/side2/200/400" }}
                style={styles.sideCardImage}
              />
            </View>
          </>
        )}

        
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>

      {/* Text content */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1B2A" />

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />

      {/* Footer */}
      <View style={styles.footer}>
        {/* Pagination dots */}
        <View style={styles.paginationContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex
                  ? styles.paginationDotActive
                  : styles.paginationDotInactive,
              ]}
            />
          ))}
        </View>

        {/* Next button */}
        <TouchableOpacity
          style={styles.nextButtonWrapper}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <View style={styles.nextButtonShadow} />
          <View style={styles.nextButton}>
            <Text style={styles.nextButtonText}>›</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;