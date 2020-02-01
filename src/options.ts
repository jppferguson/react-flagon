export interface FlagonOptions {
  activationKey: string;
  localStorageKey: string;
  hasStyles: boolean;
  modalTitle: string;
  settings: FlagonSetting[];
}

export type FlagonSettingTypes = 'text' | 'checkbox';
export type FlagonSettingValues = boolean | string;

export interface FlagonSetting {
  key: string;
  label: string;
  type?: FlagonSettingTypes;
  initialValue: FlagonSettingValues;
}

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

// export const options: FlagonOptions = {
//   ...defaultOptions,
// };

export default defaultOptions;
