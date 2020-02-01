import createPersistedState from 'use-persisted-state';

interface Flagon {
  isDebug: boolean;
}

const useFlagonState = createPersistedState('flagon');

const defaultFlagon = {
  isDebug: false,
};

export const useDebug = (
  initialFlagon: Flagon = defaultFlagon,
): {
  isDebug: boolean;
  setIsDebug: (isDebug: boolean) => void;
} => {
  const [debug, setDebug] = useFlagonState(initialFlagon);
  const { isDebug } = debug;

  return {
    isDebug,
    setIsDebug: (d = !isDebug): void => setDebug({ ...debug, isDebug: d }),
  };
};

export default useDebug;
