import React, {FC, useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {useRookSleepTransmission} from 'react-native-rook-android-transmission';
import {useRookHCSleep} from 'react-native-rook-health-connect';
import {styles} from '../styles/app';

type SleepTransmissionProps = {
  date: string;
  userID: string;
};

export const SleepTransmission: FC<SleepTransmissionProps> = ({
  date,
  userID,
}) => {
  const {getSleepSummary} = useRookHCSleep();
  const {enqueueSleepSummary, clearQueuedSleepSummaries, uploadSleepSummaries} =
    useRookSleepTransmission({
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
      setResponse('Loading...');
      const resp = await uploadSleepSummaries();
      setResponse(`Upload Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleQueue}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Enqueue</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleClearQueue}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Clear Enqueue</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleUploadQueue}>
        <View style={styles.buttonTouch}>
          <Text style={styles.buttonText}>Upload Enqueue</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.json}>
        <Text style={styles.whiteText}>{response}</Text>
      </View>
    </View>
  );
};
