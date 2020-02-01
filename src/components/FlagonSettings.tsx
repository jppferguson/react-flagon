import React, { FC } from 'react';

import { useFlagon } from '../hooks/useFlagon';
import { options } from '../options';
import { FlagonSetting } from './FlagonSetting';

interface Props {
  isDev: boolean;
}

export const FlagonSettings: FC<Props> = ({ isDev }: Props) => {
  const { getValue, setValue } = useFlagon();
  // Bail early if not in development
  if (!isDev) return null;
  return (
    <>
      {options.settings.map(setting => (
        <FlagonSetting
          key={setting.key}
          id={setting.key}
          isDev={isDev}
          label={setting.label}
          setValue={setValue(setting.key)}
          value={getValue(setting.key)}
        />
      ))}
    </>
  );
};

export default FlagonSettings;
