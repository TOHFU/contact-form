import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { contactPayloadSchema, verifyRecaptchaToken, createContactRecord } from '@/server/contactService';

type ErrorResponse = {
  message: string;
};

type SuccessResponse = {
  id: string;
  createdAt: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  try {
    // Ensure body is an object — Next may provide a string if headers weren't set.
    let body: unknown = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({ message: '不正なJSONが送信されました。' });
      }
    }

    const payload = contactPayloadSchema.parse(body);
    const isValid = await verifyRecaptchaToken(payload.recaptchaToken);

    if (!isValid) {
      return res.status(400).json({ message: 'reCAPTCHAの検証に失敗しました。' });
    }

    const record = await createContactRecord(payload);

    return res.status(200).json({
      id: record.id,
      createdAt: record.createdAt,
      message: 'お問い合わせを受け付けました。',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.errors.map((item) => item.message).join(' ');
      return res.status(400).json({ message });
    }

    // Known client errors handled above; treat others as server errors
    console.error('Contact API error:', error);
    return res.status(500).json({ message: 'サーバーでエラーが発生しました。' });
  }
}
