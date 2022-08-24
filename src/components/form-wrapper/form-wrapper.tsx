import React from 'react';
import { FormWrapperProps } from './form-wrapper.props';
import styles from './form-wrapper.module.scss';

export function FormWrapper({ title, children }: FormWrapperProps): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">{title}</h1>
      <div className={styles.formWrapper}>
        {children}
      </div>
    </>
  );
}
