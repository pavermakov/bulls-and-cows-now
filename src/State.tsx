import React, { createContext, useEffect, ReactNode } from 'react';
import useSetState from '~/hooks/useSetState';
import useInitialRender from '~/hooks/useInitialRender';
import { saveStateToStorage } from '~/storage';

type ContextType = {
  isAnimationOn: boolean;
  toggleAnimation: () => void;
  refreshState: (nextState?: object) => void;
};

export const Context = createContext<ContextType>({
  isAnimationOn: true,
  toggleAnimation: () => {},
  refreshState: () => {}
});

type StateType = {
  children: ReactNode;
};

const State = ({ children }: StateType) => {
  const [state, setState] = useSetState({ isAnimationOn: true });
  const isInitialRender = useInitialRender();

  useEffect(() => {
    if (isInitialRender) return;

    saveStateToStorage(state);
  }, [state]);

  const toggleAnimation = () => {
    setState({ isAnimationOn: !state.isAnimationOn });
  };

  const refreshState = (nextState = {}) => {
    setState(nextState);
  };

  const value = {
    ...state,
    toggleAnimation,
    refreshState,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default State;
