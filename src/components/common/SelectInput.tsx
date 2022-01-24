import { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, RefCallback } from 'react';
import styles from './SelectInput.module.scss';

export type OptionsType = Array<{
  value: string;
  label: string;
}>;

type Props = {
  options: OptionsType;
  value?: string;
  id?: string;
  label?: string;
  hasError?: boolean;
  className?: string;
  inputRef?: RefCallback<HTMLSelectElement>;
  onChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

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
    <select
      id={id}
      value={value}
      aria-label={label}
      className={`${styles.SelectInput} ${className} ${hasError ? styles.HasError : ''}`}
      ref={inputRef}
      onChange={onChange}
      onBlur={onBlur}
      {...attribute}
    >
      {options?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
