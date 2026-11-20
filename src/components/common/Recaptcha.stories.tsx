import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Recaptcha } from './Recaptcha';

const meta = {
  title: 'common/Recaptcha',
  component: Recaptcha,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onVerify: { action: 'verified' },
    onExpire: { action: 'expired' },
    onError: { action: 'error' },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    onVerify: fn(),
    onExpire: fn(),
    onError: fn(),
    disabled: false,
  },
} satisfies Meta<typeof Recaptcha>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * reCAPTCHA デフォルト状態
 */
export const Default: Story = {
  args: {
    onVerify: fn(),
    disabled: false,
  },
};

/**
 * reCAPTCHA 無効化状態
 */
export const Disabled: Story = {
  args: {
    onVerify: fn(),
    disabled: true,
  },
};

/**
 * reCAPTCHA コールバック付き
 */
export const WithCallbacks: Story = {
  args: {
    onVerify: fn().mockName('onVerify'),
    onExpire: fn().mockName('onExpire'),
    onError: fn().mockName('onError'),
    disabled: false,
  },
};
