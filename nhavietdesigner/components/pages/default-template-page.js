import React from 'preact/compat'

export default function DefaultTemplatePage({ data }) {

    const {id, title, excerpt, contents, default_banner} = data;

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
                        <h1 className="vk-blog-detail__title"
                            dangerouslySetInnerHTML={{
                                __html : title
                            }}>
                            
                        </h1>
                        <div className={`${id} post type-post status-publish format-standard has-post-thumbnail`} 
                                id={id}>
                            <div className="entry"
                                 dangerouslySetInnerHTML={{
                                     __html : contents
                                 }}>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
