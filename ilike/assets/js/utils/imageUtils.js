export async function checkImage(path) {
    return new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve({path, status: 'ok'});
        img.onerror = () => resolve({path, status: 'error'});
        img.src = path;
    });
}
export function getImageUrlFromAmazonS3(url) {
    if ( !url ) return '';
    if ( url.startsWith('http') ) return url;
    return `https://ilikestatic.s3.ap-southeast-1.amazonaws.com/${url}`;
}