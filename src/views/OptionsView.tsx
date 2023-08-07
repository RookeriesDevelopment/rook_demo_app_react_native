import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Button} from 'react-native';

export const OptionsView = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Button
        title="Permissions"
        onPress={() => navigation.navigate('Permissions' as never, {} as never)}
      />
      <Button
        title="Body"
        onPress={() => navigation.navigate('Body' as never, {} as never)}
      />
      <Button
        title="Physical"
        onPress={() => navigation.navigate('Physical' as never, {} as never)}
      />
      <Button
        title="Sleep"
        onPress={() => navigation.navigate('Sleep' as never, {} as never)}
      />
      <Button
        title="Events"
        onPress={() => navigation.navigate('Events' as never, {} as never)}
      />
    </SafeAreaView>
  );
};
