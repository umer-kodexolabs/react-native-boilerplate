import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  TextStyle,
  ViewStyle,
  TextInput,
} from 'react-native';
import {createButtonStyles} from './styles';
import {Colors} from '@constants';
import {Typography} from '../Typography';

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type Size = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  fullWidth = false,
  onPress,
  style,
  textStyle,
  children,
}: ButtonProps) => {
  const styles = createButtonStyles(variant, size, disabled, fullWidth);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.container, style]}
      activeOpacity={0.7}>
      {loading ? (
        <ActivityIndicator color={Colors.text.inverse} />
      ) : (
        <>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
          <Typography variant="body1" style={[styles.text, textStyle || {}]}>
            {children}
          </Typography>
          {rightIcon && (
            <View style={[styles.icon, {marginLeft: 8, marginRight: 0}]}>
              {rightIcon}
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export {Button};
