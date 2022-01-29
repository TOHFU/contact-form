import { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, RefCallback } from 'react';
import styles from './SelectInput.module.scss';

export interface OptionsType {
  value: string;
  label: string;
}

type Props = {
  options: OptionsType[];
  value?: string;
  id?: string;
  label?: string;
  hasError?: boolean;
  className?: string;
  inputRef?: RefCallback<HTMLSelectElement>;
  onChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

const initialOption = {
  value: '',
  label: '選択してください',
} as const;

const SelectInput: React.FC<Props> = ({
  options,
  value = '',
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
    <div className={`${styles.SelectInput} ${className} ${hasError ? styles.HasError : ''}`}>
      <select
        id={id}
        value={value}
        aria-label={label}
        aria-invalid={hasError}
        className={styles.SelectInputSelect}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
        {...attribute}
      >
        {[initialOption, ...options]?.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
