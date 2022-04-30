import { saveFavoriteArticle } from '@js_dir/utils/articleUtils';
import { isUserLogin, logout } from '@js_utils/membership';
import { isDiff } from '@js_utils/arrayUtils'
export async function onClick_savePost(e, data, states ) {
    e.preventDefault();
    const {updateSavedPostsList, setShowLoader, updateShowLoginModal} = states;
    setShowLoader(true);
    const isLoggedIn = await isUserLogin();
    if ( ! isLoggedIn ) {
        updateShowLoginModal(true);
        setShowLoader(false);
        return false;
    }
    const results = await saveFavoriteArticle(data);
    if ( results === null ) {
        setTimeout(function () {
            logout(true);
        }, 1000);
        return true;
    } 
    if ( isDiff(results, null) ) {
        updateSavedPostsList(results); 
    }
    setShowLoader(false);
}