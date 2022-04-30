import React from 'preact/compat'
import TemplateTreeCat from './components/template-tree-cat';
import PdLoadingSquare from '@loading/pd-loading-square';
import { onClick_followCategory } from '@js_dir/utils/categoriesUtils';
import { connect } from 'react-redux';
import { useSession, signIn, signOut } from "next-auth/react"
function formatTitle(title) {
    if ( !title ) return title;
    const myTitle = title.toLowerCase();
    const pieces = myTitle.split('');
    pieces[0] = pieces[0].toUpperCase();
    return pieces.join('');
}
function HeaderMobile({ loading = true, data, setFormatTitle = true, prefixContent = '', treeCategoriesList, updateShowLoginModal }) {
    const {data : session} = useSession();
    let {name = ''} = data || {};
    if ( treeCategoriesList ) {
        const {data : treeCategoriesData} = treeCategoriesList;
        const parentCat = treeCategoriesData[0].data[0];
        name = treeCategoriesList.parent_id === 0 ? name : parentCat.name;     
    }
    return (
        <>
            <div className={"mb-heading-page mb-heading-pb mb-cat-heading-page ".concat(loading ? '' : 'flex flex-align-center flex-justify-space-between')}>
                {loading ? (
                    <>  
                        <div>
                            <PdLoadingSquare size = "small" />
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="mb-cat-heading mb-sjkungfu-folow mb-sjkungfu-heading">
                            <strong>{prefixContent} {setFormatTitle ? formatTitle(name) : name}</strong>
                            {treeCategoriesList ? (
                                <small>2N Theo dõi</small>
                            ) : null}
                        </h2>
                        {treeCategoriesList ? (
                            <a className="mb-button mb-green-button mb-5rounded mb-button-defpad mb-follow-button" 
                                href="#"
                                onClick={e => onClick_followCategory(e, {...data, session}, updateShowLoginModal)}>
                                Theo dõi
                            </a>
                        ) : null}
                    </>
                )}
            </div>
            {loading ? (
                <div className="mtop10">
                    <PdLoadingSquare size = "small" />
                </div>
            ) : (
                <>
                    {treeCategoriesList ? (
                        <div className="mb-treelists">
                            <TemplateTreeCat data = {treeCategoriesList}
                                                activeCat = {data} />
                        </div>
                    ) : null}
                </>
            )}
            
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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile);