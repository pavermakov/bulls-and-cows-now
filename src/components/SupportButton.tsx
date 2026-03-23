import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '~/constants/colors';

type SupportButtonProps = {
  title: string;
  onPress: () => void;
};

const SupportButton = ({ title, onPress }: SupportButtonProps) => {
  return (
    <TouchableOpacity
      style={s.root}
      onPress={onPress}
    >
      <Text style={s.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  root: {
    backgroundColor: colors.crimson,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SupportButton;
