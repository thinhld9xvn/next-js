import React, { useEffect } from 'preact/compat'
import SingleBlogLayout from "@components/single-blog-layout"

import { getArticlesList } from "@lib/getArticlesListApi"
import { getArticle } from "@lib/getArticleApi"
import { getSeoExtras } from "@js_dir/utils/getSeoExtrasUtils";
import { getAllPosts } from "@lib/getAllPostsApi";
import { getInitPropsJsonData } from "@js_dir/utils/data/getInitPropsJsonDataUtils";
import { setNotiTimer } from '@js_dir/utils/notificationsUtils';

export default function Post(pageContext) {

  useEffect(() => {

      const tmrNoti = setInterval(setNotiTimer, 5000);

      return () => {
          clearInterval(tmrNoti);
      }

  }, []);

  return <SingleBlogLayout pageContext = {pageContext} />
  
}

export async function getStaticProps({ params }) {

  const props = await getInitPropsJsonData(); 

  const result = await getAllPosts();
  const articles = await getArticlesList();
  const post = await getArticle(params.slug);
  const pageContext = {
    data : {
      id : post.id,
      title : post.text,
      url : post.url,
      extras : {
        article : {...post},
        articlesList : [...articles]
      },
      seo : getSeoExtras(result, {
                              id : post.id.substr(5),
                              url : post.old_url,
                              rewrite: post.url
                          }),
      ...props
    }
  };

  return {
    props: {
      ...pageContext
    },
    revalidate: 10
  }

}

export async function getStaticPaths() {
    
    const posts = await getArticlesList();

    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      }),
      fallback: 'blocking',
    }

  }
  