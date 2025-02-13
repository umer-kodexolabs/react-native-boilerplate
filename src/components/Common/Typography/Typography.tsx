import {Text, TextStyle} from 'react-native';
import React from 'react';
import {createTypographyStyles} from './styles';

interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'caption';
  color?: string;
  align?: 'left' | 'center' | 'right';
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
}

const Typography = ({
  variant = 'body1',
  color,
  align = 'left',
  style,
  children,
}: TypographyProps) => {
  const styles = createTypographyStyles(color);

  return (
    <Text
      style={[
        styles[variant],
        {
          textAlign: align,
        },
        style || {},
      ]}>
      {children}
    </Text>
  );
};

export {Typography};
