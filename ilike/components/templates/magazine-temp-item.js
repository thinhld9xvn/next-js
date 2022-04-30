import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link';
import { BLANK_IMAGE, DEFAULT_THUMBNAIL } from '@constants/constants';
import { checkImage, getImageUrlFromAmazonS3 } from '@js_dir/utils/imageUtils';
import { isDiff } from '@js_dir/utils/arrayUtils';
export default function MagazineTempItem({ data, boxClassName = '', headingClassName = '' }) {
    const {title, link, slug, image} = data;
    const [imageUrl, setImageUrl] = useState(data ? getImageUrlFromAmazonS3(image) : DEFAULT_THUMBNAIL);
    useEffect(() => {
        /*checkImage(myImageUrl).then(results => {
            results.status === 'ok' ? isDiff(imageUrl, myImageUrl) && setImageUrl(getImageUrlFromAmazonS3(image)) : 
                                    isDiff(imageUrl, DEFAULT_THUMBNAIL) && setImageUrl(DEFAULT_THUMBNAIL);
        });*/
        isDiff(imageUrl, image) && setImageUrl(getImageUrlFromAmazonS3(image) || DEFAULT_THUMBNAIL);
    }, []);
    return (
        <div className={"magazine__item ".concat(boxClassName)}>
            <Link href={link || slug}>
                <a className="frame" title={title}>
                    <img data-src={imageUrl} src={BLANK_IMAGE} alt={title} />
                </a>
            </Link>
            <h3 className={"magazine__title ".concat(headingClassName)}>
                <Link href={link || slug}>
                    <a title={title}>{title}</a>
                </Link>
            </h3>
        </div>
    )
}
