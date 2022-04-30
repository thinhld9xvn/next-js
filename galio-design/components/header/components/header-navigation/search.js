import { getSearchUrlByLocale } from '@js_dir/utils/urlUtils';
import { useRouter } from 'next/router';
import React, {useEffect, useState, useRef, useCallback} from 'preact/compat'
function onClick_toggleSearchBar(e, showSearchBars, setShowSearchBars) {
    e.preventDefault();
    setShowSearchBars(showSearchBars.map(e => !e));
}
export default function Search({props}) {
    const {locale} = useRouter();    
    const {showSearchBars, setShowSearchBars, searchBarId} = props;
    const mySearchBarsRef = useRef(showSearchBars);
    const onMouseUpToggleSearchBar = useCallback((e) => {
        const target = e.target;
        mySearchBarsRef.current = showSearchBars;
        const searchBarsCurrents = mySearchBarsRef.current;
        const groups = document.querySelectorAll('.header__right-group');         
        groups.forEach((group, i) => {
            const formSearch = group.querySelector('.form__search');
            const toggleButton = group.querySelector('.btn__toggle-search');
            if (toggleButton.contains(target)) {
            }
            else {
                if (!formSearch.contains(target)) { 
                    searchBarsCurrents[i] = false;
                }     
                else {
                    searchBarsCurrents[i] = true;
                }
            }       
        });
        setShowSearchBars([...searchBarsCurrents]);
    }, [, props]);
    useEffect(() => {        
        document.addEventListener('mouseup', onMouseUpToggleSearchBar)
        return () => {
            document.removeEventListener('mouseup', onMouseUpToggleSearchBar);
        }
    }, [,props]);
    return (
        <div className="addon__search">
            <button type="button" 
                    className="btn btn__toggle-search"
                    onClick={e => onClick_toggleSearchBar(e, showSearchBars, setShowSearchBars)}>
                <img src="/static/images/icons/icon__search.png" alt="icon__search.png" />
            </button>
            <div className={"main__search ".concat(showSearchBars[searchBarId] ? 'active' : '')}>
                <div className="container">
                    <form className="form__search" 
                          method="get"
                          action={getSearchUrlByLocale(locale)}>
                        <input type="text" 
                                placeholder="Tìm kiếm..." 
                                name="s" 
                                autoComplete="off"
                                className="input__search" />
                        <button type="submit" className="btn btn__search">
                            <img src="/static/images/icons/icon__search.png" alt="icon__search.png" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
