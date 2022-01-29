import Link from 'next/link';

import Button from '@/components/common/Button';
import styles from './ContactCompleteContainer.module.scss';

type Props = {};

const ContactCompleteContainer: React.FC<Props> = () => {
  return (
    <div className={styles.ContactComplete}>
      <div className={styles.ContactCompleteCard}>
        <p className={styles.ContactCompleteCardTitle}>ありがとうございました。</p>
        <p>お問い合わせありがとうございました。</p>
        <div className={styles.ContactCompleteButton}>
          <Button type={'button'} label={'TOPに戻る'} />
        </div>
      </div>
    </div>
  );
};

export default ContactCompleteContainer;
