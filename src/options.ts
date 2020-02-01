export interface FlagonOptions {
  activationKey: string;
  localStorageKey: string;
  hasStyles: boolean;
  modalTitle: string;
  settings: FlagonSetting[];
}

export interface FlagonSetting {
  key: string;
  label: string;
  initialValue: boolean;
}

const defaultOptions: FlagonOptions = {
  activationKey: '`',
  localStorageKey: 'flagon',
  hasStyles: true,
  modalTitle: 'Flagon',
  settings: [
    {
      key: 'isDebug',
      label: 'Debug enabled',
      initialValue: false,
    },
    {
      key: 'isDark',
      label: 'Dark mode',
      initialValue: false,
    },
  ],
};

export const options: FlagonOptions = {
  ...defaultOptions,
};

export default options;
