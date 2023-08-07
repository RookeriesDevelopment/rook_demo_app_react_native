import React from 'react';
import {Link} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {styles} from '../styles/app';

export const OptionsView = () => {
  return (
    <SafeAreaView style={[styles.bg, styles.container]}>
      <Link to={{screen: 'Permissions'}} style={styles.button}>
        Permissions
      </Link>
      <Link to={{screen: 'Body'}} style={styles.button}>
        Body
      </Link>
      <Link to={{screen: 'Physical'}} style={styles.button}>
        Physical
      </Link>
      <Link to={{screen: 'Sleep'}} style={styles.button}>
        Sleep
      </Link>
      <Link to={{screen: 'Events'}} style={styles.button}>
        Events
      </Link>
    </SafeAreaView>
  );
};
