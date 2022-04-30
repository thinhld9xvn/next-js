import React, { useEffect } from 'preact/compat'
import SingleStoryLayout from "@components/single-story-layout"
import { getInitPropsJsonData } from "@js_dir/utils/data/getInitPropsJsonDataUtils";
import { getSlidersList } from "@lib/getSlidersListApi";
import { getStory } from "@lib/getStoryApi";
import { setNotiTimer } from '@js_dir/utils/notificationsUtils';

export default function SingleStoriesArchive(pageContext) {

    useEffect(() => {

        const tmrNoti = setInterval(setNotiTimer, 5000);

        return () => {
            clearInterval(tmrNoti);
        }
    
    }, []);

    return <SingleStoryLayout pageContext = {pageContext} />

}

export async function getStaticProps({ params }) {

    const props = await getInitPropsJsonData();  

    const stories = await getSlidersList();
    const story = await getStory(params.slug);
    const pageContext = {
        data : {
        id : story.id,
        title : story.text,
        url : story.url,
        extras : {
            story : {...story},
            stories : [...stories]
        },
        seo : story.seo,
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

export async function getStaticPaths() {
    
    const stories = await getSlidersList();

    return {
    paths: stories.map((story) => {
        return {
        params: {
            slug: story.slug,
        },
        }
    }),
    fallback: 'blocking',
    }

}