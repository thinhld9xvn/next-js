import React, {useEffect, useState} from 'preact/compat'
import RelatedPosts from '@components/templates/related-posts';
import { MONTHS } from '@constants/constants';
import { useRouter } from 'next/router';

export default function SingleBlogTemplatePage({ data }) {

    const route = useRouter();

    const [postId, setPostId] = useState(null);
    const [catId, setCatId] = useState(null);

    const {id, title, excerpt, date_created, contents, banner, extras} = data;

    const {default_banner} = extras;

    const {day, month, year} = date_created;

    const monthName = MONTHS[month - 1];

    const cat = data.categories[0];

    useEffect(() => {

        setPostId(id);
        setCatId(cat.id);

    }, [route.query.slug]);

    return (
        <section id="main" className="vk-content">
            <div className="vk-blog">
                <div className="vk-blog__banner" 
                    style={{
                        backgroundImage : default_banner ? `url(${default_banner})` : ``
                    }}>
                    <div className="container">
                    </div>

                </div>

                <div className="container pt-60 pb-60 pt-lg-100 pb-lg-100">

                    <div className="vk-blog-detail__content">
                        <div className="vk-blog-detail__date">
                            <i className="_icon fa fa-newspaper-o"></i>
                            <span className="padLeft5">{day} {monthName} {year}</span>
                        </div>
                        <h1 className="vk-blog-detail__title"
                            dangerouslySetInnerHTML={{
                                __html : title
                            }}>
                            
                        </h1>
                        {banner && (                        
                            <div className="_thumbnail">
                                <img src={banner} alt={title} loading="lazy" />
                            </div>
                        )}
                        <div className={`${id} post type-post status-publish format-standard has-post-thumbnail`} 
                                id={id}>
                            <div className="entry"
                                 dangerouslySetInnerHTML={{
                                     __html : contents
                                 }}>
                                
                            </div>
                        </div>
                    </div>

                    {catId && postId ? (             
                        <RelatedPosts data = {{
                            id : postId,
                            cid: catId
                        }} />
                    ) : null}

                </div>
            </div>
        </section>

    )
}
