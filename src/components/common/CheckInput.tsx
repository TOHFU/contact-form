import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, RefCallback } from 'react';
import styles from './CheckInput.module.scss';

type Props = {
  checked?: boolean;
  id?: string;
  label?: string;
  hasError?: boolean;
  className?: string;
  inputRef?: RefCallback<HTMLInputElement>;
  onChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const CheckInput: React.FC<Props> = ({
  checked = false,
  id,
  label = '',
  hasError = false,
  className = '',
  inputRef,
  onChange,
  onBlur,
  ...attribute
}) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      aria-label={label}
      className={`${styles.CheckInput} ${className} ${hasError ? styles.HasError : ''}`}
      ref={inputRef}
      onChange={onChange}
      onBlur={onBlur}
      {...attribute}
    />
  );
};

export default CheckInput;
