export function rewriteStaticPath(staticPagePath) {
    const url = staticPagePath.substr(0, staticPagePath.length - 3); 
    let rewriteUrl = '';
    switch(url) {
        case 'bongda' : 
            rewriteUrl = 'bong-da.html';
            break;
        case 'lichthidau' :
            rewriteUrl = 'lich-thi-dau.html';
            break;
        default :
            rewriteUrl = url === 'index' ? '' : url;
            break;
    }
    return rewriteUrl;
}