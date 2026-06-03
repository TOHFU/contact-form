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

export function createContactRecord(values: ContactPayload) {
  const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}`;

  return {
    id,
    createdAt: new Date().toISOString(),
    ...values,
  };
}
