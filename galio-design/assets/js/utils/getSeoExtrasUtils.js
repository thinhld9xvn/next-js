function getSeoExtras(result, data) {

    const {id, url, rewrite} = data;
    
    // những trang có id = -1 là không có trong hệ thống trang wordpress

    if ( id !== -1 ) {
    
        let myedge = result.edges.filter(edge => parseInt(edge.node.databaseId) === parseInt(id) )[0]; 

        let str = JSON.stringify(myedge);
                
            str = str.replace(new RegExp(`${url === '/' ? url.concat('/') : url}`, "ig"), 
                                rewrite === '/' ? '' : rewrite );

        return JSON.parse(str).node.seo;

    }

    return {};

}

module.exports.getSeoExtras = getSeoExtras;