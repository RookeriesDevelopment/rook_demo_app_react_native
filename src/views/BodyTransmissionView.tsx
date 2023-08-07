/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';

import {styles} from '../styles/app';
import {BodyTransmission} from '../components/BodyTransmission';
import {useUser} from '../hooks/useUser';

export const BodyTransmissionView = () => {
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
      {userID && <BodyTransmission date={date} userID={userID} />}
    </ScrollView>
  );
};
