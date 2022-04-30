import { getCtInfo } from "@lib/getCtInfoApi";
import { getLogoImage } from "@lib/getLogoImageApi";
import { getMenuItems } from "@lib/getMenuItemsApi";

export async function getInitPropsJsonData() {
   
    const logo = await getLogoImage();
    const menu = await getMenuItems();
    const ctinfo = await getCtInfo();

    return {
        header : { 
            logo,
            menu : menu['header-menu']
        },
        ctinfo : {
            menu_footer : menu['footer'],
            menu_support : menu['support'],
            ...ctinfo
        }
    }
    
}