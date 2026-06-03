import type { ContactFormValues } from '@/pages/contact';

export type ContactSubmitResponse = {
  id: string;
  createdAt: string;
  message: string;
};

export async function submitContactForm(values: ContactFormValues): Promise<ContactSubmitResponse> {
  const payload: ContactFormValues = {
    firstName: values.firstName,
    lastName: values.lastName,
    firstNameKana: values.firstNameKana,
    lastNameKana: values.lastNameKana,
    company: values.company,
    email: values.email,
    postalcode: values.postalcode,
    address: values.address,
    phone: values.phone,
    service: values.service,
    title: values.title,
    content: values.content,
    agreement: values.agreement,
    recaptchaToken: values.recaptchaToken,
  };

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
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
    const err: Error & { status?: number } = new Error(errorMessage);
    // attach status for callers if needed
    err.status = response.status;
    throw err;
  }

  return response.json();
}
