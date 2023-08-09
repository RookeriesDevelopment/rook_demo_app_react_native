/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useUser} from '../hooks/useUser';
import {styles as global} from '../styles/app';

export const UpdateUserID = () => {
  const [userID, setUserID] = useState('');
  const {checkUserID, updateUser} = useUser();

  useEffect(() => {
    checkUserID()
      .then(id => {
        setUserID(id);
      })
      .catch(e => ToastAndroid.show(`${e}`, ToastAndroid.LONG));
  }, []);

  const handleButtonPress = async (): Promise<void> => {
    if (userID.trim() === '') {
      ToastAndroid.show(
        'Enter a valid user ID (number or string)',
        ToastAndroid.LONG,
      );
      return;
    }

    await updateUser({user: userID});

    ToastAndroid.show('Changed successfully', ToastAndroid.LONG);
  };

  return (
    <View style={styles.mb}>
      <Text style={styles.label}>User ID:</Text>
      <View style={styles.json}>
        <TextInput
          style={styles.whiteText}
          placeholderTextColor="white"
          placeholder="Enter userID"
          value={userID}
          onChangeText={setUserID}
        />
      </View>
      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Change User ID</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  ...global,
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    marginHorizontal: '5%',
  },
  mb: {
    marginVertical: 10,
  },
});
