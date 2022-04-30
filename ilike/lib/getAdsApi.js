import { fetchAPI } from "./api";
export async function getAds() {
    const params = {
        variables : {
            pretty : 'true',
            q : 'status:1'
        }
    };
    const data = await fetchAPI('quang-cao/_search', 'GET', params, null, false, 2);
    return data.hits.hits.map(e => e._source);
}