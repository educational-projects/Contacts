import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';
import cn from 'classnames';
import ReactFocusLock from 'react-focus-lock';
import { ModalProps } from './modal.props';
import styles from './modal.module.scss';

export function Modal({ children, onClose, className = '' }: ModalProps): JSX.Element | null {
  let modalRootElement = document.querySelector('#modal');

  if (!modalRootElement) {
    modalRootElement = document.createElement('div');
    modalRootElement.setAttribute('id', 'modal');
    document.body.appendChild(modalRootElement);
  }

  useEffect(() => {
    const handleEscKeyDown = (evt: KeyboardEvent): void => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKeyDown);

    return () => {
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [onClose]);

  return (
    createPortal(
      <ReactFocusLock>
        <RemoveScroll>
          <div className={cn(styles.modal, styles.isActive, className)}>
            <div className={styles.modalWrapper}>
              <div
                className={styles.modalOverlay}
                onClick={onClose}
                role="presentation"
              />
              <div className={styles.modalContent}>
                <button
                  type="button"
                  className={styles.buttonClose}
                  aria-label="закрыть модальное окно"
                  onClick={onClose}
                />
                {children}
              </div>
            </div>
          </div>
        </RemoveScroll>
      </ReactFocusLock>,
      modalRootElement,
    )
  );
}
