import { toggleBodyScroll } from "@js_dir/utils/deviceUtils";
export function onClick_handleShowHeaderPMenu(props, e) {    
    const {showMenu, setShowMenu, prevent} = props;
    if ( typeof(prevent) === 'undefined' || 
            (typeof(prevent) !== 'undefined' && prevent) ) {
        e.preventDefault();
    }
    toggleBodyScroll();
    setShowMenu(!showMenu);
}