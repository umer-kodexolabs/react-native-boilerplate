import {Colors} from '@constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 8,
    color: Colors.text.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.neutral.grey300,
    borderRadius: 8,
    backgroundColor: Colors.background.primary,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 48,
    color: Colors.text.primary,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 8,
  },
  error: {
    color: Colors.status.error,
    fontSize: 12,
    marginTop: 4,
  },
  errorInput: {
    borderColor: Colors.status.error,
  },
});
