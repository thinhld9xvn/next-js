import React, {useState, useEffect} from 'preact/compat'
import {connect} from 'react-redux'
import TemplateMenuItem from './template-menu-item';
function TemplatePrimaryMenu({ siteMenu = null }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [menuData, setMenuData] = useState(null);
    useEffect(() => {
        const boxMenuNode = document.querySelector('.box__menu');
        document.addEventListener('mouseup', function(e) {
            const target = e.target;
            if ( boxMenuNode && !boxMenuNode.contains(target) ) {
                setShowMobileMenu(false);
            }
        })
    }, []);
    useEffect(() => {
        const dataMenuList = [];
        siteMenu && siteMenu.map(item => {
            dataMenuList.push(<TemplateMenuItem data = {item} 
                                                states = {{setShowMobileMenu}}
                                                key={item.id} />);
        });
        setMenuData(dataMenuList);
    }, [siteMenu]);
    return (
        <>
            <div className={"addon__menu ".concat(showMobileMenu ? 'active' : '')}>
                <div className="box__menu">
                    <ul className="menu">
                        {menuData}
                    </ul>
                </div>
            </div>
            <button type="button" 
                    className="toggle__menu"
                    onClick={e => setShowMobileMenu(true)}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
        </>
    )
}
function mapStateToProps(state) {   
    return {
        siteMenu : state.globalReducer.siteMenu
    }
  }
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TemplatePrimaryMenu);
