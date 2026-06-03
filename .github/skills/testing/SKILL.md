---
name: testing
description: 本プロジェクトのテスト戦略。Vitest、React Testing Library、MSWを使用した単体・コンポーネントテストについて説明。テスト作成時に参照。
---

# テスト戦略

## 技術スタック

- **単体テスト**: Vitest
- **コンポーネントテスト**: React Testing Library + user-event
- **APIモック**: MSW (Mock Service Worker)
- **E2Eテスト**: Playwright
- **フックテスト**: `@testing-library/react-hooks` (または RTL の `renderHook`)
- **Visual Regression Testing**: Vitest

## 単体テスト (Utils / Hooks / Stores)

- 純粋関数（utils）、カスタムフック、Zustand ストアのロジックを検証する
- 非同期処理を含む場合は `waitFor` や `act` を適切に使用する

```typescript
// stores/authStore.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAuthStore } from './authStore';

describe('useAuthStore', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useAuthStore());
    act(() => result.current.logout());
  });

  it('should set user and authentication status', () => {
    const { result } = renderHook(() => useAuthStore());
    const mockUser = { uid: '123', email: 'test@example.com' };

    act(() => {
      result.current.setUser(mockUser as any);
    });

    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
  });
});
```

## コンポーネントテスト (UI / Integration)

- ユーザーインタラクション（クリック、入力）を `user-event` でシミュレートする
- 実装の詳細ではなく、ユーザーから見える振る舞い（アクセシビリティ属性やテキスト）をテストする

```typescript
// features/task/components/TaskInput.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskInput } from './TaskInput';
import { vi } from 'vitest';

describe('TaskInput', () => {
    it('calls onSubmit with input text when enter is pressed', async () => {
        const handleCreate = vi.fn();
        const user = userEvent.setup();

        render(<TaskInput onCreate={handleCreate} />);

        const input = screen.getByRole('textbox', { name: /タスクを入力/i });

        // 入力と送信のシミュレーション
        await user.type(input, 'New Task{enter}');

        expect(handleCreate).toHaveBeenCalledWith('New Task');
        expect(input).toHaveValue(''); // 送信後のクリア確認
    });
});
```

## API モック (MSW)

- コンポーネントテストや統合テストで API レスポンスが必要な場合は MSW を使用する
- 実際のネットワークリクエストを発生させない

```typescript
// tests/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/tasks', () => {
    return HttpResponse.json([
      { id: '1', title: 'Buy milk', completed: false },
      { id: '2', title: 'Walk the dog', completed: true },
    ]);
  }),
];
```

## E2E テスト

- クリティカルなユーザージャーニー（ログイン → タスク作成 → 完了）を検証する
- Playwright を使用し、実際のブラウザ環境で動作確認を行う

## Visual Regression Testing

- 各画面のスナップショットを取得し、UIの変更が意図しない影響を与えていないか検証する
- Vitest のスナップショット機能を活用する
- GitHub Actionsで自動的に実行し、UIの変更をPRでレビューできるようにする

## テストのベストプラクティス

- **AAA パターン**: Arrange (準備), Act (実行), Assert (検証) を意識する
- **クエリの優先順位**: `getByRole` > `getByLabelText` > `getByText` > `getByTestId` の順で要素を取得する
- **非同期待機**: データの取得待ちなどには `await screen.findBy...` または `waitFor` を使用する
