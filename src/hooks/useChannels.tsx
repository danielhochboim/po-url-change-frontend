import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export const useChannels = () =>
  useQuery({
    queryKey: ['channels'],
    queryFn: api.list,
  });