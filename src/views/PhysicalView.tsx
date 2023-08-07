import React, {useState} from 'react';
import {Text, Button, TextInput, ScrollView} from 'react-native';
import {useRookHCPhysical} from 'react-native-rook-health-connect';
import JSONTree from 'react-native-json-tree';
import object2Map from '../utils/object2Map';
import {styles} from '../styles/app';

export const PhysicalView = () => {
  const [data, setData] = useState<string | Map<string, any>>('');
  const [date, setDate] = useState('');

  const {
    getPhysicalSummaryLastDate,
    getPhysicalEventsLastDate,
    hasPhysicalPermissions,
    requestPhysicalPermissions,
    getPhysicalSummary,
    getPhysicalEvents,
  } = useRookHCPhysical();

  const handlePress = async (): Promise<void> => {
    try {
      const result = await getPhysicalSummaryLastDate();
      setData(result);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePressEvent = async (): Promise<void> => {
    try {
      const result = await getPhysicalEventsLastDate();
      setData(result);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePermissions = async (): Promise<void> => {
    try {
      const result = await hasPhysicalPermissions();
      setData(`hasPermissions ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleRequestPermissions = async (): Promise<void> => {
    try {
      await requestPhysicalPermissions();
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleOpen = async (): Promise<void> => {
    try {
      const r = await getPhysicalSummary(date);
      setData(object2Map(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleEventSummary = async (): Promise<void> => {
    try {
      const r = await getPhysicalEvents(date);
      setData(object2Map(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

  return (
    <ScrollView style={styles.bg}>
      <Text style={styles.whiteText}>Physical</Text>
      <TextInput
        style={styles.whiteText}
        placeholder="YYYY-MM-DD"
        placeholderTextColor="white"
        onChangeText={text => setDate(text)}
      />
      <Button title="last Date" onPress={handlePress} />
      <Button title="last Date event" onPress={handlePressEvent} />
      <Button title="hasAllPermissions" onPress={handlePermissions} />
      <Button
        title="requestAllPermissions"
        onPress={handleRequestPermissions}
      />
      <Button title="get summary" onPress={handleOpen} />
      <Button title="get summary event" onPress={handleEventSummary} />
      <JSONTree data={data} />
    </ScrollView>
  );
};
