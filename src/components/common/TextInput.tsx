import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, RefCallback, useMemo } from 'react';
import styles from './TextInput.module.scss';

export type InputType = 'text' | 'email' | 'number' | 'tel';

interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /** 入力値 */
  value?: string;
  /** 入力タイプ */
  type?: InputType;
  /** 入力欄のID */
  id?: string;
  /** ラベルテキスト */
  label?: string;
  /** 必須フラグ */
  required?: boolean;
  /** エラー状態 */
  hasError?: boolean;
  /** カスタムクラス名 */
  className?: string;
  /** 入力欄へのref */
  inputRef?: RefCallback<HTMLInputElement>;
  /** 変更時のコールバック */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** フォーカス喪失時のコールバック */
  onBlur?: () => void;
}

/**
 * テキスト入力コンポーネント
 * @param props - 入力欄のプロパティ
 * @returns 入力欄要素
 */
const TextInput: React.FC<TextInputProps> = ({
  value = '',
  type = 'text',
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
    () => `${styles.TextInput} ${className} ${hasError ? styles.HasError : ''}`,
    [className, hasError]
  );

  return (
    <div className={wrapperClassName}>
      <input
        type={type}
        id={id}
        value={value}
        aria-label={label}
        aria-required={required}
        aria-invalid={hasError}
        className={styles.TextInputText}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
        {...attribute}
      />
    </div>
  );
};

export default TextInput;
