import { ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, RefCallback } from 'react';
import styles from './TextAreaInput.module.scss';

type Props = {
  value: string;
  id?: string;
  label?: string;
  required?: boolean;
  hasError?: boolean;
  className?: string;
  inputRef?: RefCallback<HTMLTextAreaElement>;
  onChange: (_event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

const TextAreaInput: React.FC<Props> = ({
  value,
  id,
  label = '',
  required = false,
  hasError = false,
  className = '',
  inputRef,
  onChange,
  onBlur,
  ...attribute
}) => {
  return (
    <div className={`${styles.TextAreaInput} ${className} ${hasError ? styles.HasError : ''}`}>
      <textarea
        className={styles.TextAreaInputText}
        id={id}
        value={value}
        aria-label={label}
        aria-required={required}
        aria-invalid={hasError}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
        {...attribute}
      />
    </div>
  );
};

export default TextAreaInput;
