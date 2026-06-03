import '@testing-library/jest-dom';
import { expect, afterEach, vi, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './mocks/server';

// MSW サーバーのセットアップ
beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());

// window.matchMedia モックアップ
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
