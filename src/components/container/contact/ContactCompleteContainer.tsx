import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

import styles from './ContactCompleteContainer.module.scss';

type Props = {
  onBack: () => void;
};

const ContactCompleteContainer: React.FC<Props> = ({ onBack }) => {
  return (
    <div className={styles.ContactComplete}>
      <Card className={styles.ContactCompleteCard} title={'お問い合わせありがとうございました。'}>
        <div className={styles.ContactCompleteContent}>
          <p>お問い合わせ頂いた内容につきまして、 担当者から２・３営業日以内にご連絡させて頂きます。</p>
          <div className={styles.ContactCompleteButton}>
            <Button type={'button'} label={'TOPへ'} arrow={'next'} onClick={onBack} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactCompleteContainer;
