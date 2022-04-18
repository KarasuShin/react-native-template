import React from 'react';
import { Text, View } from '@fower/react-native';
import state from '@/state';
import { useSnapshot } from 'valtio';
import { Button } from '@ui-kitten/components';


export default function TabPageTwo() {
  const snap = useSnapshot(state);

  return <View flex={1} alignItems={'center'} justifyContent={'center'}>
    <View justifyContent={'center'} alignItems={'center'}>
      <Text textLG fontBold>TabPageTwo</Text>
      <Text text2XL mt2>{snap.count}</Text>
      <Button onPress={() => state.count++} appearance="ghost">ADD</Button>
    </View>
  </View>;
}

