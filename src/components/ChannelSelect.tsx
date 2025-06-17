'use client';

import { useState } from 'react';
import { useChannels } from '@/hooks/useChannels';
import UrlEditor from './UrlEditor';

export default function ChannelSelect() {
  const { data: channels, isLoading, error } = useChannels();
  const [selected, setSelected] = useState<string | null>(null);

  if (isLoading) return <p>Loading channels…</p>;
  if (error) return <p className="text-red-600">{error.message}</p>;

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="mb-1 block font-medium">Choose channel</span>
        <select
          onChange={(e) => setSelected(e.target.value || null)}
          defaultValue=""
          className="mt-1 w-full rounded border p-2"
        >
          <option value="" disabled>
            -- select --
          </option>
          {channels!.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      {selected && <UrlEditor name={selected} />}
    </div>
  );
}