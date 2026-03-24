import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import State from '~/State';
import Preloader from '~/components/Preloader';
import Game from '~/components/Game';

export default () => {
  return (
    <SafeAreaProvider>
      <State>
        <Preloader>
          <Game />
        </Preloader>
      </State>
    </SafeAreaProvider>
  );
};
