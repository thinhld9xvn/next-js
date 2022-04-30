import React, {useState, useEffect} from 'preact/compat'
import { useRouter } from 'next/router';
import { cloneArray } from '@js_dir/utils/arrayUtils';
import { connect } from 'react-redux';
function BannerAds({ data, bannerScripts, updateBannerScripts }) {
  const router = useRouter();
  const [html, setHtml] = useState('');
  useEffect(() => { 
      const scripts = cloneArray(bannerScripts);
      if ( embed_code ) {
        const key_from ='<script src=';
        const key_to = ' async></script>';
        const from = embed_code.indexOf(key_from);
        const to = embed_code.indexOf(key_to);
        if ( from !== -1 && to !== -1 ) {
          let src = embed_code.substr(from + key_from.length + 1, (to - 1) - (from + key_from.length + 1));
          setHtml(embed_code.substr(0, from));
          if (scripts.indexOf(src) === -1) {
            scripts.push(src);
          }
          updateBannerScripts(cloneArray(scripts));
        }    
        else {
          setHtml(embed_code);
        }            
      }
  }, [, router.query.slug, data]);
  if ( !data ) return <></>;  
  const {embed_code} = data || {};
  console.log(html);
  return (
    <>
      {html ? (
        <div className="embbed-banner" dangerouslySetInnerHTML={{
            __html : html
        }}></div>
      ) : null}
    </>
  )
}
function mapStateToProps(state) {   
  return {
    bannerScripts: state.globalReducer.bannerScripts
  }
}
function mapDispatchToProps(dispatch) {
  return {
      updateBannerScripts : async (v) => await dispatch({
          type : "UPDATE_BANNER_SCRIPTS",
          payload : v
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BannerAds);
