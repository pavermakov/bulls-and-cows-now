import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Overlay from '~/components/Overlay';
import Tooltip from '~/components/Tooltip';
import Farmer from '~/components/Farmer';
import CloseButton from '~/components/CloseButton';

type FinishProps = {
  value: string;
  startTime: number;
  endTime: number;
  attempts: number;
  onRestart: () => void;
};

const formatTime = (startTime: number, endTime: number): string => {
  const duration: number = endTime - startTime;
  const minutes: number = Math.floor(duration / 60000);
  const seconds: number = Math.round((duration % 60000) / 1000);

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Finish = ({ value, startTime, endTime, attempts, onRestart }: FinishProps) => {
  return (
    <Overlay>
      <View style={s.wrapper}>
        <Farmer />

        <View style={s.information}>
          <Tooltip style={s.tooltip}>
            <ScrollView contentContainerStyle={s.area}>
              <Text style={s.title}>
                You have guessed <Text style={s.number}>{value}</Text> in:
              </Text>

              <Text style={s.subtitle}>
                {attempts} attempts
              </Text>

              <Text style={s.subtitle}>
                {formatTime(startTime, endTime)}
              </Text>
            </ScrollView>
          </Tooltip>
        </View>

        <View style={s.controls}>
          <CloseButton
            title="play again"
            onPress={onRestart}
          />
        </View>
      </View>
    </Overlay>
  );
};

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltip: {
    marginTop: 15,
    minWidth: '100%',
  },
  title: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    textAlign: 'center',
  },
  area: {
    padding: 15,
  },
  information: {
    flex: 1,
  },
  number: {
    color: '#0074D9',
    fontWeight: 'bold',
  },
  controls: {
    marginTop: 15,
  },
});

export default Finish;
