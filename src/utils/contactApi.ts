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
    const body = await response.text();
    let errorMessage = '送信に失敗しました。';
    try {
      const json = JSON.parse(body);
      if (json?.message) {
        errorMessage = json.message;
      }
    } catch {
      // ignore invalid json
    }
    throw new Error(errorMessage);
  }

  return response.json();
}
