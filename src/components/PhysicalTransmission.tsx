import React, {FC, useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {useRookPhysicalTransmission} from 'react-native-rook-android-transmission';
import {useRookHCPhysical} from 'react-native-rook-health-connect';
import {styles} from '../styles/app';

type PhysicalTransmissionProps = {
  date: string;
  userID: string | number;
};

export const PhysicalTransmission: FC<PhysicalTransmissionProps> = ({
  date,
  userID,
}) => {
  const {getPhysicalSummary, getPhysicalEvents} = useRookHCPhysical();
  const {
    enqueuePhysicalSummary,
    clearQueuedPhysicalSummaries,
    uploadPhysicalSummaries,
    enqueuePhysicalEvent,
    clearQueuedPhysicalEvents,
    uploadPhysicalEvents,
  } = useRookPhysicalTransmission({
    userID,
  });

  const [response, setResponse] = useState('');

  const handleQueue = async (): Promise<void> => {
    try {
      const summary = await getPhysicalSummary(date);

      const resp = await enqueuePhysicalSummary(summary);

      setResponse(`Enqueue result: ${resp}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearQueue = async (): Promise<void> => {
    try {
      const resp = await clearQueuedPhysicalSummaries();
      setResponse(`Clear Enqueue result: ${resp}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadQueue = async (): Promise<void> => {
    try {
      setResponse('Loading...');
      const resp = await uploadPhysicalSummaries();
      setResponse(`Upload Enqueue result: ${resp}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleQueueEvents = async (): Promise<void> => {
    try {
      const summary = await getPhysicalEvents(date);

      const resp = await enqueuePhysicalEvent(summary);

      setResponse(`Enqueue result: ${resp}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearQueueEvents = async (): Promise<void> => {
    try {
      const resp = await clearQueuedPhysicalEvents();
      setResponse(`Clear Enqueue result: ${resp}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadQueueEvents = async (): Promise<void> => {
    try {
      setResponse('Loading...');
      const resp = await uploadPhysicalEvents();
      setResponse(`Upload Enqueue result: ${resp}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleQueue}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Enqueue Summaries</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleClearQueue}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Clear Enqueue Summaries</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleUploadQueue}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Upload Enqueue Summaries</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleQueueEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Enqueue events</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleClearQueueEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Clear Enqueue events</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleUploadQueueEvents}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Upload Enqueue events</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.json}>
        <Text style={styles.whiteText}>{response}</Text>
      </View>
    </View>
  );
};
