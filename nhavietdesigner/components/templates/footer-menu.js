import React, {useState} from 'preact/compat'

import Link from 'next/link'
import { addPathToUrl } from '@js_dir/utils/urlUtils';
import { is_page_menu, 
            is_post_menu, 
                is_archive_menu, 
                    isValidateSub } from '@js_dir/utils/menuUtils';

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
            
            <Link href={url}>
                <a>{item.text}</a>
            </Link>            

            {isValidateSub(item) ? (

                <>
                    <ul>
                        {arrSubItems}
                    </ul>
                </>

            ): null}

        </li>
    )

}

export default function FooterMenu({ data }) {

    const arrMenuItems = [];

    data.map(item => arrMenuItems.push(getTempMenuItem(item)));

    return (

        <>
            {arrMenuItems}
        </>

    )

}
