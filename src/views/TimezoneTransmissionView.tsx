/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import {styles} from '../styles/app';
import {useUser} from '../hooks/useUser';
import {TimezoneTransmission} from '../components/TimezoneTransmission';

export const TimezoneTransmissionView = () => {
  const [userID, setUserID] = useState('');

  const {checkUserID} = useUser();

  useEffect(() => {
    checkUserID()
      .then(id => setUserID(id))
      .catch(console.log);
  }, []);

  return (
    <ScrollView style={styles.bg}>
      {userID && <TimezoneTransmission userID={userID} />}
    </ScrollView>
  );
};
