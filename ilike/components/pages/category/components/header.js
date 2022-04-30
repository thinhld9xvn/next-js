import React, {useState} from 'preact/compat'
import Link from 'next/link'
import HeaderLoading from './header-loading'
import { getCategoryLink } from '@js_dir/utils/categoriesUtils';
import { default as FollowDefaultButton } from './default-layout/follow-button';
import { default as FollowMagazineButton } from './magazine-layout/follow-button';
import { default as FollowMovieButton } from './movie-layout/follow-button';
import { default as FollowBeautyButton } from './beauty-layout/follow-button';
import { CATEGORY_LAYOUT } from '@constants/constants';
import PdLoadingSquare from '@loading/pd-loading-square';
import { connect } from 'react-redux';
import HeaderAuthorTags from './header-author-tags';
import HeaderAuthorDesc from './header-author-desc';
import { useCallback } from 'react';
function getTempChildCatLists(data, activeCat) {
    const {id, name} = data;
    return (
        <li className={activeCat.id === id || activeCat.parent_id === id ? 'active' : ''}>
            <Link href={getCategoryLink(data)}>
                <a title={name}>
                    {name}
                </a>
            </Link>
        </li>
    )
}
function getTempNavigationBar(loading = true, layout, activeCat, data, updateShowLoginModal) {
    return data.map((item, i) => {
        let arrChildLists = [];
        if ( item.data.length === 1 ) {
            const cat = item.data[0];
            arrChildLists = cat.childrens ? cat.childrens.map(e => getTempChildCatLists(e, activeCat)) : null;
        }
        else {
            arrChildLists = item.data.map(e => getTempChildCatLists(e, activeCat));
        }
        return (
            <div className="banner__group"
                 key={i}>
                {loading ? (
                    <ul>
                        <li style={{ width: "200px" }}>
                            <PdLoadingSquare size = "small" />
                        </li>
                    </ul>
                ) : (
                    <>
                        <ul>
                            {arrChildLists}
                        </ul>
                    </>
                )}
                {!loading && i === 0 ? (
                    <>
                        {layout === CATEGORY_LAYOUT.default ? (
                            <FollowDefaultButton data = {activeCat} props = {{updateShowLoginModal}} />
                        ) : null}
                        {layout === CATEGORY_LAYOUT.magazine ? (
                            <FollowMagazineButton data = {activeCat} props = {{updateShowLoginModal}} />
                        ) : null}
                        {layout === CATEGORY_LAYOUT.movie ? (
                            <FollowMovieButton data = {activeCat} props = {{updateShowLoginModal}} />
                        ) : null}
                        {layout === CATEGORY_LAYOUT.beauty ? (
                            <FollowBeautyButton data = {activeCat} props = {{updateShowLoginModal}} />
                        ) : null}
                    </>
                ) : null}
            </div>
        )
    });
}
function formatTitle(title) {
    if ( !title ) return title;
    const myTitle = title.toLowerCase();
    const pieces = myTitle.split('');
    pieces[0] = pieces[0].toUpperCase();
    return pieces.join('');
}
function Header({ loading = true, 
                    data = null, 
                    treeCategoriesList = null, 
                    prefixContent = '', 
                    layout = 'default',
                    isTag = false,
                    setFormatTitle = true,
                    updateShowLoginModal }) {
    const [shortDesc, setShortDesc] = useState(true);
    const handleToggleShortDesc = useCallback((e) => {
        e.preventDefault();
        setShortDesc(!shortDesc);
    }, [,shortDesc]);
    if ( loading ) {
        return (
            <HeaderLoading />
        )
    }    
    let arrTempNavigationBar = null,
        {name, content, image, profile} = data;
    if ( treeCategoriesList ) {
        const {data : treeCategoriesData} = treeCategoriesList;
        const parentCat = treeCategoriesData[0].data[0];
        name = treeCategoriesList.parent_id === 0 ? data.name : parentCat.name;            
        arrTempNavigationBar = getTempNavigationBar(loading, layout, data, treeCategoriesData, updateShowLoginModal);    
    }
    return (    
        <>
            <section className="banner__global">
                <div className="container">
                    <h1 className={"title__banner ".concat(isTag ? 'title_tags' : '')}>
                        {loading ? (
                            <PdLoadingSquare size = "small" />
                        ) : (
                            <>
                                <small>{prefixContent}</small> <span>{setFormatTitle ? formatTitle(name) : name}</span>
                            </>
                        )}
                    </h1>
                    {arrTempNavigationBar}
                </div>
            </section>
            {isTag ? (
                <>
                    <HeaderAuthorTags data = {{image, profile}} />
                    <HeaderAuthorDesc props = {{content, shortDesc, handleToggleShortDesc}} />
                </>
            ) : null}
        </>
    )
}

function mapStateToProps(state) {   
    return {
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updateShowLoginModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_LOGIN_MODAL",
            payload : v
        }),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Header);
