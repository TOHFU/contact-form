import type { ContactFormValues } from '@/pages/contact';

export type ContactSubmitResponse = {
  id: string;
  createdAt: string;
  message: string;
};

export async function submitContactForm(values: ContactFormValues): Promise<ContactSubmitResponse> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    // Try to parse JSON error message
    let errorMessage = response.status >= 500 ? 'サーバーエラーが発生しました。時間をおいて再度お試しください。' : '送信に失敗しました。';
    try {
      const json = await response.json();
      if (json?.message) {
        errorMessage = json.message;
      }
    } catch {
      // fallback to text
      try {
        const text = await response.text();
        if (text) errorMessage = text;
      } catch {
        // ignore
      }
    }
    const err = new Error(errorMessage);
    // attach status for callers if needed
    (err as any).status = response.status;
    throw err;
  }

  return response.json();
}
