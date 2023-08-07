/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {TextInput, ScrollView, View} from 'react-native';
import {styles} from '../styles/app';
import {useUser} from '../hooks/useUser';
import {SleepTransmission} from '../components/SleepTransmission';

export const SleepTransmissionView = () => {
  const [date, setDate] = useState('');
  const [userID, setUserID] = useState('');

  const {checkUserID} = useUser({user: 'example@gmail.com'});

  useEffect(() => {
    checkUserID()
      .then(id => setUserID(id))
      .catch(console.log);
  }, []);

  return (
    <ScrollView style={styles.bg}>
      <View style={styles.json}>
        <TextInput
          style={styles.whiteText}
          placeholderTextColor="white"
          placeholder="YYYY-MM-DD"
          onChangeText={text => setDate(text)}
        />
      </View>
      {userID && <SleepTransmission date={date} userID={userID} />}
    </ScrollView>
  );
};
