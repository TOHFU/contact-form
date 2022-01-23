import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Props = {};

export type FormValues = {
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  company: string | undefined;
  email: string;
  postalcode: string | undefined;
  address: string | undefined;
  phone: string | undefined;
  service: string | undefined;
  title: string;
  content: string;
  agreement: boolean | undefined;
};

const schema: yup.SchemaOf<FormValues> = yup.object({
  firstName: yup.string().max(20, '20文字以内で入力してください。').required('必須項目です。'),
  lastName: yup.string().max(20, '20文字以内で入力してください。').required('必須項目です。'),
  firstNameKana: yup.string().max(20, '20文字以内で入力してください。').required('必須項目です。'),
  lastNameKana: yup.string().max(20, '20文字以内で入力してください。').required('必須項目です。'),
  company: yup.string().max(50, '50文字以内で入力してください。'),
  email: yup
    .string()
    .max(512, '512文字以内で入力してください。')
    .email('不正なメールアドレスです。')
    .required('必須項目です。'),
  postalcode: yup.string().max(7, '7文字以内で入力してください。'),
  address: yup.string().max(100, '100文字以内で入力してください。'),
  phone: yup.string().max(11, '11文字以内で入力してください。'),
  service: yup.string().required('必須項目です。'),
  title: yup.string().max(100, '100文字以内で入力してください。').required('必須項目です。'),
  content: yup.string().max(2000, '2000文字以内で入力してください。').required('必須項目です。'),
  agreement: yup.bool().isTrue('必須項目です。'),
});

const ContactInputContainer: React.FC<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>姓</label>
        <input {...register('firstName')} />
        <p>{errors.firstName?.message}</p>
      </div>
      <div>
        <label>名</label>
        <input {...register('lastName')} />
        <p>{errors.lastName?.message}</p>
      </div>
      <div>
        <label>せい</label>
        <input {...register('firstNameKana')} />
        <p>{errors.firstNameKana?.message}</p>
      </div>
      <div>
        <label>めい</label>
        <input {...register('lastNameKana')} />
        <p>{errors.lastNameKana?.message}</p>
      </div>
      <div>
        <label>社名</label>
        <input {...register('company')} />
        <p>{errors.company?.message}</p>
      </div>
      <div>
        <label>メールアドレス</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>郵便番号</label>
        <input {...register('postalcode')} />
        <p>{errors.postalcode?.message}</p>
      </div>
      <div>
        <label>住所</label>
        <input {...register('address')} />
        <p>{errors.address?.message}</p>
      </div>
      <div>
        <label>電話番号</label>
        <input {...register('phone')} />
        <p>{errors.phone?.message}</p>
      </div>
      <div>
        <label>どの製品について</label>
        <select {...register('service')}>
          <option value="">選択してください</option>
          <option value="serviceA">Aサービスについて</option>
          <option value="serviceB">Bサービスについて</option>
          <option value="serviceC">Cサービスについて</option>
        </select>
        <p>{errors.service?.message}</p>
      </div>
      <div>
        <label>問い合わせ件名</label>
        <input {...register('title')} />
        <p>{errors.title?.message}</p>
      </div>
      <div>
        <label>問い合わせ内容</label>
        <textarea {...register('content')} />
        <p>{errors.content?.message}</p>
      </div>
      <div>
        <label>個人情報の保持の同意</label>
        <input type="checkbox" {...register('agreement')} />
        <p>{errors.agreement?.message}</p>
      </div>
      <div>
        <button type="submit">確認画面へ</button>
      </div>
    </form>
  );
};

export default ContactInputContainer;
