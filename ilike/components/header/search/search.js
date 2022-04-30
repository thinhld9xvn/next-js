import React, {useEffect, useState} from 'preact/compat'
import { PAGES } from '@constants/constants'
function onClick_displaySearchBox(e, show, setShow) {
    e.preventDefault();
    setShow(!show);
}
export default function Search() {
    const [show, setShow] = useState(false);
    useEffect(() => {        
        document.addEventListener('mouseup', function(e) {
            const target = e.target;
            const searchbarNode = target.closest('.searchbar');
            if ( !searchbarNode || (searchbarNode && !searchbarNode.contains(target)) ) {
                setShow(false);
            }
        })
    }, []);
    return (
        <div className="addon__search">
            <form id="frmSearch" 
                    method="get" 
                    action={PAGES.SEARCH.path}>
                <div className={"searchbar ".concat(show ? 'active' : '')}>
                    <input type="search" 
                            name="s" 
                            id="header-search"
                            placeholder="Tìm kiếm ..." /> 
                    <button type="reset" 
                            className="search-reset"
                            onClick={e => onClick_displaySearchBox(e, show, setShow)}></button>
                    <div className="toggle-button">
                        <a href="#"
                            onClick={e => onClick_displaySearchBox(e, show, setShow)}> 
                            <img src="/static/images/icons/icon__search.png" alt="search" /> 
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}
