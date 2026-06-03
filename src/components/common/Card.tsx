import styles from './Card.module.scss';

interface CardProps {
  /** カードのタイトル */
  title?: string;
  /** カスタムクラス名 */
  className?: string;
  /** カード内の子コンポーネント */
  children?: React.ReactElement;
}

/**
 * カードコンポーネント
 * @param props - カードのプロパティ
 * @returns カード要素
 */
const Card: React.FC<CardProps> = ({ title, className = '', children }) => {
  return (
    <section className={`${styles.Card} ${className}`}>
      {title && (
        <div className={styles.CardHead}>
          <h3 className={styles.CardTitle}>{title}</h3>
        </div>
      )}
      {children}
    </section>
  );
};

export default Card;
