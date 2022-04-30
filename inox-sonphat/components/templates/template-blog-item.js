import { convertNumberToStr } from '@js_dir/utils/stringsUtils';
import React from 'preact/compat'
import Link from 'next/link'
export default function TemplateBlogItem({className = '', data}) {
    const {thumbnail, title, url, excerpt, date_created} = data;
    const {day, month} = date_created[0];    
    return (
        <div className={className}>
            <article className="blog-item slide-def-item">
                <figure className="blog-img text-center">
                    <Link href={url}>
                        <a>
                            <img src={thumbnail} />
                        </a>
                    </Link>
                </figure>
                <figcaption className="blog-info">
                    <h3 className="medium d-flex align-items-center py-3">
                        <span className="t4 s30 s48 medium blog-time">{convertNumberToStr(day)}.{convertNumberToStr(month)}</span>
                        <Link href={url}>
                            <a>
                                <span dangerouslySetInnerHTML={{
                                    __html : title
                                }}></span>
                            </a>
                        </Link>
                    </h3>
                    <div className="t5 s15 blog-info-content"
                         dangerouslySetInnerHTML={{
                             __html : excerpt
                         }}>
                    </div>
                </figcaption>
            </article>
        </div>
    )
}
