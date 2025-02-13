import {View, Text, Alert} from 'react-native';
import React from 'react';
import {Icon} from '@icons';
import {CustomButton, Button, Flex, Typography} from '@components/common';
import {Colors} from '@constants';

const Test = () => {
  return (
    <View>
      <Icon name="google" size={54} />
      <Icon name="eye-off-outline" />
      <Icon name="eye-outline" />
      <Text>
        EditApp.tsx to change this screen and then come back to see your edits.
      </Text>
      <CustomButton />
      <Button
        variant="primary"
        onPress={() => Alert.alert('Action', 'Logout')}
        fullWidth
        textStyle={{color: Colors.text.primary}}>
        Logout
      </Button>

      <Flex
        backgroundColor={Colors.neutral.grey200}
        justify="center"
        align="center"
        style={{
          borderRadius: 8,
          flex: 1,
          rowGap: 12,
          marginTop: 32,
          padding: 16,
        }}>
        <Button
          // variant="primary"
          onPress={() => Alert.alert('Action', 'Logout')}
          fullWidth
          textStyle={{color: Colors.text.primary}}>
          Button111
        </Button>
        <Button
          // variant="primary"
          onPress={() => Alert.alert('Action', 'Logout')}
          textStyle={{color: Colors.text.primary}}>
          Button222
        </Button>
      </Flex>
    </View>
  );
};

export {Test};
