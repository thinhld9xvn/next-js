import { ACCOUNT_DASHBOARD_FAVBOX } from '@constants/constants'
import React from 'preact/compat'
import Link from 'next/link'
import { connect } from 'react-redux';
function handleChooseTab(props, e) {
    const { UpdateAccountTabActiveId, id} = props;
    UpdateAccountTabActiveId(id);
}
function TemplateFavBox({ data, props }) {
    const {id, title, label, button_text, url} = data;
    const {UpdateAccountTabActiveId} = props;
    return (
        <div className="account-sm-entry">
            <label className="mb-section-heading account-sm-ct-text flex flex-align-center nopad">
                <strong className="">{title}</strong>
            </label>
            <label className="mb-section-heading account-sm-entry-no flex flex-align-center nopad">
                {label}
            </label>
            <div className="flex mtop20">
                <Link href={url}>
                    <a className="mb-button mb-account-viewall mb-lg-social-button mb-5rounded mb-black-border w100p"
                        onClick={handleChooseTab.bind(this, {UpdateAccountTabActiveId, id})}>                    
                        <strong>{button_text}</strong>
                    </a>
                </Link>
            </div>
        </div>
    );
}
function IAccountFavoriteDashboard({UpdateAccountTabActiveId}) {
    const arrFavBoxLists = ACCOUNT_DASHBOARD_FAVBOX.map(box => <TemplateFavBox data = {box}
                                                                               key = {box.id}
                                                                               props = {{UpdateAccountTabActiveId}} />);
    return (
        <div className="account-information">
            <h3 className="account-sm-heading">Nội dung</h3>
            <div className="account-entries-cnt">
                {arrFavBoxLists}
            </div>
        </div>
    )
}
function mapStateToProps(state) {   
    return {
        accountTabActiveId : state.globalReducer.accountTabActiveId,
    }
}
function mapDispatchToProps(dispatch) {
return {
    UpdateAccountTabActiveId : async (v) => await dispatch({
        type : "UPDATE_ACCOUNT_TAB_ACTIVE_ID",
        payload : v
    }),

}
}
export default connect(mapStateToProps, mapDispatchToProps)(IAccountFavoriteDashboard);

