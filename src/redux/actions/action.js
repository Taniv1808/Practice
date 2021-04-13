import {
  CONVERSATION_API,
  OneToOneConversation_API,
  SCROLL_API,
  SEARCH_API,
} from '../../config/urls';
import {apiGet, apiPost} from '../../utils/utils';
import types from '../types';

export function scrollApi(data) {
  return new Promise((resolve, reject) => {
    apiPost(SCROLL_API, data)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function find_text(query) {
  let searchUrl = `${SEARCH_API}` + query;
  return apiGet(searchUrl);
}

export function conversation(query) {
  return apiGet(`${CONVERSATION_API}${query}`);
}

export function OneToOneText(query) {
  return apiGet(`${OneToOneConversation_API}${query}`);
}
