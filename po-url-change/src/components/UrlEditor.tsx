'use client';
import { useEffect, useState } from 'react';
import { TextField, Button, Stack, Alert, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

interface UrlEditorProps {
  name: string;
  currentUrl: string;
}

export default function UrlEditor({ name, currentUrl }: UrlEditorProps) {
  const [url, setUrl] = useState(currentUrl);
  const qc = useQueryClient();
  const dirty = url !== currentUrl;

  const update = useMutation({
    mutationFn: (newUrl: string) => api.patch(name, newUrl),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['channels'] });
    },
  });

  useEffect(() => {
    setUrl(currentUrl);
  }, [currentUrl]);

  return (
    <Stack spacing={2} sx={{ mt: 3, maxWidth: 600 }}>
      <Typography variant="subtitle1">
        Current URL: <strong>{currentUrl}</strong>
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