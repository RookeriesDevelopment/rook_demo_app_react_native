import React from 'react';
import {SafeAreaView} from 'react-native';
import {Link} from '@react-navigation/native';
import {styles} from '../styles/app';

export const HomeView = () => {
  return (
    <SafeAreaView style={[styles.bg, styles.container]}>
      <Link to={{screen: 'Extraction'}} style={styles.button}>
        Extraction
      </Link>
      <Link to={{screen: 'Transmission'}} style={styles.button}>
        Transmission
      </Link>
    </SafeAreaView>
  );
};
