import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Decorations from '~/components/Decorations';

type ScreenProps = {
  children: ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
  return (
    <>
      <Decorations />

      <SafeAreaView style={s.wrapper}>
          {children}
      </SafeAreaView>
    </>
  );
};

const s = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFill,
  },
});

export default Screen;
