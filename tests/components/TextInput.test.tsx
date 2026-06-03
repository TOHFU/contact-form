import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '@/components/common/TextInput';

describe('TextInput コンポーネント', () => {
  it('ラベル属性を持つ入力が描画される', () => {
    const handleChange = vi.fn();
    render(
      <TextInput
        id="email-input"
        label="Email Address"
        type="email"
        value=""
        onChange={handleChange}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-label', 'Email Address');
  });

  it('入力時に onChange ハンドラが呼ばれる', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(
      <TextInput
        id="text-input"
        label="Enter text"
        value=""
        onChange={handleChange}
      />
    );

    const input = screen.getByRole('textbox');
    await user.type(input, 'hello');

    expect(handleChange).toHaveBeenCalled();
  });

  it('エラー状態が aria-invalid で表示される', () => {
    const handleChange = vi.fn();
    render(
      <TextInput
        id="error-input"
        label="Error Input"
        value=""
        onChange={handleChange}
        hasError={true}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('異なる入力タイプをサポートする', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <TextInput
        type="email"
        label="Email"
        value=""
        onChange={handleChange}
      />
    );

    let input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');

    rerender(
      <TextInput
        type="tel"
        label="Phone"
        value=""
        onChange={handleChange}
      />
    );

    input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'tel');
  });

  it('必須フィールドが aria-required でマークされる', () => {
    const handleChange = vi.fn();
    render(
      <TextInput
        id="required-input"
        label="Required Field"
        value=""
        onChange={handleChange}
        required={true}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-required', 'true');
  });
});
