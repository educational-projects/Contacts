import React from 'react';
import { useAppDispatch } from '../../hook';
import { deleteContact } from '../../store/contacts/contacts';
import styles from './delete-contact.module.scss';
import { DeleteContactProps } from './delete-contact.props';

export function DeleteContact({ onClose, currentId }: DeleteContactProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2 className={styles.title}>Удалить контакт?</h2>
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.button}
          type="button"
          onClick={() => dispatch(deleteContact({ id: currentId, callback: onClose }))}
        >
          Подтвердить
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={onClose}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}
