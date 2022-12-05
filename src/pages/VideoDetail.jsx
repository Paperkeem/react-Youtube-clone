import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ChnnelInfo from '../components/ChnnelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { videoId } = useParams();
  const { state: { video } } = useLocation();
  const { title, channelTitle, description, channelId } = video.snippet;

  return (
    <section className='flex flex-col lg:flex-row'>
      {video && (
        <article className='basis-4/6'>
          <iframe id="player" type="text/html" width="100%" height="640"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen="allowFullScreen"
            frameBorder="0"
            title={ title } />
          
          <div className='pt-5'>
            <h2 className='font-bold text-xl'>{title}</h2>
            <ChnnelInfo id={channelId} name={channelTitle} />
            <pre className='whitespace-pre-wrap'>{description}</pre> 
          </div>
        </article>
      )}
      <section className='basis-2/6'>
        <RelatedVideos id={ video.id } />
      </section>
    </section>
  );
}

