import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Services } from '@/components/model/contactModel';

import { ContactFormValues } from '@/pages/contact';
import Field from '@/components/common/Field';
import TextInput from '@/components/common/TextInput';
import SelectInput from '@/components/common/SelectInput';
import TextAreaInput from '@/components/common/TextAreaInput';
import CheckInput from '@/components/common/CheckInput';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

import styles from './ContactInputContainer.module.scss';

type Props = {
  formValues: ContactFormValues;
  onConfirm: (_values: ContactFormValues) => void;
};

const schema = z.object({
  firstName: z
    .string()
    .min(1, '必須項目です。')
    .max(20, '20文字以内で入力してください。'),
  lastName: z
    .string()
    .min(1, '必須項目です。')
    .max(20, '20文字以内で入力してください。'),
  firstNameKana: z
    .string()
    .min(1, '必須項目です。')
    .max(20, '20文字以内で入力してください。'),
  lastNameKana: z
    .string()
    .min(1, '必須項目です。')
    .max(20, '20文字以内で入力してください。'),
  company: z
    .string()
    .max(50, '50文字以内で入力してください。')
    .optional(),
  email: z
    .string()
    .min(1, '必須項目です。')
    .email('不正なメールアドレスです。')
    .max(512, '512文字以内で入力してください。'),
  postalcode: z
    .string()
    .max(7, '7文字以内で入力してください。')
    .optional(),
  address: z
    .string()
    .max(100, '100文字以内で入力してください。')
    .optional(),
  phone: z
    .string()
    .max(11, '11文字以内で入力してください。')
    .optional(),
  service: z
    .string()
    .min(1, '必須項目です。')
    .optional(),
  title: z
    .string()
    .min(1, '必須項目です。')
    .max(100, '100文字以内で入力してください。'),
  content: z
    .string()
    .min(1, '必須項目です。')
    .max(2000, '2000文字以内で入力してください。'),
  agreement: z
    .boolean()
    .refine((val) => val === true, '必須項目です。')
    .optional(),
});

const ContactInputContainer: React.FC<Props> = ({ formValues, onConfirm }) => {
  const { control, handleSubmit } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: formValues,
  });

  const onSubmit = handleSubmit((data) => {
    onConfirm(data);
  });

  return (
    <form className={styles.ContactInput} onSubmit={onSubmit}>
      <Card className={styles.ContactInputCard}>
        <div className={styles.ContactInputCardInner}>
          <div className={`${styles.ContactInputContent} ${styles.ContactInputContentBasic}`}>
            <h4 className={styles.ContactInputTitle}>基本情報</h4>
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
              render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => {
                const newVal = value?.replace(/[^0-9０-９]/g, '');
                return (
                  <Field
                    className={styles.ContactInputField}
                    id={name}
                    label={'郵便番号'}
                    hint={'ハイフン不要'}
                    error={error?.message}
                  >
                    <TextInput type={'tel'} value={newVal} onChange={onChange} onBlur={onBlur} inputRef={ref} />
                  </Field>
                );
              }}
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
              render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => {
                const newVal = value?.replace(/[^0-9０-９]/g, '');
                return (
                  <Field
                    className={styles.ContactInputField}
                    id={name}
                    label={'電話番号'}
                    hint={'ハイフン不要'}
                    error={error?.message}
                  >
                    <TextInput type={'tel'} value={newVal} onChange={onChange} onBlur={onBlur} inputRef={ref} />
                  </Field>
                );
              }}
            />
          </div>
          <div className={`${styles.ContactInputContent} ${styles.ContactInputContentDetail}`}>
            <h4 className={styles.ContactInputTitle}>お問い合わせ情報</h4>
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
            <div className={styles.ContactInputFoot}>
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
                <Button type={'submit'} arrow={'next'} label={'確認画面へ'} role={'submit'} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default ContactInputContainer;
