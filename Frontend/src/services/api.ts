import { ENV } from '../config/env';

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
};

export async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const baseUrl = ENV.MOVIE_API_BASE_URL;

  if (!baseUrl) {
    throw new Error('MOVIE_API_BASE_URL is not configured. Add it to .env.');
  }

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      method: options.method ?? 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(ENV.MOVIE_API_KEY ? { Authorization: `Bearer ${ENV.MOVIE_API_KEY}` } : {}),
        ...options.headers,
      },
      ...(options.body ? { body: JSON.stringify(options.body) } : {}),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown network error';
    throw new Error(`API request error: ${message}`);
  }
}