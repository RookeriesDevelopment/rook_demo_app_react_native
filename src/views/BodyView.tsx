import React, {useState} from 'react';
import {Text, Button, TextInput, ScrollView} from 'react-native';
import {useRookHCBody} from 'react-native-rook-health-connect';
import JSONTree from 'react-native-json-tree';

import {styles} from '../styles/app';
import object2Map from '../utils/object2Map';

export const BodyView = () => {
  const [date, setDate] = useState('');
  const [data, setData] = useState<string | Map<string, any>>('');

  const {
    getBodySummaryLastDate,
    hasBodyPermissions,
    requestBodyPermissions,
    getBodySummary,
  } = useRookHCBody();

  const handlePress = async (): Promise<void> => {
    try {
      const result = await getBodySummaryLastDate();
      setData(result);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePermissions = async (): Promise<void> => {
    try {
      const result = await hasBodyPermissions();
      setData(`hasPermissions ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleRequestPermissions = async (): Promise<void> => {
    try {
      await requestBodyPermissions();
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleOpen = async (): Promise<void> => {
    try {
      const r = await getBodySummary(date);
      setData(object2Map(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

  return (
    <ScrollView style={styles.bg}>
      <Text style={styles.whiteText}>body</Text>
      <TextInput
        placeholder="YYYY-MM-DD"
        style={styles.whiteText}
        placeholderTextColor="white"
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
