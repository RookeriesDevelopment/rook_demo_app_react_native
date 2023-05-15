import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useRookHCBody} from 'react-native-rook-health-connect';

export const BodyView = () => {
  const [date, setDate] = useState('');
  const [data, setData] = useState('{}');

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
      setData(JSON.stringify(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

  return (
    <View>
      <Text>body</Text>
      <TextInput
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
      <Text>{data}</Text>
    </View>
  );
};
