import React from 'preact/compat'
import SingleBlogLayout from '@components/single-blog-layout';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { LANGUAGES } from '@constants/constants';
import { getSlugByLocale } from '@js_dir/utils/urlUtils';
import { getArticlePathsList } from '@lib/getArticlePathsListApi';
import { getArticle } from '@lib/getArticleApi';
import { getRelatedArticles } from '@lib/getRelatedArticlesApi';

const HTML_PREFIX = '.html';
export default function SingleBlog({ pageContext }) {
    return (
        <SingleBlogLayout pageContext = {pageContext} />
    )
}

export async function getStaticProps(context) {
    const {locale, params} = context;
    const {slug} = params;
    const slugNotPrefix = slug.substr(0, slug.length - HTML_PREFIX.length);
    const options = await getSiteOptions(locale);
    const {getArticlesList, posts} = await getArticle(locale, slugNotPrefix);
    const {getArticlesList : relatedArticlesList} = await getRelatedArticles(locale, slugNotPrefix);
    const data = {...getArticlesList[0], posts};
    return {
      props: {
        pageContext : {
          options : {...options},
          data : {...data, related : [...relatedArticlesList]},
        }
      },
      revalidate: 10
    }
}

export async function getStaticPaths() {
    
    const {getArticlesList : viPaths} = await getArticlePathsList(LANGUAGES.vi);
    const {getArticlesList : enPaths} = await getArticlePathsList(LANGUAGES.en);
    const paths = viPaths.concat(enPaths);

    return {
      paths: paths.map((item, i) => {
        let {url} = item;        
        url = getSlugByLocale(url);
        return {
          params: {
            slug: url
          }
        }
      }),
      fallback: 'blocking',
    }

  }
