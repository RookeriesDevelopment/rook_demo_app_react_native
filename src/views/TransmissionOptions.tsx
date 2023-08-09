import React from 'react';
import {Link} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../styles/app';
import {UpdateUserID} from '../components/UpdateUserID';

export const TransmissionOptionsView = () => {
  return (
    <SafeAreaView style={[styles.bg]}>
      <UpdateUserID />

      <View style={styles.json}>
        <Text style={styles.title}>Transmission Options</Text>
      </View>

      <Link to={{screen: 'Permissions'}} style={styles.button}>
        Permissions
      </Link>
      <Link to={{screen: 'Body Transmission'}} style={styles.button}>
        Body
      </Link>
      <Link to={{screen: 'Physical Transmission'}} style={styles.button}>
        Physical
      </Link>
      <Link to={{screen: 'Sleep Transmission'}} style={styles.button}>
        Sleep
      </Link>
      <Link to={{screen: 'Events Transmission'}} style={styles.button}>
        Events
      </Link>
    </SafeAreaView>
  );
};
