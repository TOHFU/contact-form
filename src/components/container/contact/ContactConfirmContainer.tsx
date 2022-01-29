import Button from '@/components/common/Button';
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

  return (
    <div className={styles.ContactConfirm}>
      <div className={styles.ContactConfirmCard}>
        <p className={styles.ContactConfirmCardTitle}>基本情報</p>
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
      <div className={styles.ContactConfirmCard}>
        <p className={styles.ContactConfirmCardTitle}>お問い合わせ内容</p>
        <dl className={styles.ContactConfirmList}>
          <dt>どの製品について</dt>
          <dd>{service}</dd>
          <dt>問い合わせ件名</dt>
          <dd>{formValues.title}</dd>
          <dt>問い合わせ内容</dt>
          <dd>{formValues.content}</dd>
        </dl>
      </div>
      <div className={styles.ContactConfirmCard}>
        <dl className={styles.ContactConfirmList}>
          <dt>個人情報の保持の同意</dt>
          <dd>{formValues.agreement && '同意する'}</dd>
        </dl>
        <div className={styles.ContactConfirmButton}>
          <Button type={'button'} label={'修正する'} onClick={onBack} />
          <Button type={'submit'} label={'送信する'} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ContactConfirmContainer;
