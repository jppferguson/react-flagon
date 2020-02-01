import React, { FC, useState } from 'react';

import { useFlagon } from '../hooks/useFlagon';
import { useKeyPress } from '../hooks/useKeyPress';
import { defaultOptions, FlagonOptions } from '../options';
import styles from './FlagonModal.css';
import { FlagonSettings } from './FlagonSettings';

const MODAL_OPEN_KEY = '_isModalOpen';

interface Props {
  isDev: boolean;
  options?: FlagonOptions;
  activationKey?: string;
}
const persistModalState = ({ setShowLocal, setShowPersisted }) => (
  show: boolean,
) => {
  setShowPersisted(show);
  setShowLocal(show);
};

export const FlagonModal: FC<Props> = ({
  isDev,
  options = { ...defaultOptions },
  activationKey,
}: Props) => {
  const opts = { ...defaultOptions, ...options };
  const key = activationKey || opts.activationKey;
  const { getValue, setValue } = useFlagon();
  const showPersisted = getValue(MODAL_OPEN_KEY);
  const setShowPersisted = setValue(MODAL_OPEN_KEY);
  const [show, setShowLocal] = useState(showPersisted);
  const setShow = persistModalState({ setShowLocal, setShowPersisted });
  const handleClose = (): void => setShow(false);
  const handleToggle = (): void => setShow(!show);

  useKeyPress(key, handleToggle);
  // Bail early if not in development
  if (!isDev || !show) return null;
  return (
    <div className={styles.dialog}>
      <div className={styles.wrapper}>
        <h4>{opts.modalTitle}</h4>
        <hr />
        <div>
          <FlagonSettings isDev={isDev} options={opts} />
        </div>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FlagonModal;
