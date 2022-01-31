import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, RefCallback } from 'react';
import styles from './CheckInput.module.scss';

type Props = {
  checked?: boolean;
  id?: string;
  text?: string;
  required?: boolean;
  hasError?: boolean;
  className?: string;
  inputRef?: RefCallback<HTMLInputElement>;
  onChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const CheckInput: React.FC<Props> = ({
  checked = false,
  id,
  text = '',
  required = false,
  hasError = false,
  className = '',
  inputRef,
  onChange,
  onBlur,
  ...attribute
}) => {
  return (
    <label className={`${styles.CheckInput} ${className} ${hasError ? styles.HasError : ''}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        aria-label={text}
        aria-required={required}
        aria-invalid={hasError}
        className={styles.CheckInputCheck}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
        {...attribute}
      />
      <span className={styles.CheckInputLabel}>{text}</span>
    </label>
  );
};

export default CheckInput;
