import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Button.module.scss';

export type ButtonType = 'button' | 'submit';
export type ArrowType = 'next' | 'prev';

type Props = {
  type?: ButtonType;
  label?: string;
  className?: string;
  disabled?: boolean;
  fill?: boolean;
  arrow?: ArrowType;
  round?: boolean;
  onClick?: () => void;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<Props> = ({
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
  const classNames: string[] = [
    styles.Button,
    arrow === 'next' ? styles.ButtonNext : '',
    arrow === 'prev' ? styles.ButtonPrev : '',
    fill ? '' : styles.ButtonSecondary,
    round ? styles.ButtonRound : '',
    className,
  ];

  return (
    <button
      type={type}
      className={classNames.filter((item) => item.length).join(' ')}
      onClick={onClick}
      disabled={disabled}
      {...attribute}
    >
      <span className={styles.ButtonLabel}>{label}</span>
    </button>
  );
};

export default Button;
