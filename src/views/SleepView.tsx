import React, {useState} from 'react';
import {Text, Button, TextInput, ScrollView} from 'react-native';
import {useRookHCSleep} from 'react-native-rook-health-connect';
import {styles} from '../styles/app';
import JSONTree from 'react-native-json-tree';
import object2Map from '../utils/object2Map';

export const SleepView = () => {
  const [date, setDate] = useState('');
  const [data, setData] = useState<string | Map<string, any>>('');

  const {
    getSleepSummaryLastDate,
    hasSleepPermissions,
    requestSleepPermissions,
    getSleepSummary,
  } = useRookHCSleep();

  const handlePress = async (): Promise<void> => {
    try {
      const result = await getSleepSummaryLastDate();
      setData(result);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePermissions = async (): Promise<void> => {
    try {
      const result = await hasSleepPermissions();
      setData(`hasPermissions ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleRequestPermissions = async (): Promise<void> => {
    try {
      await requestSleepPermissions();
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleOpen = async (): Promise<void> => {
    try {
      const r = await getSleepSummary(date);
      setData(object2Map(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

  return (
    <ScrollView style={styles.bg}>
      <Text style={styles.whiteText}>sleep</Text>
      <TextInput
        style={styles.whiteText}
        placeholderTextColor="white"
        placeholder="YYYY-MM-DD"
        onChangeText={text => setDate(text)}
      />
      <Button title="last Date" onPress={handlePress} />
      <Button title="hasAllPermissions" onPress={handlePermissions} />
      <Button
        title="requestAllPermissions"
        onPress={handleRequestPermissions}
      />
      <Button title="get summary" onPress={handleOpen} />
      <JSONTree data={data} />
    </ScrollView>
  );
};
