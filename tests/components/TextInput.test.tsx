import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '@/components/common/TextInput';

describe('TextInput', () => {
  it('renders input with label attribute', () => {
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

  it('calls onChange handler when user types', async () => {
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

  it('displays error state with aria-invalid', () => {
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

  it('supports different input types', () => {
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

  it('marks field as required with aria-required', () => {
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
