import { useRef, useEffect, RefObject } from 'react';

const useInitialRender = () => {
  const isInitialRender: RefObject<boolean> = useRef(true);

  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  return isInitialRender.current;
};

export default useInitialRender;
