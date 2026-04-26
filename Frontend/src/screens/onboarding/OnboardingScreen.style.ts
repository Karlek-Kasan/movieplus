import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1B2A",
  },

  // Image area
  imageContainer: {
    width: width,
    height: height * 0.55,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    position: "relative",
  },
  image: {
    width: width * 0.7,
    height: height * 0.5,
    borderRadius: 24,
    zIndex: 1,
  },

  // Decorative dots (slide 1)
  dotDecoOrange: {
    position: "absolute",
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#FF6B2B",
  },
  dotDecoBlue: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#12CDD9",
  },

  // Slide 2 side cards
  sideCard: {
    position: "absolute",
    width: width * 0.25,
    height: height * 0.38,
    borderRadius: 16,
    overflow: "hidden",
    opacity: 0.6,
  },
  sideCardLeft: {
    left: 8,
    top: "10%",
  },
  sideCardRight: {
    right: 8,
    top: "10%",
  },
  sideCardImage: {
    width: "100%",
    height: "100%",
  },

  // Slide 3 info badges
  badgeContainer: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
        zIndex: 10,
  },
  badge: {
    backgroundColor: "#1A2B3C",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignItems: "center",
    gap: 2,
  },
  badgeLabel: {
    color: "#8A9BB0",
    fontSize: 11,
    fontWeight: "400",
  },
  badgeValue: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  badgeIcon: {
    fontSize: 13,
  },

  // Decorative dot positions
dotDecoOrange1: { top: 40, left: 40 },
dotDecoOrange2: { bottom: 60, right: 50 },
dotDecoBlue1: { top: 80, left: 60 },
dotDecoBlue2: { top: 60, right: 70 },
dotDecoBlue3: { bottom: 80, left: 80 },

// Badge icons
badgeIconStar: { color: "#FFD700" },
badgeIconClock: { color: "#12CDD9" },
  // Bottom content
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 16,
  },
  description: {
    color: "#8A9BB0",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
  },

  // Footer
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingBottom: 36,
    paddingTop: 16,
  },

  // Pagination dots
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  paginationDot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8A9BB0",
  },
  paginationDotActive: {
    width: 24,
    backgroundColor: "#12CDD9",
  },
  paginationDotInactive: {
    width: 8,
  },

  // Next button
  nextButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#12CDD9",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#12CDD9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  nextButtonWrapper: {
    position: "relative",
  },
  nextButtonShadow: {
    position: "absolute",
    width: 64,
    height: 64,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#12CDD940",
    top: -4,
    left: -4,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
});