import React, {FC, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useRookHCTransmission} from 'react-native-rook-android-transmission';
import {useRookHCSleep} from 'react-native-rook-health-connect';

type SleepTransmissionProps = {
  date: string;
  userID: string | number;
};

export const SleepTransmission: FC<SleepTransmissionProps> = ({
  date,
  userID,
}) => {
  const {getSleepSummary} = useRookHCSleep();
  const {enqueueSleepSummary, clearQueuedSleepSummaries, uploadSleepSummaries} =
    useRookHCTransmission({
      userID,
    });

  const [response, setResponse] = useState('{}');

  const handleQueue = async (): Promise<void> => {
    try {
      const summary = await getSleepSummary(date);

      const resp = await enqueueSleepSummary(summary);

      setResponse(`Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearQueue = async (): Promise<void> => {
    try {
      const resp = await clearQueuedSleepSummaries();
      setResponse(`Clear Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadQueue = async (): Promise<void> => {
    try {
      const resp = await uploadSleepSummaries();
      setResponse(`Upload Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.blacked}>Sleep</Text>
      <Button title="Enqueue" onPress={handleQueue} />
      <Button title="Clear Enqueue" onPress={handleClearQueue} />
      <Button title="Upload Enqueue" onPress={handleUploadQueue} />
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
