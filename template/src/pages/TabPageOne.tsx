import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from '@fower/react-native';
import { Divider, Button } from '@ui-kitten/components';


export default function TabPageOne(props: NativeStackScreenProps<any>) {
  return <View flex={1} alignItems={'center'} justifyContent={'center'}>
    <View justifyContent={'center'} alignItems={'center'}>
      <Text textLG fontBold>TabPageOne</Text>
      <Divider />
      <Button size="small" style={{ marginTop: 10 }} onPress={() => {
        props.navigation.push('StackPageOne');
      }}>
        navigate to other page
      </Button>
    </View>
  </View>;
}
