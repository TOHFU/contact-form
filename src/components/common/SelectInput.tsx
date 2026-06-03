import { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, RefCallback, useMemo } from 'react';
import styles from './SelectInput.module.scss';

export interface OptionItem {
  /** オプションの値 */
  value: string;
  /** オプションのラベル */
  label: string;
}

interface SelectInputProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  /** 選択肢の配列 */
  options: OptionItem[];
  /** 選択値 */
  value?: string;
  /** セレクトボックスのID */
  id?: string;
  /** ラベルテキスト */
  label?: string;
  /** 必須フラグ */
  required?: boolean;
  /** エラー状態 */
  hasError?: boolean;
  /** カスタムクラス名 */
  className?: string;
  /** セレクトボックスへのref */
  inputRef?: RefCallback<HTMLSelectElement>;
  /** 変更時のコールバック */
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  /** フォーカス喪失時のコールバック */
  onBlur?: () => void;
}

const INITIAL_OPTION: OptionItem = {
  value: '',
  label: '選択してください',
} as const;

/**
 * セレクトボックスコンポーネント
 * @param props - セレクトボックスのプロパティ
 * @returns セレクトボックス要素
 */
const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value = '',
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
  const wrapperClassName = useMemo(
    () => `${styles.SelectInput} ${className} ${hasError ? styles.HasError : ''}`,
    [className, hasError]
  );

  const allOptions = useMemo(
    () => [INITIAL_OPTION, ...options],
    [options]
  );

  return (
    <div className={wrapperClassName}>
      <select
        id={id}
        value={value}
        aria-label={label}
        aria-required={required}
        aria-invalid={hasError}
        className={styles.SelectInputSelect}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
        {...attribute}
      >
        {allOptions?.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
