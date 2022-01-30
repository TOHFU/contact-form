import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Services } from '@/components/model/contactModel';
import { FormValues } from '@/pages/contact';

import styles from './ContactConfirmContainer.module.scss';

type Props = {
  formValues: FormValues;
  onBack: () => void;
  onSubmit: () => void;
};

const ContactConfirmContainer: React.FC<Props> = ({ formValues, onBack, onSubmit }) => {
  const service = Services.find((item) => item.value === formValues.service)?.label;

  const handleSubmit = () => {
    // FIXME: API送信
    window.console.log(formValues);
    onSubmit();
  };

  return (
    <div className={styles.ContactConfirm}>
      <Card className={styles.ContactConfirmCard}>
        <div className={styles.ContactConfirmCardInner}>
          <div className={`${styles.ContactConfirmContent} ${styles.ContactConfirmContentBasic}`}>
            <h4 className={styles.ContactConfirmTitle}>基本情報</h4>
            <dl className={styles.ContactConfirmList}>
              <dt>姓</dt>
              <dd>{formValues.firstName}</dd>
              <dt>名</dt>
              <dd>{formValues.lastName}</dd>
              <dt>せい</dt>
              <dd>{formValues.firstNameKana}</dd>
              <dt>めい</dt>
              <dd>{formValues.lastNameKana}</dd>
              <dt>社名</dt>
              <dd>{formValues.company || '-'}</dd>
              <dt>メールアドレス</dt>
              <dd>{formValues.email}</dd>
              <dt>郵便番号</dt>
              <dd>{formValues.postalcode || '-'}</dd>
              <dt>住所</dt>
              <dd>{formValues.address || '-'}</dd>
              <dt>電話番号</dt>
              <dd>{formValues.phone || '-'}</dd>
            </dl>
          </div>
          <div className={`${styles.ContactConfirmContent} ${styles.ContactConfirmContentDetail}`}>
            <h4 className={styles.ContactConfirmTitle}>お問い合わせ情報</h4>
            <dl className={styles.ContactConfirmList}>
              <dt>どの製品について</dt>
              <dd>{service}</dd>
              <dt>問い合わせ件名</dt>
              <dd>{formValues.title}</dd>
              <dt>問い合わせ内容</dt>
              <dd>{formValues.content}</dd>
            </dl>
            <div className={styles.ContactConfirmFoot}>
              <dl className={styles.ContactConfirmList}>
                <dt>個人情報の保持の同意</dt>
                <dd>{formValues.agreement && '同意する'}</dd>
              </dl>
              <div className={styles.ContactConfirmButton}>
                <Button type={'button'} label={'修正する'} fill={false} arrow={'prev'} onClick={onBack} />
                <Button type={'submit'} label={'送信する'} arrow={'next'} onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactConfirmContainer;
