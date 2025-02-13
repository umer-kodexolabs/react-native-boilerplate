import {
  View,
  TextStyle,
  TextInputProps,
  ViewStyle,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Typography} from '../Typography';
import {Colors} from '@constants';
import {styles} from './styles';

interface TextInputFieldProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
}

const TextInputField = ({
  label,
  error,
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  secureTextEntry,
  ...props
}: TextInputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, containerStyle]}>
          {label && (
            <Typography
              variant="body2"
              style={[styles.label, labelStyle || {}]}>
              {label}
            </Typography>
          )}
          <View
            style={[
              styles.inputContainer,
              !!error && styles.errorInput,
              isFocused && {borderColor: Colors.primary.main},
            ]}>
            {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
            <TextInput
              {...props}
              style={[styles.input, inputStyle || {}]}
              placeholderTextColor={Colors.text.disabled}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              secureTextEntry={secureTextEntry}
            />
            {rightIcon && (
              <TouchableOpacity style={styles.icon}>
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
          {error && (
            <Typography
              variant="caption"
              style={[styles.error, errorStyle || {}]}>
              {error}
            </Typography>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export {TextInputField};
