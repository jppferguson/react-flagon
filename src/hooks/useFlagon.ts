import createPersistedState from 'use-persisted-state';

import { defaultOptions } from '../options';
import { FlagonValueKey, FlagonValueRecords, FlagonValueTypes } from '../types';

const useFlagonState = createPersistedState(defaultOptions.localStorageKey);

const defaultFlagon: FlagonValueRecords = {};

type UseFlagonSetValue<T> = (key: FlagonValueKey) => (value: T) => void;
type UseFlagonGetValue<T> = (key: FlagonValueKey) => T;

type UseFlagonReturnValues = {
  setValue: UseFlagonSetValue<FlagonValueTypes>;
  getValue: UseFlagonGetValue<FlagonValueTypes>;
};

export const useFlagon = (
  initialFlagon: FlagonValueRecords = defaultFlagon,
): UseFlagonReturnValues => {
  const [flagonValues, setFlagonValues] = useFlagonState(initialFlagon);
  const getValue = key => flagonValues[key];
  const setValue = key => value =>
    setFlagonValues({ ...flagonValues, [key]: value });

  return { setValue, getValue };
};

export default useFlagon;
