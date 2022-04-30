import { isEmptyObject } from '@js_dir/utils/arrayUtils';
import { populateCommentsList } from '@js_dir/utils/commentsUtils';
import React, {useState} from 'preact/compat'
import CommentItem from './modal-comments/comment-item';
import ModalFilter from './modal-comments/modal-filter';
import ModalHeader from './modal-comments/modal-header';
import ResponseBox from './modal-comments/response-box';
export default function ModalComments({ loading = true, article_id = null, userinfo = null, data = null, states = null }) {
    const [userTag, setUserTag] = useState(null);    
    if ( loading ) {
        return (
            <></>
        )
    }
    const {showCommentsBox, setShowCommentsBox} = states;
    const commentsLength = data.length;
    const arrCommentsList = [];
    const commentsListData = populateCommentsList(data);
    commentsListData.map(item => {
        arrCommentsList.push(<CommentItem data = {item}
                                          states = {{userinfo, setUserTag}} />);
    });    
    return (
        <div className={`modal-comment `.concat(showCommentsBox ? 'active' : '')}>
            <div className="container__comment">
                <ModalHeader data = {{setShowCommentsBox}} />
                <div className="module__content">
                    <ModalFilter length = {commentsLength} />
                    <div className={"comment__body ".concat(userinfo ? '__fit' : '')}>
                        {arrCommentsList}
                    </div>
                    {!isEmptyObject(userinfo) ? (
                        <div className="comment__response">
                            <ResponseBox article_id = {article_id}
                                         states = {{userTag, setUserTag}} />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}
