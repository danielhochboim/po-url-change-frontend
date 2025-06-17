'use client';

import { useState, useEffect } from 'react';
import { useChannel } from '@/hooks/useChannel';

export default function UrlEditor({ name }: { name: string }) {
  const { data, isLoading, error, update } = useChannel(name);
  const [url, setUrl] = useState('');
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (data?.url) {
      setUrl(data.url);
      setDirty(false);
    }
  }, [data]);

  if (isLoading) return <p>Loading URL…</p>;
  if (error) return <p className="text-red-600">{error.message}</p>;

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        update.mutate(url);
      }}
    >
      <h2 className="text-lg font-semibold">Edit URL for "{name}"</h2>

      <input
        type="url"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
          setDirty(true);
        }}
        className="w-full rounded border p-2"
      />

      <button
        type="submit"
        disabled={!dirty || update.isPending}
        className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
      >
        {update.isPending ? 'Saving…' : 'Save'}
      </button>

      {update.isSuccess && <p className="text-green-600">Saved!</p>}
      {update.isError && (
        <p className="text-red-600">Error: {(update.error as Error).message}</p>
      )}
    </form>
  );
}