import { getArticleData, getArticleFullLink } from '@js_dir/utils/articleUtils';
import { getFbShareLink, getLkShareLink, getTwShareLink } from '@js_dir/utils/socialUtils';
import React from 'preact/compat'
import { connect } from 'react-redux';

function MobilePostShares({data, updateShowPostCommentsModal}) {
    const {comment_count} = getArticleData(data);
    const handleShowModal = (e) => {
        e.preventDefault();
        updateShowPostCommentsModal(true);
    }
    return (
        <div className="mb-post-page-metadata mb-metadata mb-single-metadata mb-single-metadata-pb flex">
            <div className="mb-single-shares mb-single-tools mb-navig-shares">
                <a className="shareicons fbshares" 
                    href={getFbShareLink(getArticleFullLink(data))}
                    target="__blank">
                    <span className="fa fa-facebook"></span>
                </a>
                <a className="shareicons instshares" 
                    target="__blank" 
                    href={getLkShareLink(getArticleFullLink(data))}>
                    <span className="fa fa-linkedin"></span>
                </a>
                <a className="shareicons twshares" 
                    target="__blank" 
                    href={getTwShareLink(getArticleFullLink(data))}>
                    <span className="fa fa-twitter"></span>
                </a>
            </div>
            <div className="mb-single-tools mb-navig-tools padleft5">
                <a className="comments-count commentsbox-modal single-comments-count" 
                    href="#"
                    onClick={handleShowModal}>
                    <strong>{comment_count}</strong>
                </a>
                <a className="post-bookmark single-bookmark" href="#"> </a>
            </div>
        </div>
    )
}
function mapStateToProps(state) {   
    return {
        showPostCommentsModal : state.globalReducer.showPostCommentsModal
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updateShowPostCommentsModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_POST_COMMENTS_MODAL",
            payload : v
        }),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(MobilePostShares);
