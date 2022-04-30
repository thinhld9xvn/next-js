import { getPagesList } from './getPagesListApi';
import { getSlug } from "@js_dir/utils/urlUtils";

export async function getPage(slug) {
  
  return (await getPagesList()).filter(page => getSlug(page.slug) === slug)[0];

}