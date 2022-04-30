import React, {useState} from 'preact/compat'
import { onClick_savePost } from '@postpage/events/onClick_savePost'
import { isPostSavedInLists } from '@js_dir/utils/articleUtils';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function SavePostButton({ data, savedPostsList, updateSavedPostsList, updateShowLoginModal }) {
    const [showLoader, setShowLoader] = useState(false);
    return (
        <a href="#" 
            className={"detail__icon ".concat(isPostSavedInLists(savedPostsList, data) ? '__saved' : '')}
            title="save"
            onClick={e => onClick_savePost(e, data, {updateSavedPostsList, setShowLoader, updateShowLoginModal})}>
            <i className="fa fa-bookmark-o fa__active" 
                aria-hidden="true"></i>
            {showLoader ? (
                <BeatLoader size={5} css={override} />
            ): null}
        </a>
    )
}
function mapStateToProps(state) {  
    return {
        savedPostsList : state.globalReducer.savedPostsList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateSavedPostsList : async (v) => await dispatch({
            type : "UPDATE_SAVED_POSTS_LIST",
            payload : v
        }),
        updateShowLoginModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_LOGIN_MODAL",
            payload : v
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SavePostButton);
