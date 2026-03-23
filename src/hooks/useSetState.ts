import { useState } from 'react';

type UseSetStateReturn<T> = [T, (newState: Partial<T>) => void];

const useSetState = <T extends object>(initialState: T): UseSetStateReturn<T> => {
  const [state, regularSetState] = useState<T>(initialState);

  const setState = (newState: Partial<T>) => {
    regularSetState((prevState) => ({
      ...prevState,
      ...newState,
    }) as T);
  };

  return [state, setState];
};

export default useSetState;
