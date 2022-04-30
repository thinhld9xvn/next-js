import React, {useEffect, useState} from 'preact/compat'
import Head from 'next/head'
import PostHeader from './components/post-header'
import { useRouter } from 'next/router';
import PostContents from './components/post-contents';
import PostRelated from './components/post-related';
import ModalComments from './components/modal-comments';
import { getUserLoginInfo } from '@js_dir/utils/membership';
import { cloneArray } from '@js_dir/utils/arrayUtils';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';
import { connect } from 'react-redux';
import { getAds } from '@lib/getAdsApi';
import { getSiteOption } from '@lib/getSiteOptionApi';
import { getMenuItems } from '@lib/getMenuItemsApi';
import { getSlugObjFromUrl } from '@js_dir/utils/urlUtils';
import { getArticle } from '@lib/getArticleApi';
//import { getFirstCategoryIdFromPost } from '@js_dir/utils/categoriesUtils';
import { getPostsList } from '@lib/getPostsListApi';
import { getComments } from '@lib/getCommentsApi';
import { ADS_POSITION, CAT_FEATURED_POSTS_NUM, DEFAULT_BANNER, DEFAULT_POSTS_NUM } from '@constants/constants';
import { getTagApi } from '@lib/getTagApi.js';
import { addExcludes, getArticleFullLink } from '@js_dir/utils/articleUtils';
import { getImageUrlFromAmazonS3 } from '@js_dir/utils/imageUtils';
import { getPostsListRelated } from '@lib/getPostsListRelatedApi';
import { isMobile } from '@js_dir/utils/deviceUtils';
import MobilePostBreadcrumbs from '@templates/mobile/post/mobile-post-breadcrumbs';
import MobilePostHeader from '@templates/mobile/post/mobile-post-header';
import MobilePostMain from '@templates/mobile/post/mobile-post-main';
import MobilePostFooter from '@templates/mobile/post/mobile-post-footer';
import { getFirstCategoryIdFromPost } from '@js_dir/utils/categoriesUtils';
import GlBanner from '../home/widgets/home-gl-banner-widget/gl-banner';
//import { followCategory } from '@lib/followCategoryApi';
function PostPage({ siteOptions, siteMenu,
                    updateSiteOptions,
                    updatePrimaryMenu, ads,
                    updateAds, pageContext, userActiveFullInfo, updateShowFooter }) {
    const router = useRouter();
    //const [locationUrl, setLocationUrl] = useState(null);
    const [isMobileDevice, setMobileDevice] = useState(false);
    const [loading, setLoading] = useState(true);
    const [articleData, setArticleData] = useState(null);
    const [articleComments, setArticleComments] = useState(null);
    const [featuredPostsData, setFeaturedPostsData] = useState(null);
    const [showCommentsBox, setShowCommentsBox] = useState(false);
    //const [breadcrumbsData, setBreadcrumbsData] = useState(null);
    
    useEffect(() => {
        setMobileDevice(isMobile());
    }, []);
    useEffect(async () => { 
        const excludeIds = [];
        if ( router.query.slug ) {
            const slug = getSlugObjFromUrl(router.query.slug);
            updateShowFooter(true);
            setLoading(true);
            setArticleData(null);
            setShowCommentsBox(false);  
            const ads = await getAds();
            let banner_top = ads.filter(e => e.position === ADS_POSITION.POST.TOP);
                banner_top = banner_top.length ? banner_top[0] : null;
            let banner_middle = ads.filter(e => e.position === ADS_POSITION.POST.MIDDLE);
                banner_middle = banner_middle.length ? banner_middle[0] : null;
            updateAds(cloneArray({banner_top, banner_middle}));
            if ( !siteOptions ) {
                const options = await getSiteOption();
                updateSiteOptions(cloneArray(options));
            }
            if ( !siteMenu ) {
                const primaryMenu = await getMenuItems();
                updatePrimaryMenu(cloneArray(primaryMenu));                
            }
            const article = await getArticle(slug);
            const cid = getFirstCategoryIdFromPost(article);
            const pieces = article.list_tags ? article.list_tags.toString().trim().split(' ').map(e => `"${e}"`) : null;            
            article.related = await getPostsListRelated(code);    
            addExcludes(article.related, excludeIds);
            article.in_related = (((await getPostsList(cid, null, DEFAULT_POSTS_NUM)).map(e => e._source))
                                                    .filter(e => e.id !== article.id && excludeIds.indexOf(e.id) === -1 ))
                                                    .filter((e, i) => i < 4);
            addExcludes(article.in_related, excludeIds);
            const featuredPosts = ((await getPostsList(null, null, DEFAULT_POSTS_NUM)).map(e => e._source))
                                            .filter(e => e.id !== article.id && excludeIds.indexOf(e.id) === -1 )
                                            .filter((e, i) => i < CAT_FEATURED_POSTS_NUM);
            setFeaturedPostsData(cloneArray(featuredPosts)); 
            article.tags = pieces ? (await getTagApi(null, pieces)).map(e => e._source) : [];
            article.content = article.content ? article.content.replace(/\{\{related\-in\}\}/ig, '') : '';
            setArticleData(article);  
            const comments = await getComments(article.id);
            setArticleComments(cloneArray(comments));                   
            setLoading(false);            
            document.addEventListener('mouseup', function(e) {
                const target = e.target;                
                const comment_body = document.querySelector('.container__comment');
                if ( comment_body && ! comment_body.contains(target) ) {
                    setShowCommentsBox(false);
                }
            });            
            setTimeout(function() {
                try {
                    const elem = document.querySelector('.module__header');
                    const socials = elem.querySelector('.detail__select');                
                    const offsetTop = elem.getClientRects()[0].top + window.scrollY;
                    const offsetHeight = elem.clientHeight;
                    document.addEventListener('scroll', function() {
                        try {            
                            const tags = document.querySelector('.detail__tag');
                            const offsetTagsTop = tags.getClientRects()[0].top + window.scrollY;
                            const Y = offsetTop + offsetHeight + 100;
                            if ( window.scrollY > Y && window.scrollY < offsetTagsTop - (window.innerHeight) ) {
                                if ( !socials.classList.contains('fixed') ) {
                                    socials.classList.add('fixed');
                                }
                            } 
                            else {
                                if ( socials.classList.contains('fixed') ) {
                                    socials.classList.remove('fixed');
                                }
                            }
                        }  
                        catch {
                        }
                    });                    
                } catch {                    
                }
                setupLazyLoading();
            }, 200);    
        }
    }, [router.query.slug]);
    const { id = '', title = '', introtext = '', meta_keyword = '', image, code } = pageContext || {};
    const {banner_middle} = ads || {};
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={introtext}/>
                {meta_keyword ? (
                    <meta name="keywords" content={meta_keyword}/>
                ) : null}
                <link rel="canonical" href={getArticleFullLink(pageContext)} />
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={introtext}/>
                <meta property="og:type" content="article"/>
                <meta property="og:url" content={getArticleFullLink(pageContext)} />
                <meta property="og:image" content={image ? getImageUrlFromAmazonS3(image) : ''} />
            </Head>
            {!isMobileDevice ? (
                <div className="v-desktop">
                    <main id="main">
                        {/*<Breadcrumbs data = {breadcrumbsData} />*/}
                        <section className="post-detail">
                            <div className="container">
                                <PostHeader loading = {loading}
                                            data = {articleData}
                                            states = {{
                                                showCommentsBox,
                                                setShowCommentsBox,
                                                articleComments
                                            }} />
                                <PostContents loading = {loading}
                                            data = {articleData}
                                            states = {{
                                                showCommentsBox,
                                                setShowCommentsBox,
                                                articleComments
                                            }} />
                                <div style={{marginTop: '20px'}}>
                                    <GlBanner loading = {loading} 
                                              data = {banner_middle} />
                                </div>
                            </div>
                        </section>
                        
                        <PostRelated loading = {loading}
                                    data = {articleData}
                                    featuredlists = {featuredPostsData} />
                        <ModalComments loading = {loading}
                                    article_id = {id}
                                    userinfo = {userActiveFullInfo}
                                    data = {articleComments}
                                        states = {{
                                            showCommentsBox,
                                            setShowCommentsBox
                                        }} />
                    </main>
                </div>
            ) : (
                <div className="v-mobile">
                    <div className="wrapper">
                        <main id="main" className="main-mobile">
                            <div className="main-mobile-page main-post-page">
                                <div className="container">
                                    <MobilePostBreadcrumbs loading = {loading}
                                                            data = {articleData} />
                                    <MobilePostHeader loading = {loading}
                                                      data = {articleData} />
                                    <MobilePostMain loading = {loading}
                                                    data = {articleData} />
                                    <MobilePostFooter loading = {loading}
                                                      data = {articleData}
                                                      featuredlists = {featuredPostsData} />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            )}
        </>
    )
}
function mapStateToProps(state) {   
    return {
        siteOptions : state.globalReducer.siteOptions,
        ads : state.globalReducer.ads,
        siteMenu : state.globalReducer.siteMenu,
        isLoggedIn : state.globalReducer.isLoggedIn,
        userActiveInfo : state.globalReducer.userActiveInfo,
        userActiveFullInfo : state.globalReducer.userActiveFullInfo
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        }),
        updatePrimaryMenu : async (v) => await dispatch({
            type : "UPDATE_PRIMARY_MENU",
            payload : v
        }),
        updateAds : async (v) => await dispatch({
            type : "UPDATE_Ads",
            payload : v
        }),
        updateShowFooter : async (v) => await dispatch({
            type : "UPDATE_SHOW_FOOTER",
            payload : v
        }) 

    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
