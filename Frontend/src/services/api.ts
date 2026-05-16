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
      const errorBody = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;
      throw new Error(errorBody?.message ?? `Request failed with status ${response.status}`);
    }

    const json = (await response.json()) as T | { success: true; data: T };

    if (json && typeof json === 'object' && 'success' in json && json.success && 'data' in json) {
      return json.data;
    }

    return json as T;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown network error';
    throw new Error(`API request error: ${message}`);
  }
}