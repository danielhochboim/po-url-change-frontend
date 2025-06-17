import { z } from 'zod';

// const BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';
const BASE = 'http://localhost:8000';

// export const ChannelSchema = z.object({
//   name: z.string(),
//   url: z.string().url(),
// });
// export type Channel = z.infer<typeof ChannelSchema>;
export type Channel = {
  name: string;
  url: string;
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(BASE + path, {
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