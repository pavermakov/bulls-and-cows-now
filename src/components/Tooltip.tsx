import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import colors from '~/constants/colors';

type TooltipProps = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

const Tooltip = ({ style, children }: TooltipProps) => {
  return (
    <View style={[s.root, style]}>
      <View style={s.arrow} />

      <View style={s.wrapper}>
        {children}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  root: {
    position: 'relative',
    width: '100%',
    borderColor: 'grey',
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  wrapper: {
    backgroundColor: colors.white,
    borderRadius: 12,
    minHeight: 50,
  },
  arrow: {
    position: 'absolute',
    left: 50,
    transform: [{ rotate: '45deg' }, { translateY: -20 }],
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 5,
  },
});

export default Tooltip;
