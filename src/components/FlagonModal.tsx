import React, { FC, useState } from 'react';

import { useKeyPress } from '../hooks/useKeyPress';
import { options } from '../options';
import styles from './FlagonModal.css';
import { FlagonSettings } from './FlagonSettings';

interface Props {
  isDev: boolean;
  key?: string;
}

export const FlagonModal: FC<Props> = ({
  isDev,
  key = options.activationKey,
}: Props) => {
  const [show, setShow] = useState(true);
  const handleClose = (): void => setShow(false);
  const handleToggle = (): void => setShow(!show);

  useKeyPress(key, handleToggle);

  // Bail early if not in development
  if (!isDev || !show) return null;
  return (
    <div className={styles.dialog}>
      <div className={styles.wrapper}>
        <h4>{options.modalTitle}</h4>
        <div>
          <FlagonSettings isDev={isDev} />
        </div>
        <button onClick={handleClose} type="button">
          Close
        </button>
      </div>
    </div>
  );
};

export default FlagonModal;
