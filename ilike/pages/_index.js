import React from 'preact/compat'
import HomePage from "@components/pages/home/home-page"
import { getSiteOption } from '@lib/getSiteOptionApi';
import { getAds } from '@lib/getAdsApi';
import { ADS_POSITION, cataloguesEntries, CATEGORIES, DEFAULT_BANNER, DEFAULT_PAGE, DEFAULT_POSTS_NUM, EMAGAZINE_POSTS_NUM, EXPLORE_POSTS_NUM, FEATURED_POSTS_NUM, NEWEST_POSTS_NUM } from '@constants/constants';
import { getPostsList } from '@lib/getPostsListApi';
import { getMenuItems } from '@lib/getMenuItemsApi';
import { getMagazineList } from '@lib/getMagazineListApi';
async function getCataloguesEntriesData(entries) {
  const data = {};
  for ( let i = 0; i < entries.length; i++ ) {
      const item = entries[i];
      data[i] = await new Promise((resolve, reject) => {
          setTimeout(async function() {
              resolve((await getPostsList(item.id, null, EXPLORE_POSTS_NUM)).map(e => e._source));
          }, 100);
      });
  }
  return data;
}
function getNewsPostsList(data) {
  const start = 0,
        end = NEWEST_POSTS_NUM + start;
  return data.filter((e, i) => i >= start && i < end);
}
function getFeaturedPostsList(data) {
  const start = NEWEST_POSTS_NUM,
        end = FEATURED_POSTS_NUM + start;
  return data.filter((e, i) => i >= start && i < end);
}
export default function Home({ pageContext }) { 
  return (
    <HomePage pageContext = {pageContext} />
  )
}
export async function getServerSideProps(ctx) { 
  const siteOptions = await getSiteOption();
  const primaryMenu = await getMenuItems();
  const ads = await getAds();
  let banner_top = ads.filter(e => e.position === ADS_POSITION.HOME.TOP);
      banner_top = banner_top.length ? banner_top[0] : DEFAULT_BANNER;
  let banner_middle1 = ads.filter(e => e.position === ADS_POSITION.HOME.MIDDLE_1); 
      banner_middle1 = banner_middle1.length ? banner_middle1[0] : DEFAULT_BANNER;
  let banner_middle2 = ads.filter(e => e.position === ADS_POSITION.HOME.MIDDLE_2);
      banner_middle2 = banner_middle2.length ? banner_middle2[0] : DEFAULT_BANNER;
  let banner_bottom = ads.filter(e => e.position === ADS_POSITION.HOME.BOTTOM);
      banner_bottom = banner_bottom.length ? banner_bottom[0] : DEFAULT_BANNER;
  const newestPostsList = (await getPostsList(null, null, DEFAULT_POSTS_NUM)).map(e => e._source);
  const newsPostsList = getNewsPostsList(newestPostsList);
  const featuredPostsList = getFeaturedPostsList(newestPostsList);   
  const lifesCatPostsList = (await getPostsList(CATEGORIES.LIFES.id)).map(e => e._source);
  const moviesCatPostsList = (await getPostsList(CATEGORIES.MOVIES.id, null, FEATURED_POSTS_NUM)).map(e => e._source);
  const sportsCatPostsList = (await getPostsList(CATEGORIES.SPORTS.id, null, FEATURED_POSTS_NUM)).map(e => e._source);
  const showbizCatPostsList = (await getPostsList(CATEGORIES.SHOWBIZ.id, null, FEATURED_POSTS_NUM)).map(e => e._source);
  const exploreNewsCataloguesList = await getCataloguesEntriesData(cataloguesEntries);
  const managazinePostsList = (await getMagazineList(DEFAULT_PAGE, EMAGAZINE_POSTS_NUM)).map(e => e._source);
  const description = siteOptions.filter(e => e.option_name === 'description')[0];
  return {
    props : {
      pageContext : {
        siteOptions : {
          title : description.option_value,
          description: description.option_value,
          keywords : '',
          data : siteOptions
        },
        primaryMenu,
        ads : {
          banner_top,
          banner_middle1,
          banner_middle2,
          banner_bottom
        },
        widgets : {
          newsPostsList,
          featuredPostsList,
          lifesCatPostsList,
          moviesCatPostsList,
          sportsCatPostsList,
          showbizCatPostsList,
          exploreNewsCataloguesList,
          managazinePostsList
        }
      }
    }
  }
}
