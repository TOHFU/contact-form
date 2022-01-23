import { FormValues } from '@/pages/contact';

type Props = {
  formValues: FormValues;
  onBack: () => void;
  onSubmit: () => void;
};

const ContactConfirmContainer: React.FC<Props> = ({ formValues, onBack, onSubmit }) => {
  return (
    <div>
      <dl>
        <dt>姓</dt>
        <dd>{formValues.firstName}</dd>
        <dt>名</dt>
        <dd>{formValues.lastName}</dd>
        <dt>せい</dt>
        <dd>{formValues.firstNameKana}</dd>
        <dt>めい</dt>
        <dd>{formValues.lastNameKana}</dd>
        <dt>社名</dt>
        <dd>{formValues.company}</dd>
        <dt>メールアドレス</dt>
        <dd>{formValues.email}</dd>
        <dt>郵便番号</dt>
        <dd>{formValues.postalcode}</dd>
        <dt>住所</dt>
        <dd>{formValues.address}</dd>
        <dt>電話番号</dt>
        <dd>{formValues.phone}</dd>
        <dt>どの製品について</dt>
        <dd>{formValues.service}</dd>
        <dt>問い合わせ件名</dt>
        <dd>{formValues.title}</dd>
        <dt>問い合わせ内容</dt>
        <dd>{formValues.content}</dd>
        <dt>個人情報の保持の同意</dt>
        <dd>{formValues.agreement}</dd>
      </dl>
      <div>
        <button type="button" onClick={onBack}>
          修正する
        </button>
        <button type="submit" onClick={onSubmit}>
          送信する
        </button>
      </div>
    </div>
  );
};

export default ContactConfirmContainer;
