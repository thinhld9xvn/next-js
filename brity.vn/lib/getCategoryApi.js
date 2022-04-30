import { getSlug } from "@js_dir/utils/urlUtils";
import { getCategoriesList } from "./getCategoriesListApi";

export async function getCategory(slug) {

    return (await getCategoriesList()).filter(item => getSlug(item.slug) === slug)[0];

}