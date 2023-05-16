/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {BodyTransmission} from '../components/BodyTransmission';
import {useUser} from '../hooks/useUser';
import {useRookHCBody} from 'react-native-rook-health-connect';

export const BodyView = () => {
  const [date, setDate] = useState('');
  const [data, setData] = useState('{}');
  const [userID, setUserID] = useState('');

  const {checkUserID} = useUser({user: 'example@gmail.com'});

  const {
    getBodySummaryLastDate,
    hasBodyPermissions,
    requestBodyPermissions,
    getBodySummary,
  } = useRookHCBody();

  useEffect(() => {
    checkUserID()
      .then(id => setUserID(id))
      .catch(console.log);
  }, []);

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
    <SafeAreaView>
      <View style={styles.mb}>
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
        <Text style={styles.blacked}>{data}</Text>
      </View>

      {userID && <BodyTransmission date={date} userID={userID} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mb: {
    marginBottom: 10,
  },
  blacked: {
    color: 'black',
  },
});
