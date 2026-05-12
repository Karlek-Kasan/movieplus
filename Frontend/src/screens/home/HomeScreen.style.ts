import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141327',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  profileWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 14,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 33,
    fontWeight: '700',
    lineHeight: 39,
  },
  subtitle: {
    color: '#9A9AA7',
    fontSize: 24,
    marginTop: 2,
  },
  favoriteButton: {
    width: 43,
    height: 43,
    borderRadius: 21.5,
    backgroundColor: '#23243B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteIcon: {
    fontSize: 19,
    color: '#FF4B55',
    lineHeight: 19,
  },
  searchRow: {
    backgroundColor: '#22263C',
    borderRadius: 18,
    height: 52,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchIcon: {
    color: '#8B8FA3',
    fontSize: 17,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 18,
    paddingVertical: 0,
  },
  filterDivider: {
    width: 1,
    height: 20,
    backgroundColor: '#40455D',
    marginHorizontal: 12,
  },
  filterButton: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    color: '#CFD3E5',
    fontSize: 16,
  },
  carouselItem: {
    width: width - 40,
    borderRadius: 24,
    overflow: 'hidden',
    height: 195,
    marginRight: 14,
    justifyContent: 'flex-end',
  },
  carouselImage: {
    ...StyleSheet.absoluteFillObject,
  },
  carouselOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.24)',
  },
  carouselTextWrap: {
    paddingHorizontal: 18,
    paddingBottom: 16,
  },
  carouselTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 26,
  },
  carouselSubtitle: {
    color: '#E6E7EB',
    fontSize: 14,
    marginTop: 2,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#35687D',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 25,
    borderRadius: 5,
    backgroundColor: '#00D2FF',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 31,
    fontWeight: '700',
  },
  seeAll: {
    color: '#00D2FF',
    fontSize: 28,
    fontWeight: '500',
  },
  categoriesList: {
    marginBottom: 22,
  },
  categoriesWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 22,
  },
  categoryItem: {
    minWidth: 92,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginRight: 12,
  },
  categoryItemWrapped: {
    marginBottom: 12,
  },
  categoryItemActive: {
    backgroundColor: '#22263C',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 22,
    maxWidth: 116,
  },
  categoryTextActive: {
    color: '#00D2FF',
  },
  popularCard: {
    width: 163,
    backgroundColor: '#22263C',
    borderRadius: 14,
    marginRight: 12,
    overflow: 'hidden',
  },
  poster: {
    width: '100%',
    height: 170,
  },
  ratingBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#2D3147',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#FFAC33',
    marginRight: 4,
    fontSize: 13,
  },
  ratingText: {
    color: '#FFAC33',
    fontWeight: '700',
    fontSize: 13,
  },
  cardBody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  cardGenre: {
    color: '#8D90A6',
    marginTop: 2,
    fontSize: 15,
  },
});