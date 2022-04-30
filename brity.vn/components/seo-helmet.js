import React from 'preact/compat'
import Head from 'next/head'
import { SITE_LOCALE, SITE_LANG, WP_API_WEBSITE_URL, WP_WEBSITE_URL } from '@constants/constants'

function SeoHelmet({ data }) {

    return (

        <>
            <Head>                
                <title>{data.title}</title>
                <meta name="description" 
                      content={data.metaDesc || ''} /> 
                <meta name="keywords" 
                      content={data.metaKeywords || ''} /> 
                <meta name="robots" 
                      content={data.metaRobotsNoindex 
                                    && data.metaRobotsNofollow ? `${data.metaRobotsNoindex}, ${data.metaRobotsNofollow}` : ''} /> 
                <meta property="og:locale" content={SITE_LOCALE} />
                <meta property="og:type" content={data.opengraphType || ''} />
                <meta property="og:title" content={data.opengraphTitle || ''} />
                <meta property="og:description" content={data.opengraphDescription || ''} />
                <meta property="og:url" content={data.opengraphUrl ? data.opengraphUrl.replace(new RegExp(WP_API_WEBSITE_URL, 'ig'), WP_WEBSITE_URL) : ''} />
                <meta property="og:site_name" content={data.opengraphSiteName || ''} />
                <meta property="article:modified_time" content={data.opengraphModifiedTime || ''} />
                <meta property="og:image" content={data.opengraphImage?.mediaItemUrl ? data.opengraphImage.mediaItemUrl : ''} />
                <meta property="og:width" content={data.opengraphImage?.mediaDetails.width ? data.opengraphImage.mediaDetails.width : ''} />
                <meta property="og:height" content={data.opengraphImage?.mediaDetails.height ? data.opengraphImage.mediaDetails.height : ''} />
                <meta property="twitter:title" content={data.twitterTitle || ''} />
                <meta property="twitter:description" content={data.twitterDescription || ''} />
            </Head>

        </>

    )
        
}

export default SeoHelmet