import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

export const useChannel = (name: string | null) => {
  const qc = useQueryClient();

  const details = useQuery({
    enabled: !!name,
    queryKey: ['channel', name],
    queryFn: () => api.get(name!),
  });

  const update = useMutation({
    mutationFn: (url: string) => api.patch(name!, url),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['channels'] });
      qc.invalidateQueries({ queryKey: ['channel', name] });
    },
  });

  return { ...details, update };
};