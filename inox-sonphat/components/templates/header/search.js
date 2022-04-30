import { getPageUrlByLocale } from '@js_dir/utils/urlUtils';
import React, {useEffect, useState, useCallback} from 'react'
export default function Search({ messages, locale }) {
    const [show, setShow] = useState(false);
    const handleToggleSearchBar = useCallback((e) => {
        e.preventDefault();
        setShow(!show);
    }, [show]);
    useEffect(() => {
        document.addEventListener('mouseup', function(e) {
            const target = e.target;
            const searchButton = document.querySelector('.search-open');
            const searchBox = document.querySelector('.search-dropdown');
            if ( !searchBox.contains(target) && 
                    !searchButton.contains(target) ) {
                setShow(false);
            }
        });
    }, []);
    return (
        <>
            <img className="d-md-none px-3 d-inline-block search-open" 
                 src="/static/images/search.png" 
                 alt=""
                 onClick={handleToggleSearchBar} />
            <div className={"px-lg-4 search-dropdown ".concat(show ? 'on' : '')}>
                <form action={getPageUrlByLocale('search', locale)} 
                        className="trans d-flex align-items-center search-frm"
                        method="get">
                    <input className="form-control search-ip"
                            type="text" 
                            required="required" 
                            placeholder={`${messages['search_label']}...`}
                            name="s" />
                    <button className="btn search-btn" type="submit"><img src="/static/images/search.png" alt="" /></button>
                </form>
            </div>
        </>
    )
}
