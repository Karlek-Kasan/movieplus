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
    fontWeight: '900',
  },
  topTitle: {
    flex: 1,
    marginLeft: 14,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  helperText: {
    color: '#A7ABC0',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 14,
  },
  input: {
    height: 52,
    backgroundColor: '#22263C',
    borderRadius: 16,
    paddingHorizontal: 14,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 10,
  },
  actorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  actorPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22263C',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  actorImage: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 10,
  },
  actorName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
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

