import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141327',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 28,
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
    fontWeight: '700',
  },
  topTitle: {
    flex: 1,
    marginLeft: 14,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  poster: {
    width: '100%',
    height: 320,
    borderRadius: 24,
    overflow: 'hidden',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 10,
  },
  ratingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D3147',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  star: {
    color: '#FFAC33',
    fontSize: 13,
    marginRight: 8,
  },
  ratingText: {
    color: '#FFAC33',
    fontSize: 13,
    fontWeight: '800',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 32,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 18,
  },
  metaText: {
    color: '#A7ABC0',
    fontSize: 13,
  },
  metaDot: {
    color: '#59607A',
    fontSize: 12,
    marginHorizontal: 10,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  storyText: {
    color: '#A7ABC0',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 22,
  },
  primaryButton: {
    height: 52,
    backgroundColor: '#00D2FF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#06131B',
    fontSize: 16,
    fontWeight: '900',
  },
  secondaryButton: {
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#40455D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#00D2FF',
    fontSize: 16,
    fontWeight: '900',
  },
});

