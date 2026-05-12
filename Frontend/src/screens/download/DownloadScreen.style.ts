import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121221',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginBottom: 8,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#1F1F30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  list: {
    paddingTop: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1F1F30',
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
  },
  thumbWrap: {
    width: 96,
    height: 118,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 14,
  },
  thumbImage: {
    width: '100%',
    height: '100%',
  },
  thumbDownloading: {
    flex: 1,
    backgroundColor: '#0D0D14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressRingTrack: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  progressRingFill: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#FFFFFF',
    borderRightColor: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
    transform: [{ rotate: '-45deg' }],
  },
  pauseIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
  },
  genre: {
    color: '#9E9E9E',
    fontSize: 12,
    marginBottom: 6,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  metaIcon: {
    color: '#9E9E9E',
    fontSize: 12,
    marginRight: 6,
  },
  metaText: {
    color: '#9E9E9E',
    fontSize: 12,
  },
});
