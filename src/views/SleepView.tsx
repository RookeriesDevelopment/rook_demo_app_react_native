import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {useRookHCSleep} from 'react-native-rook-health-connect';
import {styles} from '../styles/app';
import JSONTree from 'react-native-json-tree';
import object2Map from '../utils/object2Map';

export const SleepView = () => {
  const [date, setDate] = useState('');

  const [data, setData] = useState<string | Map<string, any>>('');

  const {
    getSleepSummaryLastDate,
    hasSleepPermissions,
    requestSleepPermissions,
    getSleepSummary,
  } = useRookHCSleep();

  const handlePress = async (): Promise<void> => {
    try {
      const result = await getSleepSummaryLastDate();
      setData(result);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePermissions = async (): Promise<void> => {
    try {
      const result = await hasSleepPermissions();
      setData(`hasPermissions ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleRequestPermissions = async (): Promise<void> => {
    try {
      await requestSleepPermissions();
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleOpen = async (): Promise<void> => {
    try {
      const r = await getSleepSummary(date);
      setData(object2Map(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

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

      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>last Date</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePermissions}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>hasAllPermissions</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestPermissions}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>requestAllPermissions</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleOpen}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>get summary</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.json}>
        <JSONTree data={data} />
      </View>
    </ScrollView>
  );
};
