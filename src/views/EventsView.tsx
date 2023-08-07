import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {useRookHCEvents} from 'react-native-rook-health-connect';
import JSONTree from 'react-native-json-tree';
import object2Map from '../utils/object2Map';
import {styles} from '../styles/app';

export const EventsView = () => {
  const {
    getBodyBloodGlucoseEvents,
    getBodyBloodPressureEvents,
    getBodyMetricsEvents,
    getBodyHeartRateEvents,
    getBodyHydrationEvents,
    getBodyMoodEvents,
    getBodyNutritionEvents,
    getBodyOxygenationEvents,
    getPhysicalStressEvents,
    getBodyTemperatureEvents,
  } = useRookHCEvents();
  const [data, setData] = useState<string | Map<string, any>>('');
  const [date, setDate] = useState('');

  const handlePress = async (): Promise<void> => {
    try {
      const result = await getBodyBloodGlucoseEvents(date);
      setData(object2Map(result));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePressureEvent = async (): Promise<void> => {
    try {
      const result = await getBodyBloodPressureEvents(date);
      setData(object2Map(result));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleBodyMetricsEvent = async (): Promise<void> => {
    try {
      const result = await getBodyMetricsEvents(date);
      setData(object2Map(result));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleBodyHeartRateEvents = async (): Promise<void> => {
    try {
      const result = await getBodyHeartRateEvents(date);
      setData(object2Map(result));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleBodyHydrationEvents = async (): Promise<void> => {
    try {
      const result = await getBodyHydrationEvents(date);
      setData(object2Map(result));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleBodyMoodEvents = async (): Promise<void> => {
    try {
      const result = await getBodyMoodEvents(date);
      setData(object2Map(result));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleBodyNutritionEvents = async (): Promise<void> => {
    try {
      const result = await getBodyNutritionEvents(date);
      setData(object2Map(result));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleBodyOxygenationEvents = async (): Promise<void> => {
    try {
      const result = await getBodyOxygenationEvents(date);
      setData(object2Map(result));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePhysicalStressEvents = async (): Promise<void> => {
    try {
      const result = await getPhysicalStressEvents(date);
      setData(object2Map(result));
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handlePhysicalTemperatureEvents = async (): Promise<void> => {
    try {
      const result = await getBodyTemperatureEvents(date);
      setData(object2Map(result));
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
          <Text style={styles.buttonText}>Blood Glucose Event</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePressureEvent}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Blood Pressure Event</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleBodyMetricsEvent}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Body Metrics Event</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleBodyHeartRateEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Body HeartRate Event</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleBodyHydrationEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Hydration Events</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleBodyMoodEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Mood Events</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleBodyNutritionEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Nutrition Events</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleBodyOxygenationEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Oxygenation Events</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePhysicalStressEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Stress Events</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePhysicalTemperatureEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Temperature Events</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.json}>
        <JSONTree data={data} />
      </View>
    </ScrollView>
  );
};
