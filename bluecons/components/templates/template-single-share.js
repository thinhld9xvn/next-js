import { getFbShareLink, getLkShareLink, getTwShareLink } from '@js_dir/utils/socialUtils';
import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'preact/compat';

export default function TemplateSingleShare() {
  const [postUrl, setPostUrl] = useState('');
  const router = useRouter();
  useEffect(() => {
    setPostUrl(process.env.SITE_DOMAIN + router.asPath);
  }, []);
  return (
    <div className="new-share">
        <span>Chia sẻ</span>
        <div className="new-share-social">
            <a href={getFbShareLink(postUrl)}><img src="/static/images/icon/icon-fb.png" alt="" /></a>
            <a href={getTwShareLink(postUrl)}><img src="/static/images/icon/icon-tw.png" alt="" /></a>
            <a href={getLkShareLink(postUrl)}><img src="/static/images/icon/icon-ins.png" alt="" /></a>
        </div>
    </div>
  )
}
