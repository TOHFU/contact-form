import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextAreaInput from '@/components/common/TextAreaInput';

describe('TextAreaInput コンポーネント', () => {
  it('ラベル付きの textarea が描画される', () => {
    const handleChange = vi.fn();
    render(
      <TextAreaInput
        id="message-textarea"
        label="Message"
        value=""
        onChange={handleChange}
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-label', 'Message');
  });

  it('入力時に onChange が呼ばれる', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(
      <TextAreaInput
        id="test-textarea"
        label="Input text"
        value=""
        onChange={handleChange}
      />
    );

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'Test message');

    expect(handleChange).toHaveBeenCalled();
  });

  it('現在の値が表示される', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <TextAreaInput
        id="value-test"
        label="Text"
        value=""
        onChange={handleChange}
      />
    );

    let textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('');

    rerender(
      <TextAreaInput
        id="value-test"
        label="Text"
        value="Some text content"
        onChange={handleChange}
      />
    );

    textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Some text content');
  });

  it('必須として aria-required が設定される', () => {
    const handleChange = vi.fn();
    render(
      <TextAreaInput
        id="required-textarea"
        label="Required"
        value=""
        onChange={handleChange}
        required={true}
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-required', 'true');
  });

  it('エラー状態が aria-invalid で表示される', () => {
    const handleChange = vi.fn();
    render(
      <TextAreaInput
        id="error-textarea"
        label="Error field"
        value=""
        onChange={handleChange}
        hasError={true}
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('カスタムプレースホルダに対応する', () => {
    const handleChange = vi.fn();
    render(
      <TextAreaInput
        id="placeholder-test"
        label="With placeholder"
        value=""
        onChange={handleChange}
        placeholder="Enter your message..."
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('placeholder', 'Enter your message...');
  });
});
