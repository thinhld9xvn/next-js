import { getSlug } from "@js_dir/utils/urlUtils";
import { getSlidersList } from "./getSlidersListApi";

export async function getStory(slug) {

    return (await getSlidersList()).filter(item => item.slug === slug)[0];

}