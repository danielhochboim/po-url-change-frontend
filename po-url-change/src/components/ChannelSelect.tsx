'use client';
import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Alert, CircularProgress } from '@mui/material';
import { useChannels } from '@/hooks/useChannels';
import UrlEditor from './UrlEditor';

export default function ChannelSelect() {
  const { data, isLoading, error } = useChannels();
  const [selected, setSelected] = useState<string>('');

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;
  
  // Convert the object to array format
  const rows = Object.entries(data ?? {}).map(([name, url]) => ({ name, url }));
  const selectedChannel = rows.find(c => c.name === selected);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="channel-label">Channel</InputLabel>
        <Select
          labelId="channel-label"
          value={selected}
          label="Channel"
          onChange={(e) => setSelected(e.target.value)}
        >
          {rows.map((c) => (
            <MenuItem key={c.name} value={c.name}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedChannel && <UrlEditor name={selectedChannel.name} currentUrl={selectedChannel.url} />}
    </>
  );
}