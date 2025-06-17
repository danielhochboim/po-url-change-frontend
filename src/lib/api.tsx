import { z } from 'zod';

const BASE = process.env.NEXT_PUBLIC_API_BASE as string;

export const Channel = z.object({
  name: z.string(),
  url: z.string().url(),
});
export type Channel = z.infer<typeof Channel>;

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export const api = {
  list: () => request<Channel[]>('/channels'),
  get: (name: string) => request<{ url: string }>(`/channels/${name}`),
  patch: (name: string, url: string) =>
    request<Channel>(`/channels/${name}`, {
      method: 'PATCH',
      body: JSON.stringify({ url }),
    }),
};