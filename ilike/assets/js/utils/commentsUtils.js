var searchedComment = null;

function searchCm(id, cm) {

    if ( searchedComment ) return true;

    if ( parseInt(cm.id) === parseInt(id) ) {

        searchedComment = cm;

    }

    else {

        if ( cm.childrens && cm.childrens.length ) {

            cm.childrens.map(child => searchCm(id, child));

        }

    }

}

export function searchComment(id, commentsList) {    
    
    searchedComment = null;

    commentsList.map(cm => searchCm(id, cm));

    return searchedComment;

}

export function populateCommentsList(data) {

    const listsData = [];

    data.map(item => {

        const {parent_id} = item;
        const pid = parseInt(parent_id);

        if ( pid === 0 ) {

            listsData.push({...item});

        }

        if ( pid > 0 ) {

            const cmItem = searchComment(pid, listsData);

            if ( cmItem ) {

                if ( !cmItem.childrens ) {   
                    
                    cmItem.childrens = [];

                }

                cmItem.childrens.push({...item});

            }

        }

    });

    return listsData;

}