import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, RefCallback } from 'react';
import styles from './TextInput.module.scss';

export type InputType = 'text' | 'email' | 'number' | 'tel';

type Props = {
  value?: string;
  type?: InputType;
  id?: string;
  label?: string;
  hasError?: boolean;
  className?: string;
  inputRef?: RefCallback<HTMLInputElement>;
  onChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextInput: React.FC<Props> = ({
  value = '',
  type = 'text',
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
      type={type}
      id={id}
      value={value}
      aria-label={label}
      className={`${styles.TextInput} ${className} ${hasError ? styles.HasError : ''}`}
      ref={inputRef}
      onChange={onChange}
      onBlur={onBlur}
      {...attribute}
    />
  );
};

export default TextInput;