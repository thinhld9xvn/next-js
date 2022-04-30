import React, {useEffect} from 'preact/compat'
import { BLANK_IMAGE, ERROR_THUMBNAIL } from '@constants/constants';
import PostTags from './post-tags';
import PostContentLoading from './post-content-loading';
import PostRelatedTiny from './post-related-tiny';
import { useRouter } from 'next/router';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';
import PostSocial from './post-header/post-social';
const checkImage = (path) =>
    new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve({path, status: 'ok'});
        img.onerror = () => resolve({path, status: 'error'});
        img.src = path;
    });
export default function PostContents({ loading = true, data = null, states = null }) {
    const router = useRouter();
    useEffect(() => { 
        setTimeout(function() {
            try {
                const element = document.querySelector('.detail__desc');
                const imagesTag = element.querySelectorAll('img');
                if ( imagesTag ) {
                    imagesTag.forEach((img, i) => {
                        const src = img.getAttribute('src');
                        checkImage(src).then(function(results) {
                            if ( results.status === 'error' ) {
                                img.setAttribute('src', ERROR_THUMBNAIL);
                                img.removeAttribute('width');
                                img.removeAttribute('height');
                                img.removeAttribute('style');
                            }
                            else {
                                img.classList.add('loading-img');
                                img.setAttribute('data-src', src);
                                img.dataset['src'] = src;
                                img.setAttribute('src', BLANK_IMAGE);
                            }
                            setTimeout(function() {
                                setupLazyLoading();
                            }, 100);
                        });
                    });
                }
            } catch (err) {}
        }, 200);
    }, [router.query.slug, loading]);
    if ( loading ) {
        return (
            <PostContentLoading />
        )
    }
    const {tags, content} = data;     
    return (
        <div className="module__content">
            <div className="detail__desc"
                 dangerouslySetInnerHTML={{
                     __html : content
                 }}>
            </div>
            <PostTags data = {tags} />
            <div className="module__header container__detail">
                <div className="detail__control">
                    <PostSocial data = {data}
                                states = {states} />
                </div>
            </div>
            <PostRelatedTiny data = {data} />
        </div>
    )
}
