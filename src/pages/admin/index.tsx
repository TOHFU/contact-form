import React from 'react';
import { query } from '@/server/db';

type ContactRow = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  service: string;
  title: string;
  created_at: string;
};

export const revalidate = 0;

async function getContacts(): Promise<ContactRow[]> {
  const res = (await query('SELECT id, first_name, last_name, email, service, title, created_at FROM contacts ORDER BY created_at DESC LIMIT 100')) as { rows?: ContactRow[] } | null;
  return res?.rows ?? [];
}

const AdminPage = async () => {
  let contacts: ContactRow[] = [];
  try {
    contacts = await getContacts();
  } catch (err) {
    console.error('Failed to load contacts:', err);
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>お問い合わせ一覧（管理者用）</h1>
      <p>最新100件を表示しています。</p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: 8 }}>ID</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: 8 }}>名前</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: 8 }}>メール</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: 8 }}>サービス</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: 8 }}>件名</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: 8 }}>送信日時</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{c.id}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{`${c.first_name} ${c.last_name}`}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{c.email}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{c.service}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{c.title}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{new Date(c.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AdminPage;
