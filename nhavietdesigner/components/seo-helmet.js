import React from 'preact/compat'
import {Helmet} from "react-helmet";

import { SITE_LOCALE, SITE_LANG, WP_WEBSITE_URL } from '@constants/constants'

function SeoHelmet({ data }) {

    const meta = [        
        {
            property: `og:locale`,
            content: SITE_LOCALE
        }  
       
    ];

    if ( data.metaDesc ) {

        meta.push({
            name: `description`,
            content: data.metaDesc
        });

    }

    if ( data.metaKeywords ) {

        meta.push({
            name: `keywords`,
            content: data.metaKeywords
        });

    }

    if ( data.metaRobotsNoindex 
            && data.metaRobotsNofollow ) {

        meta.push({
            name: `robots`,
            content: `${data.metaRobotsNoindex}, ${data.metaRobotsNofollow}`
        });

    }

    if ( data.opengraphType ) {

        meta.push({
            name: `og:type`,
            content: data.opengraphType
        });

    }

    if ( data.opengraphTitle ) {

        meta.push({
            name: `og:title`,
            content: data.opengraphTitle
        });

    }

    if ( data.opengraphUrl ) {

        meta.push({
            name: `og:url`,
            content: typeof(window) !== 'undefined' ? data.opengraphUrl.replace(new RegExp(WP_WEBSITE_URL, 'ig'), window.location.origin) : 
                                                      data.opengraphUrl
        });

    }

    if ( data.opengraphDescription ) {

        meta.push({
            name: `og:description`,
            content: data.opengraphDescription
        });

    }

    if ( data.opengraphSiteName ) {

        meta.push({
            name: `og:site_name`,
            content: data.opengraphSiteName
        });

    }

    if ( data.opengraphModifiedTime ) {

        meta.push({
            name: `article:modified_time`,
            content: data.opengraphModifiedTime
        });

    }

    if ( data.opengraphImage?.mediaItemUrl ) {

        meta.push({
            name: `og:image`,
            content: data.opengraphImage.mediaItemUrl
        });

    }

    if ( data.opengraphImage?.mediaDetails.width ) {

        meta.push({
            name: `og:width`,
            content: data.opengraphImage.mediaDetails.width
        });

    }

    if ( data.opengraphImage?.mediaDetails.height ) {

        meta.push({
            name: `og:height`,
            content: data.opengraphImage.mediaDetails.height
        });

    }

    if ( data.twitterTitle ) {

        meta.push({
            name: `twitter:title`,
            content: data.twitterTitle
        });

    }

    if ( data.twitterDescription ) {

        meta.push({
            name: `twitter:description`,
            content: data.twitterDescription
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

export default SeoHelmet