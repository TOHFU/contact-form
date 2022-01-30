import type { ReactElement } from 'react';
import Image from 'next/image';

import Head from 'next/head';
import Layout from '@/components/layouts/Layout';

import styles from './index.module.scss';
import Link from 'next/link';

import arrowImage from '../../public/arrow.svg';

const Home = () => {
  return (
    <>
      <Head>
        <title>home | contact form</title>
      </Head>
      <div className={styles.Container}>
        <h1>Next.js実装サンプル</h1>
        <h2>やったこと</h2>
        <ul>
          <li>
            Next.jsで
            <Link href={{ pathname: '/contact' }} passHref>
              <a>フォーム</a>
            </Link>
            のフロント画面作成
          </li>
          <li>React Hook Form + Yup でフォーム挙動制御、バリデーション制御</li>
          <li>フォームのa11y対応・キーボード操作のサポート</li>
          <li>Atomレベルのフォーム基本パーツのコンポーネント作成</li>
          <li>コンポーネントのStoryBook管理・SnapShotsテスト</li>
          <li>ダークモード対応・OSの設定状況を反映・手動切替時ののlocalstrage保持</li>
        </ul>
        <h2>やらないこと</h2>
        <ul>
          <li>デザインカンプの作成</li>
          <li>フォーム入力値のAPI送信(API送信のタイミングでconsole.log出力)</li>
          <li>ユニットテスト</li>
        </ul>
        <h2>やりたかったこと(TODO)</h2>
        <ul>
          <li>Visual Regression Testing + デザイン連携としてのChromatic連携(連携のみ実施)</li>
          <li>
            Visual Regression Testing：
            <a href="https://reg-viz.github.io/reg-suit/" target="_blank" rel="noreferrer">
              reg-suit
            </a>
            と
            <a href="https://github.com/americanexpress/jest-image-snapshot" target="_blank" rel="noreferrer">
              jest-image-snapshot
            </a>
            の使用感の比較
          </li>
          <li>郵便番号→住所変換・現在座標からの住所取得</li>
        </ul>
        <div className={styles.Arrow}>
          <Image src={arrowImage} alt="contact is here." />
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
