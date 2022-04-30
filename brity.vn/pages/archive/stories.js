import React, { useEffect } from 'preact/compat'
import StoriesLayout from "@components/stories-layout"
import { PAGE_URLS, PAGE_WP_URLS } from "@constants/constants";
import { getInitPropsJsonData } from "@js_dir/utils/data/getInitPropsJsonDataUtils";
import { getSeoExtras } from "@js_dir/utils/getSeoExtrasUtils";
import { getAllPages } from "@lib/getAllPagesApi";
import { getSlidersList } from "@lib/getSlidersListApi";
import { getStoriesPostType } from "@lib/getStoriesPostTypeApi";
import { setNotiTimer } from '@js_dir/utils/notificationsUtils';

export default function StoriesArchive(pageContext) {

    useEffect(() => {

        const tmrNoti = setInterval(setNotiTimer, 5000);

        return () => {
            clearInterval(tmrNoti);
        }
    
    }, []);

    return <StoriesLayout pageContext = {pageContext} />
}

export async function getStaticProps() {

    const props = await getInitPropsJsonData();  

    const result = await getAllPages();
    const stories = await getSlidersList();
    const option = await getStoriesPostType();

    const pageContext = {
        data : {
            heading : option.heading,
            description: option.description,
            label : option.label,
            extras : {
                stories: [...stories]
            },
            seo : getSeoExtras(result, {
                id : PAGE_WP_URLS.STORIES.id,
                url : PAGE_WP_URLS.STORIES.url,
                rewrite : PAGE_URLS.STORIES
            }),
            ...props
        }
    };

    return {
        props: {
            ...pageContext
        },
        revalidate: 10
    }

}