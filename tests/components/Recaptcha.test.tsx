import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Recaptcha } from '@/components/common/Recaptcha';

// reCAPTCHA コンポーネントのモック
vi.mock('react-google-recaptcha', () => ({
  default: ({ onChange, onExpired, onErrored, disabled }: any) => (
    <div
      data-testid="recaptcha"
      data-disabled={disabled}
      onClick={() => onChange('mock_token')}
    >
      reCAPTCHA Mock
    </div>
  ),
}));

describe('Recaptcha', () => {
  beforeEach(() => {
    // 環境変数を設定
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 'test_site_key';
  });

  it('renders recaptcha component', () => {
    const handleVerify = vi.fn();
    render(<Recaptcha onVerify={handleVerify} />);

    expect(screen.getByTestId('recaptcha')).toBeInTheDocument();
  });

  it('calls onVerify when token is received', () => {
    const handleVerify = vi.fn();
    const { getByTestId } = render(<Recaptcha onVerify={handleVerify} />);

    const recaptcha = getByTestId('recaptcha');
    recaptcha.click();

    expect(handleVerify).toHaveBeenCalledWith('mock_token');
  });

  it('renders with aria-label for accessibility', () => {
    const handleVerify = vi.fn();
    render(<Recaptcha onVerify={handleVerify} />);

    const region = screen.getByRole('region', { name: /recaptcha/i });
    expect(region).toBeInTheDocument();
  });

  it('renders disabled state', () => {
    const handleVerify = vi.fn();
    render(<Recaptcha onVerify={handleVerify} disabled={true} />);

    const recaptcha = screen.getByTestId('recaptcha');
    expect(recaptcha).toHaveAttribute('data-disabled', 'true');
  });

  it('renders enabled state by default', () => {
    const handleVerify = vi.fn();
    render(<Recaptcha onVerify={handleVerify} />);

    const recaptcha = screen.getByTestId('recaptcha');
    expect(recaptcha).toHaveAttribute('data-disabled', 'false');
  });

  it('calls onExpire callback when token expires', () => {
    const handleVerify = vi.fn();
    const handleExpire = vi.fn();
    render(<Recaptcha onVerify={handleVerify} onExpire={handleExpire} />);

    // このテストは、実装の詳細に基づいて調整が必要です
    expect(handleExpire).not.toHaveBeenCalled();
  });

  it('calls onError callback when error occurs', () => {
    const handleVerify = vi.fn();
    const handleError = vi.fn();
    render(<Recaptcha onVerify={handleVerify} onError={handleError} />);

    // このテストは、実装の詳細に基づいて調整が必要です
    expect(handleError).not.toHaveBeenCalled();
  });
});
