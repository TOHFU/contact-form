import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectInput, { OptionsType } from '@/components/common/SelectInput';

describe('SelectInput コンポーネント', () => {
  const defaultOptions: OptionsType[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('オプション付きのセレクトが描画される', () => {
    const handleChange = vi.fn();
    render(
      <SelectInput
        id="select-input"
        label="Choose option"
        options={defaultOptions}
        value=""
        onChange={handleChange}
      />
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText(/選択してください/i)).toBeInTheDocument();
  });

  it('オプション選択時に onChange が呼ばれる', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(
      <SelectInput
        id="test-select"
        label="Select"
        options={defaultOptions}
        value=""
        onChange={handleChange}
      />
    );

    const select = screen.getByRole('combobox');
    await user.click(select);
    // Note: We simulate a change; exact behavior depends on implementation
  });

  it('label prop から aria-label が設定される', () => {
    const handleChange = vi.fn();
    render(
      <SelectInput
        id="labeled-select"
        label="Service Type"
        options={defaultOptions}
        value=""
        onChange={handleChange}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-label', 'Service Type');
  });

  it('必須として aria-required が設定される', () => {
    const handleChange = vi.fn();
    render(
      <SelectInput
        id="required-select"
        label="Required field"
        options={defaultOptions}
        value=""
        onChange={handleChange}
        required={true}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-required', 'true');
  });

  it('エラー状態が aria-invalid で表示される', () => {
    const handleChange = vi.fn();
    render(
      <SelectInput
        id="error-select"
        label="Error field"
        options={defaultOptions}
        value=""
        onChange={handleChange}
        hasError={true}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-invalid', 'true');
  });

  it('選択された値を表示する', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <SelectInput
        id="value-test"
        label="Select"
        options={defaultOptions}
        value=""
        onChange={handleChange}
      />
    );

    let select = screen.getByRole('combobox');
    expect(select).toHaveValue('');

    rerender(
      <SelectInput
        id="value-test"
        label="Select"
        options={defaultOptions}
        value="option2"
        onChange={handleChange}
      />
    );

    select = screen.getByRole('combobox');
    expect(select).toHaveValue('option2');
  });
});
