# Copilot Instructions for Book Sky, Blue Blue App (Web)

## 前提条件

- **回答は必ず日本語でしてください。**
- コードの変更をする際、変更量が200行を超える可能性が高い場合は、事前に「この指示では変更量が200行を超える可能性がありますが、実行しますか?」とユーザーに確認をとるようにしてください。
- 何か大きい変更を加える場合、まず何をするのか計画を立てた上で、ユーザーに「このような計画で進めようと思います。」と提案してください。

## 参照スキルガイド (Skills)

特定のタスクを実行する際は、必ず以下の対応するドキュメントを参照し、その指針に従ってください。

- **アーキテクチャ・ディレクトリ構成**
  - アーキテクチャ、ディレクトリ構成
  - 📄 `.github/skills/architecture/SKILL.md`

- **UI 実装・スタイリング**
  - 画面設計、コンポーネント設計、アクセシビリティ (a11y)
  - 📄 `.github/skills/ui-design/SKILL.md`

- **バックエンド連携・認証**
  - API、データ管理
  - 📄 `.github/skills/backend-integration/SKILL.md`

- **コーディング規約**
  - TypeScript/Reactのベストプラクティス、命名規則、アンチパターン
  - 📄 `.github/skills/coding-standards/SKILL.md`

- **テスト戦略**
  - Vitest、React Testing Library、MSW、E2E
  - 📄 `.github/skills/testing/SKILL.md`

## プロジェクト概要

このプロジェクトは、お問い合わせフォームを提供するWebアプリケーションです。
お問い合わせフォームのデータはDBに保存するようにし、保存されたデータは管理者が閲覧できるようにします。

### 技術スタック概要

| カテゴリ                     | 技術                                   |
| ---------------------------- | -------------------------------------- |
| 言語                         | TypeScript                             |
| WEBフレームワーク            | Next.js lts                            |
| フロントエンドフレームワーク | React lts                              |
| UIフレームワーク             | Chakra UI lts                          |
| コンポーネント管理           | Storybook                              |
| 型チェック                   | Zod                                    |
| データベース                 | indexedDB                              |
| 書籍の描画                   | CSS Multi-column Layout Module Level 2 |
| ホスティング                 | Vercel                                 |
| 単体テスト                   | Vitest, React Testing Library, MSW     |
| E2Eテスト                    | Playwright                             |
| Visual Regression Testing    | Vitest                                 |
| ドキュメント整形             | Prettier (保存時に整形する)            |
| コード品質                   | ESLint                                 |
