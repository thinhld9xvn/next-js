const { PAGE_URLS, PAGE_WP_URLS } = require("@constants/constants");

function getSeoExtras(result, data) {

    const {id, url, rewrite} = data;
    
    // những trang có id = -1 là không có trong hệ thống trang wordpress

    if ( id !== -1 ) {
    
        let myedge = result.edges.filter(edge => parseInt(edge.node.databaseId) === parseInt(id) )[0]; 
        //console.log(typeof(myedge));

        let str = JSON.stringify(myedge);
                
            str = str.replace(new RegExp(`${url === PAGE_WP_URLS.HOME.url ? url.concat('/') : url}`, "ig"), 
                                rewrite === PAGE_URLS.HOME ? '' : rewrite );

        return JSON.parse(str).node.seo;

    }

    return {};

}

module.exports.getSeoExtras = getSeoExtras;