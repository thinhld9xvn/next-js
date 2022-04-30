import React, {useState} from 'preact/compat'
import Link from 'next/link'
import { addPathToUrl } from '@js_dir/utils/urlUtils';
import { is_page_menu, 
            is_post_menu, 
                is_archive_menu, 
                    isValidateSub } from '@js_dir/utils/menuUtils';
var is_mobile = false;
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
        <li key={item.id}>
            {is_mobile && isValidateSub(item) ? 
                    <span>{item.text}</span> : 
                        <Link href={url}>
                            <a>{item.text}</a>
                        </Link>
            }
            {isValidateSub(item) ? (
                <>
                    <ul className={!is_mobile ? "vk-menu__child" : ""}>
                        {arrSubItems}
                    </ul>
                </>
            ): null}
        </li>
    )
}
export default function HeaderPrimaryMenu({ data, mobile = false }) {
    const arrMenuItems = [];
    is_mobile = mobile;
    data.map(item => arrMenuItems.push(getTempMenuItem(item)));
    return (
        <>
            {arrMenuItems}
        </>
    )
}
