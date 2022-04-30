import { getClientsList } from "@lib/getClientsListApi";
import { getCtInfo } from "@lib/getCtInfoApi";
import { getLogoImage } from "@lib/getLogoImageApi";
import { getMenuItems } from "@lib/getMenuItemsApi";
import { getSlidersList } from "@lib/getSlidersListApi";
import { getSocialNetwork } from "@lib/getSocialNetWorkApi";

export async function getInitPropsJsonData() {
   
    const logo = await getLogoImage();
    const menu = await getMenuItems();
    const stories = await getSlidersList();
    const socials = await getSocialNetwork();
    const ctinfo = await getCtInfo();
    const clients = await getClientsList();

    return {
        stories,
        header : { 
            logo : logo.primary,
            menu : menu.primary
        },
        socials, 
        ctinfo,
        clients
    }
    
}