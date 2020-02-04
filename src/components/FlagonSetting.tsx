import React, { FC } from 'react';

import { FlagonSettingInputTypes, FlagonValueTypes } from '../types';

interface Props {
  id: string;
  isDev: boolean;
  key?: string;
  label: string;
  type?: FlagonSettingInputTypes;
  setValue: (value: FlagonValueTypes) => void;
  value: FlagonValueTypes;
}

export const FlagonSetting: FC<Props> = ({
  id,
  isDev,
  label,
  type = 'text',
  value,
  setValue,
}: Props) => {
  // Bail early if not in development
  if (!isDev) return null;
  return (
    <div>
      {type === 'checkbox' && (
        <label htmlFor={id}>
          <input
            checked={!!value}
            id={id}
            onChange={(e: any): void => setValue(e.currentTarget.checked)}
            type="checkbox"
          />
          <span> {label}</span>
        </label>
      )}
      {type === 'text' && (
        <div>
          <div>
            <label htmlFor={id}>{label}</label>
          </div>
          <input
            id={id}
            onChange={(e: any): void => setValue(e.currentTarget.value)}
            type="text"
            value={String(value)}
          />
        </div>
      )}
    </div>
  );
};

export default FlagonSetting;
