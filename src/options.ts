import { FlagonOptions } from './types';

export const defaultOptions: FlagonOptions = {
  activationKey: '`',
  localStorageKey: 'flagon',
  hasStyles: true,
  modalTitle: 'Flagon',
  settings: [
    {
      key: 'isDebug',
      label: 'Debug enabled',
      initialValue: false,
      type: 'checkbox',
    },
  ],
};

export default defaultOptions;
