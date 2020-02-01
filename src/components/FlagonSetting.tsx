import React, { FC } from 'react';

interface Props {
  id: string;
  isDev: boolean;
  key?: string;
  label: string;
  setValue: (value: boolean) => void;
  value: boolean;
}

export const FlagonSetting: FC<Props> = ({
  id,
  isDev,
  label,
  value,
  setValue,
}: Props) => {
  // Bail early if not in development
  if (!isDev) return null;
  return (
    <div>
      <label htmlFor={id}>
        <input
          checked={value}
          id={id}
          onChange={(e: any): void => setValue(e.currentTarget.checked)}
          type="checkbox"
        />
        <span> {label}</span>
      </label>
    </div>
  );
};

export default FlagonSetting;
