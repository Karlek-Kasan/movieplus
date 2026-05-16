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
    marginBottom: 24,
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
  backWrap: {
    width: 42,
  },
  centerWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 6,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },
  text: {
    color: '#A7ABC0',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginHorizontal: 10,
  },
  primaryButton: {
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#00D2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#06131B',
    fontSize: 16,
    fontWeight: '900',
  },
  secondaryButton: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#22263C',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  secondaryButtonText: {
    color: '#00D2FF',
    fontSize: 14,
    fontWeight: '900',
  },
});

