import React, {useState} from 'react';
import {Text, Button, ScrollView, TextInput} from 'react-native';
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
      console.log(error);
    }
  };

  const handlePressureEvent = async (): Promise<void> => {
    try {
      const result = await getBodyBloodPressureEvents(date);
      setData(object2Map(result));
    } catch (error) {
      console.log(error);
    }
  };

  const handleBodyMetricsEvent = async (): Promise<void> => {
    try {
      const result = await getBodyMetricsEvents(date);
      setData(object2Map(result));
    } catch (error) {
      console.log(error);
    }
  };

  const handleBodyHeartRateEvents = async (): Promise<void> => {
    try {
      const result = await getBodyHeartRateEvents(date);
      setData(object2Map(result));
    } catch (error) {
      console.log(error);
    }
  };

  const handleBodyHydrationEvents = async (): Promise<void> => {
    try {
      const result = await getBodyHydrationEvents(date);
      setData(object2Map(result));
    } catch (error) {
      console.log(error);
    }
  };

  const handleBodyMoodEvents = async (): Promise<void> => {
    try {
      const result = await getBodyMoodEvents(date);
      setData(object2Map(result));
    } catch (error) {
      console.log(error);
    }
  };

  const handleBodyNutritionEvents = async (): Promise<void> => {
    try {
      const result = await getBodyNutritionEvents(date);
      setData(object2Map(result));
    } catch (error) {
      console.log(error);
    }
  };

  const handleBodyOxygenationEvents = async (): Promise<void> => {
    try {
      const result = await getBodyOxygenationEvents(date);
      setData(object2Map(result));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhysicalStressEvents = async (): Promise<void> => {
    try {
      const result = await getPhysicalStressEvents(date);
      setData(object2Map(result));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhysicalTemperatureEvents = async (): Promise<void> => {
    try {
      const result = await getBodyTemperatureEvents(date);
      setData(object2Map(result));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.bg}>
      <Text>Events</Text>
      <TextInput
        placeholder="YYYY-MM-DD"
        onChangeText={text => setDate(text)}
      />
      <Button title="Blood Glucose Event" onPress={handlePress} />
      <Button title="Blood Pressure Event" onPress={handlePressureEvent} />
      <Button title="Body Metrics Event" onPress={handleBodyMetricsEvent} />
      <Button
        title="Body HeartRate Event"
        onPress={handleBodyHeartRateEvents}
      />
      <Button title="Hydration Events" onPress={handleBodyHydrationEvents} />
      <Button title="Mood Events" onPress={handleBodyMoodEvents} />
      <Button title="Nutrition Events" onPress={handleBodyNutritionEvents} />
      <Button
        title="Oxygenation Events"
        onPress={handleBodyOxygenationEvents}
      />
      <Button title="Stress Events" onPress={handlePhysicalStressEvents} />
      <Button
        title="Temperature Events"
        onPress={handlePhysicalTemperatureEvents}
      />
      <JSONTree data={data} />
    </ScrollView>
  );
};
