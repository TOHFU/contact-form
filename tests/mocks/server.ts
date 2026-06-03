import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export const handlers = [
  // API ハンドラーを追加例として記述
  http.get('/api/contact', () => {
    return HttpResponse.json(
      {
        message: 'Contacts retrieved successfully',
        data: [],
      },
      { status: 200 }
    );
  }),

  http.post('/api/contact', async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>;
    return HttpResponse.json(
      {
        message: 'Contact submitted successfully',
        data: {
          id: '1',
          ...body,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  }),
];

export const server = setupServer(...handlers);
