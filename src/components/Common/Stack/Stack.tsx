import {View, Text} from 'react-native';
import React from 'react';
import {Flex, FlexProps} from '../Flex';

interface StackProps extends Omit<FlexProps, 'direction'> {
  spacing?: number;
  direction?: 'vertical' | 'horizontal';
}

const Stack = ({
  children,
  direction = 'vertical',
  spacing = 0,
  ...flexProps
}: StackProps) => {
  return (
    <Flex
      direction={direction === 'vertical' ? 'column' : 'row'}
      gap={spacing}
      {...flexProps}>
      {children}
    </Flex>
  );
};

export {Stack};
