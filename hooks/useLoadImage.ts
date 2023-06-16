import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { Song } from '@/types';

const useLoadImage = (song: Song) => {
  const supabaseClinet = useSupabaseClient();

  if (!song) {
    return;
  }

  const { data: imageData } = supabaseClinet.storage
    .from('images')
    .getPublicUrl(song.image_path);

  return imageData.publicUrl;
};

export default useLoadImage;
