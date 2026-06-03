import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/components/common/Button';

describe('Button', () => {
  it('renders button with label', () => {
    render(<Button label="Click me" />);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button label="Submit" onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /Submit/i });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('has correct button type', () => {
    const { rerender } = render(<Button label="Button" type="button" />);
    let button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');

    rerender(<Button label="Submit" type="submit" />);
    button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('disables button when disabled prop is true', () => {
    render(<Button label="Disabled" disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button label="Disabled" onClick={handleClick} disabled={true} />);
    const button = screen.getByRole('button');

    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies correct CSS classes based on props', () => {
    const { rerender } = render(
      <Button label="Primary" fill={true} />
    );
    let button = screen.getByRole('button');
    expect(button.className).toMatch(/Button/);

    rerender(<Button label="Secondary" fill={false} />);
    button = screen.getByRole('button');
    expect(button.className).toMatch(/ButtonSecondary/);
  });

  it('supports arrow variations', () => {
    const { rerender } = render(<Button label="Next" arrow="next" />);
    let button = screen.getByRole('button');
    expect(button.className).toMatch(/ButtonNext/);

    rerender(<Button label="Previous" arrow="prev" />);
    button = screen.getByRole('button');
    expect(button.className).toMatch(/ButtonPrev/);
  });
});
