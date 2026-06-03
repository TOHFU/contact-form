import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/components/common/Button';

describe('Button コンポーネント', () => {
  it('ラベルでボタンが描画される', () => {
    render(<Button label="Click me" />);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();
  });

  it('クリック時に onClick ハンドラが呼ばれる', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button label="Submit" onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /Submit/i });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('適切な button type が設定される', () => {
    const { rerender } = render(<Button label="Button" type="button" />);
    let button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');

    rerender(<Button label="Submit" type="submit" />);
    button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('disabled が true のときボタンが無効化される', () => {
    render(<Button label="Disabled" disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('disabled 時に onClick が呼ばれない', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button label="Disabled" onClick={handleClick} disabled={true} />);
    const button = screen.getByRole('button');

    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('props に応じた CSS クラスが適用される', () => {
    const { rerender } = render(
      <Button label="Primary" fill={true} />
    );
    let button = screen.getByRole('button');
    expect(button.className).toMatch(/Button/);

    rerender(<Button label="Secondary" fill={false} />);
    button = screen.getByRole('button');
    expect(button.className).toMatch(/ButtonSecondary/);
  });

  it('矢印のバリエーションに対応する', () => {
    const { rerender } = render(<Button label="Next" arrow="next" />);
    let button = screen.getByRole('button');
    expect(button.className).toMatch(/ButtonNext/);

    rerender(<Button label="Previous" arrow="prev" />);
    button = screen.getByRole('button');
    expect(button.className).toMatch(/ButtonPrev/);
  });
});
