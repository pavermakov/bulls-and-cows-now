import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

type OverlayProps = {
  children: ReactNode;
};

const Overlay = ({ children }: OverlayProps) => {
  return (
    <View style={s.root}>
      {children}
    </View>
  );
};

const s = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
});

export default Overlay;
