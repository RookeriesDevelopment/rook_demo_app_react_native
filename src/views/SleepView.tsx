/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useRookHCSleep} from 'rook_health_connect';
import {SleepTransmission} from '../components/SleepTransmission';
import {useUser} from '../hooks/useUser';

export const SleepView = () => {
  const [date, setDate] = useState('');
  const [data, setData] = useState('{}');
  const [userID, setUserID] = useState('');

  const {checkUserID} = useUser({user: 'example@gmail.com'});

  const {
    getSleepSummaryLastDate,
    hasSleepPermissions,
    requestSleepPermissions,
    getSleepSummary,
  } = useRookHCSleep();

  useEffect(() => {
    checkUserID()
      .then(id => setUserID(id))
      .catch(console.log);
  }, []);

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
      setData(JSON.stringify(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

  return (
    <View>
      <Text>sleep</Text>
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

      <SleepTransmission date={date} userID={userID} />
    </View>
  );
};
