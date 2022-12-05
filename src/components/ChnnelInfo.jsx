import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChnnelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ['channel', id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  
  return (
    <div className='flex my-4 mb-8 items-center'>
      {url && <img src={url} alt="" className='rounded-full w-10 h-10' />}
      <p className='text-lg font-medium m-2'>{name}</p>
    </div>
  );
}

