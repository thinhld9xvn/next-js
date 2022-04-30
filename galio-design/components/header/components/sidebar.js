import React, {useEffect} from 'preact/compat'
import HeaderNavigation from './header-navigation';
import AddonMenu from './sidebar/addon-menu';
import MenuSctrollBar from './sidebar/menu-scrtoll-bar';
import TemplateMenuItem from './sidebar/template-menu-item';
export default function Sidebar({ props, menuListsData }) { 
    const {showSidebar, showSearchBars, setShowSidebar, setShowSearchBars, searchBarId} = props;     
    const menuList = menuListsData.map(item => <TemplateMenuItem data = {item}
                                                                 key = {item.id} />); 
    menuList.push(<HeaderNavigation props = {{showSearchBars, setShowSearchBars, searchBarId}} 
                                    div = {false}
                                    id = "headernavigation" />);  
    useEffect(() => {        
        /* */        
        const menuSctroll = document.querySelector('.menu-sctroll-container');
        const btnToggleMenu = document.querySelector('.toggle__menu');
        const mouseUpEvent = function(e) {
            if ( ! btnToggleMenu.contains(e.target) ) {
                if ( ! menuSctroll.contains(e.target) ) {
                    setShowSidebar(false);
                } 
            }
        }
        document.addEventListener('mouseup', mouseUpEvent);
        return () => {
            document.removeEventListener('mouseup', mouseUpEvent);
        }
    }, []); 
    return (
        <>
            <AddonMenu showSearchBar = {showSearchBars[searchBarId]}
                        showSidebar = {showSidebar}
                        data = {menuList} />
            <MenuSctrollBar data = {menuList}
                            showSidebar = {showSidebar} />
        </>
    )
}