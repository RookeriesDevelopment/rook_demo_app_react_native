import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useRookHCPhysical} from 'rook_health_connect';

export const PhysicalView = () => {
  const [data, setData] = useState('{}');
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
      setData(JSON.stringify(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleEventSummary = async (): Promise<void> => {
    try {
      const r = await getPhysicalEvents(date);
      setData(JSON.stringify(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

  return (
    <View>
      <Text>Physical</Text>
      <TextInput
        placeholder="YYYY-MM-DD"
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
      <Text>{data}</Text>
    </View>
  );
};
