import React from 'preact/compat'

import {Helmet} from "react-helmet";

import { SITE_LOCALE, SITE_LANG, WP_WEBSITE_URL } from '@constants/constants'

function SeoBasicHelmet({ data }) {

    const meta = [        
        {
            property: `og:locale`,
            content: SITE_LOCALE
        }  
       
    ];

    if ( data.description ) {

        meta.push({
            name: `description`,
            content: data.description
        });

    }

    if ( data.keywords ) {

        meta.push({
            name: `keywords`,
            content: data.keywords
        });

    }

    if ( data.metaRobotsNoindex 
            && data.metaRobotsNofollow ) {

        meta.push({
            name: `robots`,
            content: `${data.metaRobotsNoindex}, ${data.metaRobotsNofollow}`
        });
        

    }

    else {

        meta.push({
            name: `robots`,
            content: `index, follow`
        });

    }

    if ( data['og:type'] ) {

        meta.push({
            name: `og:type`,
            content: data['og:type']
        });

    }

    if ( data['og:title'] ) {

        meta.push({
            name: `og:title`,
            content: data['og:title']
        });

    }

    if ( data['og:url'] ) {

        meta.push({
            name: `og:url`,
            content: typeof(window) !== 'undefined' ? data['og:url'].replace(new RegExp(WP_WEBSITE_URL, 'ig'), window.location.origin) : 
                                                      data['og:url']
        });

    }

    if ( data['og:description'] ) {

        meta.push({
            name: `og:description`,
            content: data['og:description']
        });

    }

    if ( data['og:site_name'] ) {

        meta.push({
            name: `og:site_name`,
            content: data['og:site_name']
        });

    }

    if ( data['article:modified_time'] ) {

        meta.push({
            name: `article:modified_time`,
            content: data['article:modified_time']
        });

    }

    if ( data['og:image'] ) {

        meta.push({
            name: `og:image`,
            content: data['og:image']
        });

    }

    if ( data['og:width'] ) {

        meta.push({
            name: `og:width`,
            content: data['og:width']
        });

    }

    if ( data['og:height'] ) {

        meta.push({
            name: `og:height`,
            content: data['og:height']
        });

    }

    if ( data['twitter:title'] ) {

        meta.push({
            name: `twitter:title`,
            content: data['twitter:title']
        });

    }

    if ( data['twitter:description'] ) {

        meta.push({
            name: `twitter:description`,
            content: data['twitter:description']
        });

    }   

    return (

        <>

            <Helmet htmlAttributes={{
                lang : SITE_LANG
            }}
                title={data.title}
                meta={meta}>
            </Helmet>

        </>

    )
        
}

export default SeoBasicHelmet