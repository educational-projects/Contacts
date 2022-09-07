import React from 'react';
import styles from './delete-contact.module.scss';
import { DeleteContactProps } from './delete-contact.props';

export function DeleteModal({ onClose }: DeleteContactProps): JSX.Element {
  return (
    <div>
      <h2 className={styles.title}>Удалить контакт?</h2>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} type="button">Подтвердить</button>
        <button className={styles.button} type="button" onClick={onClose}>Отменить</button>
      </div>
    </div>
  );
}
