import { StyleSheet } from 'react-native';

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

  searchBar: {
    height: 52,
    backgroundColor: '#22263C',
    borderRadius: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchIcon: {
    color: '#8B8FA3',
    fontSize: 17,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 0,
  },

  categoriesRow: {
    paddingVertical: 6,
    marginBottom: 18,
  },
  categoryChip: {
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  categoryChipActive: {
    backgroundColor: '#22263C',
  },
  categoryChipText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
  },
  categoryChipTextActive: {
    color: '#00D2FF',
    opacity: 1,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },

  todayCard: {
    flexDirection: 'row',
    backgroundColor: '#1E2236',
    borderRadius: 18,
    padding: 12,
    marginBottom: 26,
  },
  todayPoster: {
    width: 92,
    height: 128,
    borderRadius: 14,
  },
  todayBody: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'center',
  },
  todayBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#FF8A00',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  todayRatingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D3147',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  todayStar: {
    color: '#FFAC33',
    marginRight: 4,
    fontSize: 12,
  },
  todayRatingText: {
    color: '#FFAC33',
    fontWeight: '700',
    fontSize: 12,
  },
  todayTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  metaText: {
    color: '#A7ABC0',
    fontSize: 12,
  },
  metaDot: {
    color: '#59607A',
    marginHorizontal: 8,
    fontSize: 12,
  },
  certPill: {
    color: '#00D2FF',
    borderWidth: 1,
    borderColor: '#00D2FF',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 11,
    fontWeight: '700',
  },
  genresText: {
    color: '#7F859D',
    fontSize: 12,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  seeAll: {
    color: '#00D2FF',
    fontSize: 14,
    fontWeight: '600',
  },

  recommendRow: {
    paddingBottom: 8,
  },
  recommendCard: {
    width: 156,
    backgroundColor: '#22263C',
    borderRadius: 14,
    marginRight: 12,
    overflow: 'hidden',
  },
  recommendPoster: {
    width: '100%',
    height: 150,
  },
  recommendRating: {
    position: 'absolute',
    top: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D3147',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  recommendStar: {
    color: '#FFAC33',
    marginRight: 4,
    fontSize: 12,
  },
  recommendRatingText: {
    color: '#FFAC33',
    fontWeight: '700',
    fontSize: 12,
  },
  recommendBody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  recommendTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  recommendGenre: {
    color: '#8D90A6',
    marginTop: 2,
    fontSize: 12,
  },
});

