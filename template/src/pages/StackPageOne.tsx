import React from 'react';
import { Text, View } from '@fower/react-native';
import { Button } from '@ui-kitten/components';
import { Navigation } from '@/utils';

const StackPageOne:React.FC = () => {
  return <View flex={1} alignItems={'center'} justifyContent={'center'}>
    <View justifyContent={'center'} alignItems={'center'}>
      <Text textLG fontBold>StackPage</Text>
      <Button size="small" style={{ marginTop: 10 }} onPress={() => {
        Navigation.back();
      }}>
        go back without navigation props
      </Button>
    </View>
  </View>;
};

export default StackPageOne;
