import React, {FC, useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {useRookBodyTransmission} from 'react-native-rook-android-transmission';
import {useRookHCBody} from 'react-native-rook-health-connect';
import {styles} from '../styles/app';

type BodyTransmissionProps = {
  date: string;
  userID: string;
};

export const BodyTransmission: FC<BodyTransmissionProps> = ({date, userID}) => {
  const {getBodySummary} = useRookHCBody();
  const {enqueueBodySummary, clearQueuedBodySummaries, uploadBodySummaries} =
    useRookBodyTransmission({
      userID,
    });
  const [response, setResponse] = useState('');

  const handleQueue = async (): Promise<void> => {
    try {
      const summary = await getBodySummary(date);

      const resp = await enqueueBodySummary(summary);

      setResponse(`Enqueue result: ${resp}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleClearQueue = async (): Promise<void> => {
    try {
      const resp = await clearQueuedBodySummaries();
      setResponse(`Clear Enqueue result: ${resp}`);
    } catch (error) {
      setResponse(`${error}`);
    }
  };

  const handleUploadQueue = async (): Promise<void> => {
    try {
      setResponse('Loading...');
      const resp = await uploadBodySummaries();
      setResponse(`Upload Enqueue result: ${resp}`);
    } catch (error) {
      setResponse(`${error}`);
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
