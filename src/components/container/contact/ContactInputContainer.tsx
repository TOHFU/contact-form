import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Services } from '@/components/model/contactModel';

import { FormValues } from '@/pages/contact';
import Field from '@/components/common/Field';
import TextInput from '@/components/common/TextInput';
import SelectInput from '@/components/common/SelectInput';
import TextAreaInput from '@/components/common/TextAreaInput';
import CheckInput from '@/components/common/CheckInput';
import Button from '@/components/common/Button';

import styles from './ContactInputContainer.module.scss';

type Props = {
  formValues: FormValues;
  onConfirm: (_values: FormValues) => void;
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

const ContactInputContainer: React.FC<Props> = ({ formValues, onConfirm }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: formValues,
  });

  const onSubmit = handleSubmit((data) => {
    onConfirm(data);
    console.log(data);
  });

  return (
    <form className={styles.ContactInput} onSubmit={onSubmit}>
      <div className={styles.ContactInputCard}>
        <p className={styles.ContactInputCardTitle}>基本情報</p>
        <div className={styles.ContactInputColumn}>
          <Controller
            name="firstName"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <Field className={styles.ContactInputField} id={name} label={'姓'} error={error?.message} required={true}>
                <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
              </Field>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <Field className={styles.ContactInputField} id={name} label={'名'} error={error?.message} required={true}>
                <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
              </Field>
            )}
          />
        </div>
        <div className={styles.ContactInputColumn}>
          <Controller
            name="firstNameKana"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <Field className={styles.ContactInputField} id={name} label={'せい'} error={error?.message} required={true}>
                <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
              </Field>
            )}
          />
          <Controller
            name="lastNameKana"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <Field className={styles.ContactInputField} id={name} label={'めい'} error={error?.message} required={true}>
                <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
              </Field>
            )}
          />
        </div>
        <Controller
          name="company"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <Field className={styles.ContactInputField} id={name} label={'社名'} error={error?.message}>
              <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
            </Field>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <Field
              className={styles.ContactInputField}
              id={name}
              label={'メールアドレス'}
              error={error?.message}
              required={true}
            >
              <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
            </Field>
          )}
        />
        <Controller
          name="postalcode"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <Field className={styles.ContactInputField} id={name} label={'郵便番号'} error={error?.message}>
              <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
            </Field>
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <Field className={styles.ContactInputField} id={name} label={'住所'} error={error?.message}>
              <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
            </Field>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <Field className={styles.ContactInputField} id={name} label={'電話番号'} error={error?.message}>
              <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
            </Field>
          )}
        />
      </div>
      <div className={styles.ContactInputCard}>
        <p className={styles.ContactInputCardTitle}>お問い合わせ内容</p>
        <Controller
          name="service"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <Field
              className={styles.ContactInputField}
              id={name}
              label={'どの製品について'}
              error={error?.message}
              required={true}
            >
              <SelectInput options={Services} value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
            </Field>
          )}
        />
        <Controller
          name="title"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <Field
              className={styles.ContactInputField}
              id={name}
              label={'お問い合わせ件名'}
              error={error?.message}
              required={true}
            >
              <TextInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />
            </Field>
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <Field
              className={styles.ContactInputField}
              id={name}
              label={'お問い合わせ内容'}
              error={error?.message}
              required={true}
            >
              <TextAreaInput value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} rows={10} />
            </Field>
          )}
        />
      </div>
      <div className={styles.ContactInputCard}>
        <Controller
          name="agreement"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <Field
              className={styles.ContactInputField}
              id={name}
              label={'個人情報の保持の同意'}
              error={error?.message}
              required={true}
            >
              <CheckInput
                checked={value}
                text={'個人情報の保持に同意する'}
                onChange={onChange}
                onBlur={onBlur}
                inputRef={ref}
              />
            </Field>
          )}
        />
        <div className={styles.ContactInputButton}>
          <Button type={'submit'} label={'確認画面へ'} arrow={undefined} />
        </div>
      </div>
    </form>
  );
};

export default ContactInputContainer;
