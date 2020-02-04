export type FlagonValueKey = string;
export type FlagonSettingInputTypes = 'text' | 'checkbox';
export type FlagonValueTypes = boolean | string;
export type FlagonValueRecords = Record<FlagonValueKey, FlagonValueTypes>;

export interface FlagonSetting {
  key: string;
  label: string;
  type?: FlagonSettingInputTypes;
  initialValue: FlagonValueTypes;
}

export interface FlagonOptions {
  activationKey: string;
  localStorageKey: string;
  hasStyles: boolean;
  modalTitle: string;
  settings: FlagonSetting[];
}
