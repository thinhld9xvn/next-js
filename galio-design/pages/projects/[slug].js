import React from 'preact/compat'
import SingleDuAnLayout from '@components/single-duan-layout';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getProjectPathsList } from '@lib/getProjectPathsListApi';
import { getProjectArticle } from '@lib/getProjectArticleApi';
import { LANGUAGES } from '@constants/constants';
import { getSlugByLocale } from '@js_dir/utils/urlUtils';
import { getProjectSeoArticle } from '@lib/getProjectSeoArticleApi';

const PROJECT_PREFIX = 'projects';

export default function SingleDuAn({ pageContext }) {
    return (
        <SingleDuAnLayout pageContext = {pageContext} />
    )
}

export async function getStaticProps(context) {
    const {locale, params} = context;
    const {slug} = params;
    const options = await getSiteOptions(locale);
    const {getProjectsList} = await getProjectArticle(locale, slug);
    const projectData = getProjectsList[0];
    const {projects : seoProjectData} = await getProjectSeoArticle(projectData.id);
    const {getProjectsList : paths} = await getProjectPathsList(locale);
    const data = {...projectData, seoProjectData};
    const index = paths.findIndex(path => getSlugByLocale(path.url) === slug);
    const previous = index - 1 >= 0 ? paths[index - 1] : null;
    const next = index + 1 < paths.length ? paths[index + 1] : null;
    //console.log(index, previous, next);

    return {
      props: {
        pageContext : {
          options : {...options},
          data : {...data},
          navigation : {
            previous,
            next
          }
        }
      },
      revalidate: 10
    }
}

export async function getStaticPaths() {
    
    const {getProjectsList : viPaths} = await getProjectPathsList(LANGUAGES.vi, PROJECT_PREFIX);
    const {getProjectsList : enPaths} = await getProjectPathsList(LANGUAGES.en, PROJECT_PREFIX);
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
