import React, { FC } from 'react';

import { useFlagon } from '../hooks/useFlagon';
import { defaultOptions, FlagonOptions } from '../options';
import { FlagonSetting } from './FlagonSetting';

interface Props {
  isDev: boolean;
  options?: FlagonOptions;
}

export const FlagonSettings: FC<Props> = ({
  isDev,
  options = { ...defaultOptions },
}: Props) => {
  const opts = { ...defaultOptions, ...options };
  const { getValue, setValue } = useFlagon();
  // Bail early if not in development
  if (!isDev) return null;
  return (
    <>
      {opts.settings.map(setting => (
        <FlagonSetting
          key={setting.key}
          id={setting.key}
          isDev={isDev}
          label={setting.label}
          setValue={setValue(setting.key)}
          type={setting.type}
          value={getValue(setting.key)}
        />
      ))}
    </>
  );
};

export default FlagonSettings;
