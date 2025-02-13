import {StyleSheet} from 'react-native';
import {Size, Variant} from './types';
import {Colors} from '@constants';

const getVariantStyles = (variant: Variant, disabled: boolean) => {
  const variants = {
    primary: {
      backgroundColor: disabled ? Colors.neutral.grey400 : Colors.primary.main,
      borderWidth: 0,
    },
    secondary: {
      backgroundColor: disabled
        ? Colors.neutral.grey300
        : Colors.secondary.main,
      borderWidth: 0,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: disabled ? Colors.neutral.grey400 : Colors.primary.main,
    },
    ghost: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  };

  return variants[variant];
};

const getSizeStyles = (size: Size) => {
  const sizes = {
    small: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    medium: {
      paddingVertical: 12,
      paddingHorizontal: 24,
    },
    large: {
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
  };

  return sizes[size];
};

export const createButtonStyles = (
  variant: Variant,
  size: Size,
  disabled: boolean,
  fullWidth: boolean,
) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      width: fullWidth ? '100%' : 'auto',
      ...getVariantStyles(variant, disabled),
      ...getSizeStyles(size),
    },
    text: {
      color:
        variant === 'outline' || variant === 'ghost'
          ? disabled
            ? Colors.text.disabled
            : Colors.primary.main
          : Colors.text.inverse,
      fontWeight: '600',
      textAlign: 'center',
    },
    icon: {
      marginRight: 8,
    },
  });
