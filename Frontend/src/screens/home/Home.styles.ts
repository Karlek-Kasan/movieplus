import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const colors = {
  background: '#101229',
  surface: '#1B1F3B',
  surfaceSoft: '#232846',
  textPrimary: '#F7F8FC',
  textSecondary: '#8C92A8',
  accent: '#10D6FF',
  mutedDot: '#2E7088',
  danger: '#FF4B55',
  star: '#FFA928',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const radius = {
  sm: 10,
  md: 14,
  lg: 18,
  xl: 22,
  pill: 999,
};

export const typography = {
  heading: 20,
  section: 24,
  body: 16,
  sub: 15,
  meta: 14,
};

export const shadows = {
  card: {
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 7,
  },
};

export const carouselWidth = width - spacing.xl * 2;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 126,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
    marginBottom: spacing.xxl,
  },
  profileBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: spacing.md,
  },
  helloText: {
    color: colors.textPrimary,
    fontSize: typography.heading,
    lineHeight: 26,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
    marginTop: 2,
  },
  favoriteButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#212544',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
  },
  favoriteIcon: {
    color: colors.danger,
    fontSize: 18,
  },
  searchWrap: {
    height: 60,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xxl,
  },
  icon: {
    color: colors.textSecondary,
    fontSize: 22,
  },
  searchPlaceholder: {
    flex: 1,
    marginLeft: spacing.md,
    color: colors.textSecondary,
    fontSize: 18,
  },
  searchDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#3D4262',
    marginRight: spacing.md,
  },
  filterButton: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItem: {
    width: carouselWidth,
    height: 198,
    borderRadius: radius.xl,
    overflow: 'hidden',
    marginRight: spacing.md,
    justifyContent: 'flex-end',
  },
  carouselImage: {
    ...StyleSheet.absoluteFillObject,
  },
  carouselOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
  },
  carouselTextWrap: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  carouselTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
  },
  carouselSubtitle: {
    color: '#E4E8F3',
    fontSize: 11,
    marginTop: spacing.xs,
  },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.xxl,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.mutedDot,
    marginHorizontal: 5,
  },
  dotActive: {
    width: 28,
    borderRadius: radius.pill,
    backgroundColor: colors.accent,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: typography.section,
    lineHeight: 30,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  categoriesList: {
    marginBottom: spacing.xxl,
  },
  categoryTab: {
    minWidth: 94,
    height: 44,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    paddingHorizontal: spacing.md,
  },
  categoryTabActive: {
    backgroundColor: colors.surface,
  },
  categoryText: {
    maxWidth: 95,
    color: colors.textPrimary,
    fontSize: typography.sub,
  },
  categoryTextActive: {
    color: colors.accent,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  seeAll: {
    color: colors.accent,
    fontSize: 17,
    fontWeight: '600',
  },
  popularCard: {
    width: 141,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceSoft,
    overflow: 'hidden',
    marginRight: spacing.md,
  },
  poster: {
    width: '100%',
    height: 172,
  },
  ratingBadge: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    borderRadius: radius.pill,
    backgroundColor: '#323857',
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: colors.star,
    marginRight: 4,
    fontSize: 12,
  },
  rating: {
    color: colors.star,
    fontWeight: '700',
    fontSize: 12,
  },
  popularMeta: {
    paddingHorizontal: spacing.sm,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  popularTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  popularGenre: {
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 2,
  },
});
