import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
const DEFAULT_POSTS_NUM = 30;
export async function getNewestPosts(limit = DEFAULT_POSTS_NUM, startIdx = 0) {
      const params = {
            variables : {
                  status: 1
            }
      }
    const data = await fetchAPI('post', 'GET', params);
    const start = startIdx,
          end = limit + startIdx;
    const newestPostsData = data.filter((e, i) => i >= start && i < end );
    return convertObjectToArray(newestPostsData);
  }