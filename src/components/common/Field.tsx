import { cloneElement, Children, isValidElement } from 'react';
import CheckInput from './CheckInput';
import styles from './Field.module.scss';

interface FieldProps {
  /** フィールドのID */
  id: string;
  /** フィールドのラベル */
  label: string;
  /** 必須フラグ */
  required?: boolean;
  /** ヒントテキスト */
  hint?: string;
  /** エラーメッセージ */
  error?: string;
  /** カスタムクラス名 */
  className?: string;
  /** フィールド内の子コンポーネント */
  children: React.ReactElement;
}

/**
 * フィールドコンポーネント
 * @param props - フィールドのプロパティ
 * @returns フィールド要素
 */
const Field: React.FC<FieldProps> = ({
  id,
  label,
  required = false,
  hint = '',
  error = '',
  className = '',
  children,
}) => {
  const childElements = Children.toArray(children);
  const hasCheckElement = childElements.some(
    (element) => isValidElement(element) && element.type === CheckInput
  );
  const WrapElement = hasCheckElement ? 'div' : 'label';

  const childElement = cloneElement(children, {
    id,
    label,
    required,
    hasError: error !== '',
  });

  const errorMessageId = `${id}-error-message`;

  return (
    <div className={`${styles.Field} ${className} ${error ? styles.HasError : ''}`}>
      <WrapElement
        className={styles.FieldLabel}
        htmlFor={!hasCheckElement ? id : undefined}
        aria-describedby={error.length ? errorMessageId : undefined}
      >
        <span className={styles.FieldLabelText}>{label}</span>
        {required && <span className={styles.FieldLabelRequired}>必須</span>}
        {hint && <span className={styles.FieldHint}>{hint}</span>}
      </WrapElement>
      {childElement}
      {error && (
        <p id={errorMessageId} className={styles.FieldError}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Field;
