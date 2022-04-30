import React from 'preact/compat'
import EmagazinePage from '@emagazinepage/emagazine-page'
import { CATPAGE_POSTS_NUM, DEFAULT_PAGE } from '@constants/constants';
import { getMagazineList } from '@lib/getMagazineListApi';
export default function EMagazinePage({ pageContext }) {
    return (
        <EmagazinePage pageContext = {pageContext} />
    )
}
export async function getServerSideProps({ req, res }) { 
  const postsList = await getMagazineList(DEFAULT_PAGE, CATPAGE_POSTS_NUM);
  /*const breadcrumbs = {
    id : CATEGORIES.MAGAZINE.id,
    title : 'iMagazine',
    base : 'category',
    data : []
  }*/
  return {
    props : {
      pageContext : {
        category : {
          postsList
        },
        //breadcrumbs
      }
    }
  }
}
