export function getPageData(data) {
    if ( !data || !data.nodes ) return false;
    return data.nodes[0];
}
export function getArticlePageData(data) {
    if ( !data ) return false;
    return data[0];
}