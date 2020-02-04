import createPersistedState from 'use-persisted-state';

import { defaultOptions } from '../options';
import { FlagonValueKey, FlagonValueTypes } from '../types';

const useFlagonState = createPersistedState(defaultOptions.localStorageKey);

type UseFlagonKeySetValue<T> = (key: FlagonValueKey) => (value: T) => void;
type UseFlagonKeyReturnValues<T> = [T, UseFlagonKeySetValue<T>];

export const useFlagonKey = <T extends FlagonValueTypes>(
  key: string,
  initialValue?: T,
): UseFlagonKeyReturnValues<T> => {
  const [flagonValues, setFlagonValues] = useFlagonState(initialValue);
  const value = flagonValues[key] || initialValue;
  const setValue = newValue =>
    setFlagonValues({ ...flagonValues, [key]: newValue });

  return [value, setValue];
};

export default useFlagonKey;
