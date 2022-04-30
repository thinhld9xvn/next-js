import { fetchAPI } from "./api";

export async function getAds() {
    const params = {
        variables : {
            pretty : 'true'
        }
    };
    const data = await fetchAPI('ads/_search', 'GET', params, null, false, 2);
    return data.hits.hits.map(e => e._source);
}