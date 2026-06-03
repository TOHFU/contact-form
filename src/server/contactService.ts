import { z } from 'zod';

export const contactPayloadSchema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
  firstNameKana: z.string().min(1).max(20),
  lastNameKana: z.string().min(1).max(20),
  company: z.string().max(50).optional(),
  email: z.string().min(1).email().max(512),
  postalcode: z.string().max(7).optional(),
  address: z.string().max(100).optional(),
  phone: z.string().max(11).optional(),
  service: z.string().min(1),
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(2000),
  agreement: z.boolean(),
  recaptchaToken: z.string().min(1),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error('reCAPTCHA secret key is not configured.');
  }

  const payload = new URLSearchParams({
    secret: secretKey,
    response: token,
  });

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload,
  });

  if (!response.ok) {
    return false;
  }

  const body = await response.json();
  return body.success === true;
}

import { query } from './db';

export async function createContactRecord(values: ContactPayload) {
  // Ensure table exists (id serial primary key)
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS contacts (
      id TEXT PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      first_name_kana TEXT NOT NULL,
      last_name_kana TEXT NOT NULL,
      company TEXT,
      email TEXT NOT NULL,
      postalcode TEXT,
      address TEXT,
      phone TEXT,
      service TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      agreement BOOLEAN NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
  `;

  await query(createTableSQL);

  const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}`;

  const insertSQL = `
    INSERT INTO contacts(id, first_name, last_name, first_name_kana, last_name_kana, company, email, postalcode, address, phone, service, title, content, agreement)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
    RETURNING id, created_at;
  `;

  const params = [
    id,
    values.firstName,
    values.lastName,
    values.firstNameKana,
    values.lastNameKana,
    values.company ?? null,
    values.email,
    values.postalcode ?? null,
    values.address ?? null,
    values.phone ?? null,
    values.service,
    values.title,
    values.content,
    values.agreement ?? false,
  ];

  const res = (await query(insertSQL, params)) as { rows?: Array<{ id?: string; created_at?: string }> } | null;
  const row = res?.rows?.[0];
  return {
    id: row?.id ?? id,
    createdAt: row?.created_at ?? new Date().toISOString(),
  };
}
