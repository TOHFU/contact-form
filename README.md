# contact-form | Next.js 実装サンプル

Next.js の実装サンプルです.一般的なフォームのフロント画面を作成しました.

## Demo

制作物は Vercel でホスティングしています。

- [Demo Page](https://contact-form-cyan.vercel.app/)
- [Demo StoryBook Page](https://contact-form-storybook.vercel.app/)

## Overview

### やったこと

- Next.js でフォームのフロント画面作成
- React Hook Form + Yup でフォーム挙動制御、バリデーション制御
- フォームの a11y 対応 / キーボード操作のサポート
- Atom レベルのフォーム基本パーツのコンポーネント作成
- コンポーネントの StoryBook 管理・SnapShots テスト
  - 一部のコンポーネントで[Play Function](https://contact-form-storybook.vercel.app/?path=/story/container-contactinputcontainer--filled-play-form)を試してみています。
- ダークモード対応・OS の設定状況を反映・手動切替時のの LocalStroage 保持
  - ハンバーガーメニューから手動設定した時は LocalStroage に設定が保持され、以降 OS の設定より優先して反映されます。OS の設定値の追従を試す場合は LocalStroage のリセットをお願いします。

### やらないこと

- デザインカンプの作成
- フォーム入力値の API 送信(API 送信のタイミングで console.log 出力しています)
- ユニットテスト

### やりたいこと(今後の TODO)

- Visual Regression Testing + デザイン連携としての Chromatic 連携(連携のみ実施)
- Visual Regression Testing：[reg-suit](https://reg-viz.github.io/reg-suit/)と[jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot)の使用感の比較
- 郵便番号 → 住所変換・現在座標からの住所取得

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install
```

## Usage

Running locally in development mode.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Building and deploying in production.

```bash
npm run build
```

## Development scripts

Launch StoryBook.

```bash
npm run storybook
```

Run Jest Tests.

```bash
npm run test
```

Deploy Chromatic([https://www.chromatic.com/](https://www.chromatic.com/)) for Visual Regression Testing + Design Share.

```bash
npm run chromatic
```
