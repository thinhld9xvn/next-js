import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'preact/compat'
export default function Search({ props }) {
    const router = useRouter();
    const [keywords, setKeywords] = useState('');
    const {showSeachBar, handleShowSearchBar, handleCloseSearchBar} = props;
    useEffect(() => {
        setKeywords(router.query.s ? router.query.s : '');
    }, [, props]);
    return (
        <form action={`/${process.env.SEARCH_PAGE_URL}`} className={"search search-form ".concat(showSeachBar ? 'active' : '')}>
            <i className="fal fa-times icon-close"
                onClick={handleCloseSearchBar}></i>
            <i className="fal fa-search icon-search"
                onClick={handleShowSearchBar}></i>
            <button type="submit"><i className="fal fa-search"></i></button>
            <input className="d-block s" type="text" name="s" autoComplete="Off" value={keywords} placeholder="Tìm kiếm..." />
        </form>
    )
}
