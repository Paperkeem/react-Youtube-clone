import axios from 'axios';

export default class Youtube {
  
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    })
  }
  
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
  }

  async channelImageURL(id) {
    return axios
    .get('https://youtube.googleapis.com/youtube/v3/channels', {
        params: {
          part: 'snippet',
          id: id,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url)
  }

  async #searchByKeyword(keyword) {
    return axios
      .get('https://youtube.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          q: keyword,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios
      .get('https://youtube.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
        },
      })
      .then((res) => res.data.items);
  }

  async related(id) {
    return axios
      .get('https://youtube.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          relatedToVideoId: id,
          type: 'video',
          maxResults: 25,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
}