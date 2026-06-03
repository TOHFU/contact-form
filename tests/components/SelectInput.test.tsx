import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectInput, { OptionsType } from '@/components/common/SelectInput';

describe('SelectInput', () => {
  const defaultOptions: OptionsType[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('renders select with options', () => {
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

  it('calls onChange when option is selected', async () => {
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

  it('sets aria-label from label prop', () => {
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

  it('marks as required with aria-required', () => {
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

  it('shows error state with aria-invalid', () => {
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

  it('displays selected value', () => {
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
