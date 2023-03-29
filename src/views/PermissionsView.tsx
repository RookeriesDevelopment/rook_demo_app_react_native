import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useRookHCPermissions} from 'rook_health_connect';

export const PermissionsView = () => {
  const [data, setData] = useState('');

  const {
    checkAvailability,
    hasAllPermissions,
    requestPermissions,
    openHealthConnectSettings,
  } = useRookHCPermissions();

  const handlePress = async (): Promise<void> => {
    try {
      const result = await checkAvailability();
      setData(result);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePermissions = async (): Promise<void> => {
    try {
      const result = await hasAllPermissions();
      setData(`has permissions ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleRequestPermissions = async (): Promise<void> => {
    try {
      await requestPermissions();
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleOpen = async (): Promise<void> => {
    try {
      await openHealthConnectSettings();
    } catch (error) {
      setData(`${error}`);
    }
  };

  return (
    <View>
      <Text>Hola</Text>
      <Button title="Availability" onPress={handlePress} />
      <Button title="hasAllPermissions" onPress={handlePermissions} />
      <Button
        title="requestAllPermissions"
        onPress={handleRequestPermissions}
      />
      <Button title="openHC" onPress={handleOpen} />
      <Text>{data}</Text>
    </View>
  );
};
