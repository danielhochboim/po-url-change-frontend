'use client';

import ChannelSelect from '@/components/ChannelSelect';

export default function Home() {
  return (
    <main className="container mx-auto max-w-2xl p-6 space-y-6">
      <h1 className="text-2xl font-bold">Receiver REST Channels</h1>
      <ChannelSelect />
    </main>
  );
}