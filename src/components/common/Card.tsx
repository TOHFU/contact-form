import styles from './Card.module.scss';

type Props = {
  title?: string;
  className?: string;
  children?: React.ReactElement;
};

const Button: React.FC<Props> = ({ title, className = '', children }) => {
  return (
    <section className={`${styles.Card} ${className}`}>
      {title && (
        <div className={styles.CardHead}>
          <h3 className={styles.CardTitle}>{title}</h3>
        </div>
      )}
      <div className={styles.CardContent}>{children}</div>
    </section>
  );
};

export default Button;
