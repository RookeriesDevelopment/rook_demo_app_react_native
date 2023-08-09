/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {styles} from '../styles/app';
import {PhysicalTransmission} from '../components/PhysicalTransmission';
import {useUser} from '../hooks/useUser';

export const PhysicalTransmissionView = () => {
  const [date, setDate] = useState('');
  const [userID, setUserID] = useState('');

  const {checkUserID} = useUser();

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
      {userID && <PhysicalTransmission date={date} userID={userID} />}
    </ScrollView>
  );
};
