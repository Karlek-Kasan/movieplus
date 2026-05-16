import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141327',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 26,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22263C',
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  topTitle: {
    flex: 1,
    marginLeft: 14,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: '#22263C',
  },
  actionButtonText: {
    color: '#00D2FF',
    fontSize: 13,
    fontWeight: '900',
  },
  queryText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 6,
  },
  countText: {
    color: '#A7ABC0',
    fontSize: 13,
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#22263C',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 14,
  },
  poster: {
    width: '100%',
    height: 170,
  },
  cardBody: {
    padding: 12,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  genreText: {
    color: '#8D90A6',
    fontSize: 13,
  },
  ratingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D3147',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  star: {
    color: '#FFAC33',
    fontSize: 12,
    marginRight: 6,
  },
  ratingText: {
    color: '#FFAC33',
    fontWeight: '900',
    fontSize: 13,
  },
  emptyWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  emptyText: {
    color: '#A7ABC0',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
});

