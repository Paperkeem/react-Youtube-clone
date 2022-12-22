import { createContext, useContext } from 'react';
import fakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/Youtube';

export const YoutubeApiContext = createContext();
const youtube = new Youtube();

export function YoutubeApiPRovider({children}) {
  return (<YoutubeApiContext.Provider value={{ youtube }}>
    {children}
  </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}