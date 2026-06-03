import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;

if (!connectionString) {
  console.warn('DATABASE_URL / NEON_DATABASE_URL is not set. DB operations will fail.');
}

const pool = new Pool({ connectionString });

export async function query<T = any>(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query<T>(text, params);
    return res;
  } finally {
    client.release();
  }
}

export default pool;
