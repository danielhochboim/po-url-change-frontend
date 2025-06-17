'use client';
import { useEffect, useState } from 'react';
import { TextField, Button, Stack, Alert, CircularProgress, Typography, Skeleton } from '@mui/material';
import { useChannel } from '@/hooks/useChannel';

export default function UrlEditor({ name }: { name: string }) {
  const { data, isLoading, error, update } = useChannel(name);
  const [url, setUrl] = useState('');
  const dirty = url !== data?.url;

  useEffect(() => {
    if (data?.url) setUrl(data.url);
  }, [data?.url]);

  if (isLoading) return <CircularProgress sx={{ mt: 2 }} />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  if (data === undefined) {
    return <Skeleton variant="rectangular" height={96} />
  }


  return (
     <Stack spacing={2} sx={{ mt: 3, maxWidth: 600 }}>
      <Typography variant="subtitle1">
        Current URL: <strong>{data}</strong>
      </Typography>
      <TextField
        label={`URL for ${name}`}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        disabled={!dirty || update.isPending}
        onClick={() => update.mutate(url)}
      >
        {update.isPending ? 'Saving…' : 'Save'}
      </Button>
      {update.isSuccess && <Alert severity="success">Saved!</Alert>}
      {update.isError && (
        <Alert severity="error">{(update.error as Error).message}</Alert>
      )}
    </Stack>
  );
}