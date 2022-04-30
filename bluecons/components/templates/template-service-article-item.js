import React from 'preact/compat';
import Link from 'next/link';
export default function TemplateServiceArticleItem({ data }) {
    const {title, excerpt, url, thumbnail} = data;
  return (
    <div className="service-item">
        <div className="service-item-text">
            <div className="block-title-primary">
                <h2>
                    <Link href={url}>
                        <a dangerouslySetInnerHTML={{
                              __html : title
                          }}></a>
                    </Link>
                </h2>
                {excerpt ? (
                    <div dangerouslySetInnerHTML={{
                        __html : excerpt
                    }}></div>
                ) : null}
            </div>
            <Link href={url}>
                <a className="see-more">
                    Chi tiết 
                    <img src="/static/images/icon/arrow-long-right.png" alt="" />
                </a>
            </Link>
        </div>        
        <div className="service-item-media">
            {thumbnail ? (
                <Link href={url}>
                    <a>
                        <img src={thumbnail} alt="" />
                    </a>
                </Link>
            ) : null}
        </div>
    </div>
  );
}
