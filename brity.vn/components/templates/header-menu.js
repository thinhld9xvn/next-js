import React, {useState} from 'preact/compat'

import Link from 'next/link'
import { addPathToUrl } from '@js_dir/utils/urlUtils';

const TYPES = {
    PAGE : 'page',
    CATEGORY : 'category',
    POST : 'post',
    CUSTOM : 'custom',
    ARCHIVE : 'archive'
};

var is_mobile = false;

function is_page_menu(item) {

    return item.type === TYPES.PAGE;

}

function is_post_menu(item) {

    return item.type === TYPES.POST;

}

function is_category_menu(item) {

    return item.type === TYPES.CATEGORY;

}

function is_archive_menu(item) {

    return item.type === TYPES.ARCHIVE;

}

function isValidateSub(item) {

    return item.childrens && item.childrens.length;

}

function onClick_expandSubMenu(e) {

    e.preventDefault();

    const target = e.currentTarget,
          parent = target.closest('li.has-sub');

    target.classList.toggle('active');

    parent.classList.toggle('expand');

}

function getTempMenuItem(item) {

    const arrSubItems = [];

    if ( isValidateSub(item) ) {

        item.childrens.map(sub => arrSubItems.push(getTempMenuItem(sub)));

    }

    const url = addPathToUrl(item.url, is_page_menu(item) ? 'page' : 
                                        ( is_post_menu(item) ? 'post' :
                                            (
                                                is_archive_menu(item) ? 'archive' : null
                                            ) 
                                        ));

    return (

        <li key={item.id} className={isValidateSub(item) ? "has-sub" : ""}>
            
            <Link href={url}>
                <a>{item.text}</a>
            </Link>            

            {isValidateSub(item) ? (

                <>

                    {is_mobile ? (
                        <i className="fas fa-arrow-right"
                           onClick={e => onClick_expandSubMenu(e)}></i>
                    ) : null}

                    <ul>
                        {arrSubItems}
                    </ul>

                </>

            ): null}

        </li>
    )

}

export default function HeaderMenu({ data, isMobile }) {

    const arrMenuItems = [];

    is_mobile = typeof(isMobile) !== 'undefined' ? isMobile : false;

    data.map(item => arrMenuItems.push(getTempMenuItem(item)));

    return (

        <>
            {arrMenuItems}
        </>

    )

}
