const runtimeEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
const getEnv = (name: string): string => runtimeEnv[name] ?? '';

export const ENV = {
  MOVIE_API_BASE_URL: getEnv('MOVIE_API_BASE_URL'),
  MOVIE_API_KEY: getEnv('MOVIE_API_KEY'),
};
