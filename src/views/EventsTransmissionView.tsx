/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {styles} from '../styles/app';
import {EventsTransmission} from '../components/EventsTransmission';
import {useUser} from '../hooks/useUser';

export const EventsTransmissionView = () => {
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
          placeholder="YYYY-MM-DD"
          placeholderTextColor="white"
          onChangeText={text => setDate(text)}
        />
      </View>

      {userID && <EventsTransmission date={date} userID={userID} />}
    </ScrollView>
  );
};
