import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Cloud from './Cloud';
import { getRandomItemFromList, getRandomNumberFromRange, renderTimes } from '~/utilities';
import files from '~/constants/files';
import device from '~/constants/device';
import { CLOUDS_COUNT } from '~/constants/config';

enum Direction {
  toEast,
  toWest
}

type Range = {
  min: number;
  max: number;
}

const Duration: Range = {
  min: 40000,
  max: 90000,
};

const Delay: Range = {
  min: 2000,
  max: 4000,
};

const Width: Range = {
  min: 90,
  max: 140,
};

const Top: Range = {
  min: 0,
  max: Math.round(device.height * 0.7),
};

const getStartingPoint = (direction: Direction, width: number): number => {
  return ({
    [Direction.toEast]: -width,
    [Direction.toWest]: device.width + width,
  })[direction];
};

const getShiftValue = (direction: Direction, width: number): number => {
  return ({
    [Direction.toEast]: device.width + width,
    [Direction.toWest]: -device.width - width * 2,
  })[direction];
};

const getCloudTemplate = () => {
  const id: number = Math.random();
  const source = getRandomItemFromList(files.clouds);
  const duration = getRandomNumberFromRange({ min: Duration.min, max: Duration.max, isInt: true });
  const delay = getRandomNumberFromRange({ min: Delay.min, max: Delay.max, isInt: true });
  const width = getRandomNumberFromRange({ min: Width.min, max: Width.max, isInt: true });

  const direction: Direction = id > 0.5 ? Direction.toWest : Direction.toEast;
  const left: number = getStartingPoint(direction, width);
  const top: number = getRandomNumberFromRange({ min: Top.min, max: Top.max, isInt: true });
  const shiftBy: number = getShiftValue(direction, width);

  return {
    id,
    width,
    source,
    duration,
    delay,
    top,
    left,
    shiftBy,
  };
};

const generateClouds = (count: number) => {
  return renderTimes(count, getCloudTemplate);
};

const Clouds = () => {
  const [clouds, setClouds] = useState(generateClouds(CLOUDS_COUNT));

  const recreateCloud = (id: number) => {
    setClouds((prevClouds) => {
      return [
        ...prevClouds.filter((item) => item.id !== id),
        getCloudTemplate(),
      ];
    });
  };

  return (
    <View style={s.root}>
      <View style={s.wrapper}>
        {clouds.map((item) => (
          <Cloud
            key={item.id}
            {...item}
            onAnimationComplete={() => recreateCloud(item.id)}
          />
        ))}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFill,
  },
  wrapper: {
    flex: 1,
    position: 'relative',
  },
});

export default Clouds;
