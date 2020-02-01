import React, { FC, useState } from 'react';

import { useFlagon } from '../hooks/useFlagon';
import { useKeyPress } from '../hooks/useKeyPress';
import { options } from '../options';
import styles from './FlagonModal.css';
import { FlagonSettings } from './FlagonSettings';

const MODAL_STATE = '_isModalOpen';

interface Props {
  isDev: boolean;
  key?: string;
}
const persistModalState = ({ setShowLocal, setShowPersisted }) => (
  show: boolean,
) => {
  setShowPersisted(show);
  setShowLocal(show);
};

export const FlagonModal: FC<Props> = ({
  isDev,
  key = options.activationKey,
}: Props) => {
  const { getValue, setValue } = useFlagon();
  const showPersisted = getValue(MODAL_STATE);
  const setShowPersisted = setValue(MODAL_STATE);
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
