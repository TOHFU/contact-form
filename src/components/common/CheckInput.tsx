import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, RefCallback, useMemo } from 'react';
import styles from './CheckInput.module.scss';

interface CheckInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /** チェック状態 */
  checked?: boolean;
  /** チェックボックスのID */
  id?: string;
  /** ラベルテキスト */
  text?: string;
  /** 必須フラグ */
  required?: boolean;
  /** エラー状態 */
  hasError?: boolean;
  /** カスタムクラス名 */
  className?: string;
  /** チェックボックスへのref */
  inputRef?: RefCallback<HTMLInputElement>;
  /** 変更時のコールバック */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** フォーカス喪失時のコールバック */
  onBlur?: () => void;
}

/**
 * チェックボックスコンポーネント
 * @param props - チェックボックスのプロパティ
 * @returns チェックボックス要素
 */
const CheckInput: React.FC<CheckInputProps> = ({
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
  const labelClassName = useMemo(
    () => `${styles.CheckInput} ${className} ${hasError ? styles.HasError : ''}`,
    [className, hasError]
  );

  return (
    <label className={labelClassName}>
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
