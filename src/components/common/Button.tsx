import { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from 'react';
import styles from './Button.module.scss';

export type ButtonType = 'button' | 'submit';
export type ArrowType = 'next' | 'prev';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /** ボタンのタイプ */
  type?: ButtonType;
  /** ボタンのラベルテキスト */
  label?: string;
  /** カスタムクラス名 */
  className?: string;
  /** 無効状態 */
  disabled?: boolean;
  /** 埋め尽くしスタイル */
  fill?: boolean;
  /** 矢印の方向 */
  arrow?: ArrowType;
  /** 丸角スタイル */
  round?: boolean;
  /** クリックハンドラ */
  onClick?: () => void;
}

/**
 * ボタンコンポーネント
 * @param props - ボタンのプロパティ
 * @returns ボタン要素
 */
const Button: React.FC<ButtonProps> = ({
  type = 'button',
  label = '',
  className = '',
  disabled = false,
  fill = true,
  arrow,
  round = false,
  onClick,
  ...attribute
}) => {
  const classNames = useMemo(() => {
    const names: string[] = [
      styles.Button,
      arrow === 'next' ? styles.ButtonNext : '',
      arrow === 'prev' ? styles.ButtonPrev : '',
      fill ? '' : styles.ButtonSecondary,
      round ? styles.ButtonRound : '',
      className,
    ];
    return names.filter((name) => name.length).join(' ');
  }, [arrow, fill, round, className]);

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...attribute}
    >
      <span className={styles.ButtonLabel}>{label}</span>
    </button>
  );
};

export default Button;
