import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckInput from '@/components/common/CheckInput';

describe('CheckInput コンポーネント', () => {
  it('ラベル付きチェックボックスが描画される', () => {
    const handleChange = vi.fn();
    render(
      <CheckInput
        id="agree-checkbox"
        text="I agree to terms"
        checked={false}
        onChange={handleChange}
      />
    );

    expect(screen.getByText(/I agree to terms/i)).toBeInTheDocument();
  });

  it('チェック時に onChange ハンドラが呼ばれる', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(
      <CheckInput
        id="test-checkbox"
        text="Test"
        checked={false}
        onChange={handleChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  it('チェック状態が正しく表示される', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <CheckInput
        id="checked-test"
        text="Check me"
        checked={false}
        onChange={handleChange}
      />
    );

    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    rerender(
      <CheckInput
        id="checked-test"
        text="Check me"
        checked={true}
        onChange={handleChange}
      />
    );

    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('必須として aria-required が設定される', () => {
    const handleChange = vi.fn();
    render(
      <CheckInput
        id="required-checkbox"
        text="Required"
        checked={false}
        onChange={handleChange}
        required={true}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-required', 'true');
  });

  it('エラー状態が aria-invalid で表示される', () => {
    const handleChange = vi.fn();
    render(
      <CheckInput
        id="error-checkbox"
        text="Error state"
        checked={false}
        onChange={handleChange}
        hasError={true}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  it('aria-label 属性に対応する', () => {
    const handleChange = vi.fn();
    render(
      <CheckInput
        id="labeled-checkbox"
        text="Checkbox with label"
        checked={false}
        onChange={handleChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Checkbox with label');
  });
});
