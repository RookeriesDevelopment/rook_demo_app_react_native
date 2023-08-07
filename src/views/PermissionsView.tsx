import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useRookHCPermissions} from 'react-native-rook-health-connect';
import JSONTree from 'react-native-json-tree';
import {styles} from '../styles/app';

export const PermissionsView = () => {
  const [data, setData] = useState<string | Map<string, any>>('');

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
    <View style={styles.bg}>
      <Text style={styles.title}>Permissions</Text>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Availability</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePermissions}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Has All Permissions</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestPermissions}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>requestAllPermissions</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleOpen}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>openHC</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={[styles.json]}>
        <JSONTree data={data} />
      </View>
    </View>
  );
};
