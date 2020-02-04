export type FlagonSettingTypes = 'text' | 'checkbox';
export type FlagonSettingValues = boolean | string;

export interface FlagonSetting {
  key: string;
  label: string;
  type?: FlagonSettingTypes;
  initialValue: FlagonSettingValues;
}

export interface FlagonOptions {
  activationKey: string;
  localStorageKey: string;
  hasStyles: boolean;
  modalTitle: string;
  settings: FlagonSetting[];
}
