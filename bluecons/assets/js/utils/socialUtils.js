export function getFbShareLink(url) {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}
export function getTwShareLink(url) {
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
}
export function getLkShareLink(url) {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
}