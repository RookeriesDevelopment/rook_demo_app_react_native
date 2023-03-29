import React, {FC, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useRookHCTransmission} from 'rook_transmission';
import {useRookHCBody} from 'rook_health_connect';

type BodyTransmissionProps = {
  date: string;
  userID: string | number;
};

export const BodyTransmission: FC<BodyTransmissionProps> = ({date, userID}) => {
  const {getBodySummary} = useRookHCBody();
  const {enqueueBodySummary, clearQueuedBodySummaries, uploadBodySummaries} =
    useRookHCTransmission({
      userID,
    });

  const [response, setResponse] = useState('{}');

  const handleQueue = async (): Promise<void> => {
    try {
      const summary = await getBodySummary(date);

      const resp = await enqueueBodySummary(summary);

      setResponse(`Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearQueue = async (): Promise<void> => {
    try {
      const resp = await clearQueuedBodySummaries();
      setResponse(`Clear Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadQueue = async (): Promise<void> => {
    try {
      const resp = await uploadBodySummaries();
      setResponse(`Upload Enqueue result: ${resp}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.blacked}>Transmission</Text>
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
