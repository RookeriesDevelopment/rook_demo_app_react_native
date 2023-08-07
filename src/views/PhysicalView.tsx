import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {useRookHCPhysical} from 'react-native-rook-health-connect';
import JSONTree from 'react-native-json-tree';
import object2Map from '../utils/object2Map';
import {styles} from '../styles/app';

export const PhysicalView = () => {
  const [data, setData] = useState<string | Map<string, any>>('');
  const [date, setDate] = useState('');

  const {
    getPhysicalSummaryLastDate,
    getPhysicalEventsLastDate,
    hasPhysicalPermissions,
    requestPhysicalPermissions,
    getPhysicalSummary,
    getPhysicalEvents,
  } = useRookHCPhysical();

  const handlePress = async (): Promise<void> => {
    try {
      const result = await getPhysicalSummaryLastDate();
      setData(result);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePressEvent = async (): Promise<void> => {
    try {
      const result = await getPhysicalEventsLastDate();
      setData(result);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePermissions = async (): Promise<void> => {
    try {
      const result = await hasPhysicalPermissions();
      setData(`hasPermissions ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleRequestPermissions = async (): Promise<void> => {
    try {
      await requestPhysicalPermissions();
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleOpen = async (): Promise<void> => {
    try {
      const r = await getPhysicalSummary(date);
      setData(object2Map(r));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleEventSummary = async (): Promise<void> => {
    try {
      const r = await getPhysicalEvents(date);
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
          placeholder="YYYY-MM-DD"
          placeholderTextColor="white"
          onChangeText={text => setDate(text)}
        />
      </View>

      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>last Date</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePressEvent}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>last Date event</Text>
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

      <TouchableWithoutFeedback onPress={handleEventSummary}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>get summary event</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.json}>
        <JSONTree data={data} />
      </View>
    </ScrollView>
  );
};
