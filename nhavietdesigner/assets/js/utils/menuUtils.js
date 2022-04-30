const TYPES = {
    PAGE : 'page',
    CATEGORY : 'category',
    POST : 'post',
    CUSTOM : 'custom',
    ARCHIVE : 'archive'
};

export function is_page_menu(item) {

    return item.type === TYPES.PAGE;

}

export function is_post_menu(item) {

    return item.type === TYPES.POST;

}

export function is_archive_menu(item) {

    return item.type === TYPES.ARCHIVE;

}

export function isValidateSub(item) {

    return item.childrens && item.childrens.length;

}