import { useEffect, ReactNode } from 'react';
import SplashScreen from 'react-native-splash-screen';
import useGlobalState from '~/hooks/useGlobalState';
import { getStateFromStorage } from '~/storage';

type PreloaderProps = {
  children: ReactNode;
};

const Preloader = ({ children }: PreloaderProps) => {
  const { refreshState } = useGlobalState();

  const init = async (): Promise<void> => {
    const state = await getStateFromStorage();

    refreshState(state);
    SplashScreen.hide();
  };

  useEffect(() => {
    init();
  }, []);

  return children;
};

export default Preloader;
