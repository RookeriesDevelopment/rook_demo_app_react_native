import React, {FC, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useRookHCTransmission} from 'react-native-rook-android-transmission';
import {useRookHCPhysical} from 'react-native-rook-health-connect';

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
  } = useRookHCTransmission({
    userID,
  });

  const [response, setResponse] = useState('{}');

  const handleQueue = async (): Promise<void> => {
    try {
      const summary = await getPhysicalSummary(date);

      const resp = await enqueuePhysicalSummary(summary);

      setResponse(`Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearQueue = async (): Promise<void> => {
    try {
      const resp = await clearQueuedPhysicalSummaries();
      setResponse(`Clear Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadQueue = async (): Promise<void> => {
    try {
      const resp = await uploadPhysicalSummaries();
      setResponse(`Upload Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQueueEvents = async (): Promise<void> => {
    try {
      const summary = await getPhysicalEvents(date);

      const resp = await enqueuePhysicalEvent(summary);

      setResponse(`Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearQueueEvents = async (): Promise<void> => {
    try {
      const resp = await clearQueuedPhysicalEvents();
      setResponse(`Clear Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadQueueEvents = async (): Promise<void> => {
    try {
      const resp = await uploadPhysicalEvents();
      setResponse(`Upload Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.blacked}>Sleep</Text>
      <Button title="Enqueue Summaries" onPress={handleQueue} />
      <Button title="Clear Enqueue Summaries" onPress={handleClearQueue} />
      <Button title="Upload Enqueue Summaries" onPress={handleUploadQueue} />
      <Button title="Enqueue events" onPress={handleQueueEvents} />
      <Button title="Clear Enqueue events" onPress={handleClearQueueEvents} />
      <Button title="Upload Enqueue events" onPress={handleUploadQueueEvents} />
      <Text style={styles.blacked}>{response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mb: {
    marginBottom: 10,
  },
  blacked: {
    color: 'black',
  },
});
