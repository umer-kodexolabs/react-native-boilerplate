import {Colors} from '@constants';
import {StyleSheet} from 'react-native';

export const createTypographyStyles = (color?: string) =>
  StyleSheet.create({
    h1: {
      fontSize: 32,
      fontWeight: '700',
      color: color || Colors.text.primary,
    },
    h2: {
      fontSize: 28,
      fontWeight: '700',
      color: color || Colors.text.primary,
    },
    h3: {
      fontSize: 24,
      fontWeight: '600',
      color: color || Colors.text.primary,
    },
    h4: {
      fontSize: 20,
      fontWeight: '600',
      color: color || Colors.text.primary,
    },
    h5: {
      fontSize: 18,
      fontWeight: '500',
      color: color || Colors.text.primary,
    },
    h6: {
      fontSize: 16,
      fontWeight: '500',
      color: color || Colors.text.primary,
    },
    body1: {
      fontSize: 16,
      color: color || Colors.text.primary,
    },
    body2: {
      fontSize: 14,
      color: color || Colors.text.primary,
    },
    caption: {
      fontSize: 12,
      color: color || Colors.text.secondary,
    },
  });
