import { ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, RefCallback, useMemo } from 'react';
import styles from './TextAreaInput.module.scss';

interface TextAreaInputProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  /** テキスト入力値 */
  value: string;
  /** テキストエリアのID */
  id?: string;
  /** ラベルテキスト */
  label?: string;
  /** 必須フラグ */
  required?: boolean;
  /** エラー状態 */
  hasError?: boolean;
  /** カスタムクラス名 */
  className?: string;
  /** テキストエリアへのref */
  inputRef?: RefCallback<HTMLTextAreaElement>;
  /** 変更時のコールバック */
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  /** フォーカス喪失時のコールバック */
  onBlur?: () => void;
}

/**
 * テキストエリアコンポーネント
 * @param props - テキストエリアのプロパティ
 * @returns テキストエリア要素
 */
const TextAreaInput: React.FC<TextAreaInputProps> = ({
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
  const wrapperClassName = useMemo(
    () => `${styles.TextAreaInput} ${className} ${hasError ? styles.HasError : ''}`,
    [className, hasError]
  );

  return (
    <div className={wrapperClassName}>
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
