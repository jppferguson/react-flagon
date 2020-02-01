import createPersistedState from 'use-persisted-state';

import { defaultOptions } from '../options';

const useFlagonState = createPersistedState(defaultOptions.localStorageKey);

const defaultFlagon: FlagonValues = {};

type FlagonKey = string;
type FlagonValue = boolean;
type FlagonValues = Record<FlagonKey, FlagonValue>;
type UseFlagonSetValue = (key: FlagonKey) => (value: FlagonValue) => void;
type UseFlagonGetValue = (key: FlagonKey) => FlagonValue;

type UseFlagonReturnValues = {
  setValue: UseFlagonSetValue;
  getValue: UseFlagonGetValue;
};

export const useFlagon = (
  initialFlagon: FlagonValues = defaultFlagon,
): UseFlagonReturnValues => {
  const [flagonValues, setFlagonValues] = useFlagonState(initialFlagon);

  return {
    setValue: key => value =>
      setFlagonValues({ ...flagonValues, [key]: value }),
    getValue: key => flagonValues[key],
  };
};

export default useFlagon;
