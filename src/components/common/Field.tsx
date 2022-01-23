import { cloneElement } from 'react';
import styles from './Field.module.scss';

type Props = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactElement;
};

const Field: React.FC<Props> = ({ id, label, required = false, hint = '', error = '', className = '', children }) => {
  const childElement = cloneElement(children, { id, label, hasError: error !== '' });
  return (
    <div className={`${styles.Field} ${className} ${error ? styles.HasError : ''}`}>
      <label htmlFor={id}>
        <span className={styles.fieldLabel}>{label}</span>
        {required && <span className={styles.required}>必須</span>}
        {hint && <span className={styles.fieldHint}>{hint}</span>}
      </label>
      {childElement}
      {error && <p className={styles.fieldError}>{error}</p>}
    </div>
  );
};

export default Field;
