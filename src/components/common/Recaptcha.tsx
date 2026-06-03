import { FC, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './Recaptcha.module.scss';

export interface RecaptchaProps {
  onVerify: (token: string | null) => void;
  onExpire?: () => void;
  onError?: () => void;
  disabled?: boolean;
}

/**
 * reCAPTCHA v2 チェックボックスコンポーネント
 * フォーム送信前のスパム対策として使用
 *
 * @param onVerify - 検証完了時のコールバック（トークンを受け取る）
 * @param onExpire - トークン有効期限切れ時のコールバック
 * @param onError - エラー発生時のコールバック
 * @param disabled - コンポーネントの無効化
 */
export const Recaptcha: FC<RecaptchaProps> = ({
  onVerify,
  onExpire,
  onError,
  disabled = false,
}) => {
  const handleChange = useCallback(
    (token: string | null) => {
      onVerify(token);
    },
    [onVerify]
  );

  const handleExpired = useCallback(() => {
    onExpire?.();
  }, [onExpire]);

  const handleError = useCallback(() => {
    onError?.();
  }, [onError]);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.warn('reCAPTCHA site key is not set in environment variables');
    return null;
  }

  return (
    <div className={styles.Recaptcha} role="region" aria-label="reCAPTCHA">
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={handleChange}
        onExpired={handleExpired}
        onErrored={handleError}
        disabled={disabled}
      />
    </div>
  );
};

export default Recaptcha;
