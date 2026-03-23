import React from 'react';
import State from '~/State';
import Preloader from '~/components/Preloader';
import Game from '~/components/Game';

export default () => {
  return (
    <State>
        <Preloader>
          <Game />
        </Preloader>
      </State>
  );
};
