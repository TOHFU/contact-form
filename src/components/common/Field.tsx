import { cloneElement, Children, isValidElement } from 'react';
import CheckInput from './CheckInput';
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
  const childElements = Children.toArray(children);
  const hasCheckElement = childElements.some((element) => isValidElement(element) && element.type === CheckInput);
  const WrapElement = hasCheckElement ? 'div' : 'label';

  const childElement = cloneElement(children, { id, label, hasError: error !== '' });

  return (
    <div className={`${styles.Field} ${className} ${error ? styles.HasError : ''}`}>
      <WrapElement className={styles.FieldLabel} htmlFor={!hasCheckElement ? id : undefined}>
        <span className={styles.FieldLabelText}>{label}</span>
        {required && <span className={styles.FieldLabelRequired}>必須</span>}
        {hint && <span className={styles.FieldHint}>{hint}</span>}
      </WrapElement>
      {childElement}
      {error && <p className={styles.FieldError}>{error}</p>}
    </div>
  );
};

export default Field;
