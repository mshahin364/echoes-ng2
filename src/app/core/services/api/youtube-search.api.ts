import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { YoutubeApiService } from '../youtube-api.service';

/* 
  a murder robot dog should be composed of:
  murderer
  driver
  return Object.assign({}, state, murderer, driver)
  
  A Youtube Api Service Performs api requests to youtube
  using Http Service Class 
  it should support youtube's client api CRUD methods:
  list, remove, insert, update (?check)
  
*/

// i.e:
// A Youtube Search Api should be composed of:
//  a video searcher
//  request config builder
//  headers builder
//  authorizer
@Injectable()
export class YoutubeSearchApi extends YoutubeApiService {

}

export function searchApiFactory() {
  return (http: Http) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';
    const options = {
      url: url,
      http: http,
      idKey: 'type'
    };
    const api = new YoutubeApiService(options);
    api.config.set('part', 'snippet,id');
    api.config.set('q', '');
    api.config.set('type', 'video');
    return api;
  };
};
