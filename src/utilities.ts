import { Platform } from 'react-native';
import { MAX_INPUT_VALUE } from '~/constants/config';

type Insets = { top: number; left: number };

export const measure = (el, insets: Insets = { top: 0, left: 0 }) => {
  return new Promise((resolve) => {
    el.measureInWindow((x, y, width, height) => {
      const offsetX = Platform.OS === 'android' ? insets.left : 0;
      const offsetY = Platform.OS === 'android' ? insets.top : 0;
      resolve({ x: x - offsetX, y: y - offsetY, width, height });
    });
  });
};

export const delay = (timeout = 0) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const times = (n: number, iterator): number[] => {
  const accum: number[] = Array(Math.max(0, n));

  for (let i: number = 0; i < n; i += 1) {
    accum[i] = iterator.call();
  }

  return accum;
};

export const getEmptyUserInput = (): string[] => {
  return [...Array(MAX_INPUT_VALUE)].map(() => '');
};

export const getSecretValue = (max = 4) => {
  let nums = [...Array(10).keys()];
  const result: string[] = [];

  times(max, () => {
    const randomNum = nums[Math.floor(Math.random() * nums.length)];
    result.push(String(randomNum));

    nums = nums.filter((item) => item !== randomNum);
  });

  return result;
};

type Turn = {
  bulls: number;
  cows: number;
  isMatched: boolean;
}

export const compareResults = (user = [], ai = []): Turn => {
  if (user.join('') === ai.join('')) {
    return { isMatched: true, bulls: user.length, cows: user.length };
  }

  let bulls = 0;
  let cows = 0;

  // check for bulls
  ai.forEach((item, index) => {
    if (item === user[index]) {
      bulls += 1;
    }
  });

  // checked for cows
  user.forEach((item) => {
    if (ai.includes(item)) {
      cows += 1;
    }
  });

  return { bulls, cows, isMatched: false };
};

export const getRandomItemFromList = (list = []) => {
  return list[Math.floor(Math.random() * list.length)];
};

export const getRandomNumberFromRange = ({ min = 1, max = 10, isInt = false }): number => {
  return Number((Math.random() * (max - min) + min).toFixed(isInt ? 0 : 1));
};

export const renderTimes = (n: number, render) => {
  return [...Array(n)].map(render);
};
