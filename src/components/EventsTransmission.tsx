import React, {FC, useState} from 'react';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {useRookEventsTransmission} from 'react-native-rook-android-transmission';
import {useRookHCEvents} from 'react-native-rook-health-connect';
import {styles as Global} from '../styles/app';

type BodyTransmissionProps = {
  date: string;
  userID: string;
};

export const EventsTransmission: FC<BodyTransmissionProps> = ({
  date,
  userID,
}) => {
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
  const {
    enqueueBloodGlucoseEvent,
    clearQueuedBloodGlucoseEvents,
    uploadBloodGlucoseEvents,
    enqueueBloodPressureEvent,
    clearQueuedBloodPressureEvents,
    uploadBloodPressureEvents,
    enqueueBodyMetricsEvent,
    clearQueuedBodyMetricsEvents,
    uploadBodyMetricsEvents,
    enqueueHeartRateEvent,
    clearQueuedHeartRateEvents,
    uploadHeartRateEvents,
    enqueueHydrationEvent,
    clearQueuedHydrationEvents,
    uploadHydrationEvents,
    enqueueMoodEvent,
    clearQueuedMoodEvents,
    uploadMoodEvents,
    enqueueNutritionEvent,
    clearQueuedNutritionEvents,
    uploadNutritionEvents,
    enqueueOxygenationEvent,
    clearQueuedOxygenationEvents,
    uploadOxygenationEvents,
    enqueueStressEvent,
    clearQueuedStressEvents,
    uploadStressEvents,
    enqueueTemperatureEvent,
    clearQueuedTemperatureEvents,
    uploadTemperatureEvents,
  } = useRookEventsTransmission({userID});

  const [response, setResponse] = useState('{}');

  const handleBGQ = async (): Promise<void> => {
    try {
      const result = await getBodyBloodGlucoseEvents(date);

      const r = await enqueueBloodGlucoseEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearBGQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedBloodGlucoseEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadBGQ = async (): Promise<void> => {
    try {
      const r = await uploadBloodGlucoseEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleBPQ = async (): Promise<void> => {
    try {
      const result = await getBodyBloodPressureEvents(date);

      const r = await enqueueBloodPressureEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearBPQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedBloodPressureEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadBPQ = async (): Promise<void> => {
    try {
      const r = await uploadBloodPressureEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleBMQ = async (): Promise<void> => {
    try {
      const result = await getBodyMetricsEvents(date);

      const r = await enqueueBodyMetricsEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearBMQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedBodyMetricsEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadBMQ = async (): Promise<void> => {
    try {
      const r = await uploadBodyMetricsEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleHRQ = async (): Promise<void> => {
    try {
      const result = await getBodyHeartRateEvents(date);

      const r = await enqueueHeartRateEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearHRQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedHeartRateEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadHRQ = async (): Promise<void> => {
    try {
      const r = await uploadHeartRateEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };
  const handleHQ = async (): Promise<void> => {
    try {
      const result = await getBodyHydrationEvents(date);

      const r = await enqueueHydrationEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearHQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedHydrationEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadHQ = async (): Promise<void> => {
    try {
      const r = await uploadHydrationEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleMQ = async (): Promise<void> => {
    try {
      const result = await getBodyMoodEvents(date);

      const r = await enqueueMoodEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearMQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedMoodEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadMQ = async (): Promise<void> => {
    try {
      const r = await uploadMoodEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleNQ = async (): Promise<void> => {
    try {
      const result = await getBodyNutritionEvents(date);

      const r = await enqueueNutritionEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearNQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedNutritionEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadNQ = async (): Promise<void> => {
    try {
      const r = await uploadNutritionEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleOQ = async (): Promise<void> => {
    try {
      const result = await getBodyOxygenationEvents(date);

      const r = await enqueueOxygenationEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearOQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedOxygenationEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadOQ = async (): Promise<void> => {
    try {
      const r = await uploadOxygenationEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleSQ = async (): Promise<void> => {
    try {
      const result = await getPhysicalStressEvents(date);

      const r = await enqueueStressEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearSQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedStressEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadSQ = async (): Promise<void> => {
    try {
      const r = await uploadStressEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleTQ = async (): Promise<void> => {
    try {
      const result = await getBodyTemperatureEvents(date);

      const r = await enqueueTemperatureEvent(result);

      setResponse(`Enqueue: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearTQ = async (): Promise<void> => {
    try {
      const r = await clearQueuedTemperatureEvents();

      setResponse(`clear: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadTQ = async (): Promise<void> => {
    try {
      const r = await uploadTemperatureEvents();

      setResponse(`Upload: ${r}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  return (
    <View style={styles.gridContainer}>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleBGQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Blood Glucose</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearBGQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Clear Enqueue Blood Glucose</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadBGQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Upload Enqueue Blood Glucose</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleBPQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Blood Pressure</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearBPQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Clear Enqueue Blood Pressure</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadBPQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Upload Enqueue Blood Pressure</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleBMQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Body Metrics Pressure</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearBMQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>
              Clear Enqueue Body Metrics Pressure
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadBMQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>
              Upload Enqueue Body Metrics Pressure
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleHRQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Heart Pressure</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearHRQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Clear Enqueue Heart Pressure</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadHRQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Upload Enqueue Heart Pressure</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleHQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Hydration Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearHQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Clear Enqueue Hydration Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadHQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>
              Upload Enqueue Hydration Event
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleMQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Mood Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearMQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Clear Enqueue Mood Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadMQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Upload Enqueue Mood Event</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleNQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Nutrition Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearNQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Clear Enqueue Nutrition Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadNQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>
              Upload Enqueue Nutrition Event
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleOQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Oxygenation Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearOQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>
              Clear Enqueue Oxygenation Event
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadOQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>
              Upload Enqueue Oxygenation Event
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleSQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Stress Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearSQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Clear Enqueue Stress Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadSQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Upload Enqueue Stress Event</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={handleTQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>Enqueue Temperature Event</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearTQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>
              Clear Enqueue Temperature Event
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleUploadTQ}>
          <View style={styles.cell}>
            <Text style={styles.buttonText}>
              Upload Enqueue Temperature Event
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Text style={styles.whiteText}>{response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ...Global,
  mb: {
    marginBottom: 10,
  },
  blacked: {
    color: 'black',
  },
  gridContainer: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 120, // Adjust the width and height as needed
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
});
