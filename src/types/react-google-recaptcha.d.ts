declare module 'react-google-recaptcha' {
  import type { ComponentType, HTMLAttributes } from 'react';

  export interface ReCAPTCHAProps extends HTMLAttributes<HTMLDivElement> {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    onError?: () => void;
    theme?: 'light' | 'dark';
    size?: 'compact' | 'normal';
    tabIndex?: number;
    badge?: 'bottomright' | 'bottomleft' | 'inline';
    hl?: string;
    disabled?: boolean;
    'data-testid'?: string;
  }

  const ReCAPTCHA: ComponentType<ReCAPTCHAProps>;
  export default ReCAPTCHA;
}
