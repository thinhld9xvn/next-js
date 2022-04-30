import React, {useState} from 'preact/compat'
import CommentRepItem from './comment-rep-item';
import CommentAvatar from './templates/comment-avatar';
import CommentName from './templates/comment-name';
import CommentTime from './templates/comment-time';
import CommentAnswerButton from './templates/comment-answer-button';
import CommentReplyButton from './templates/comment-reply-button';
import CommentDesc from './templates/comment-desc';
import { isDiff } from '@js_dir/utils/arrayUtils';
export default function CommentItem({ data, states }) {
    const [showRespBox, setShowRespBox] = useState(false); 
    const arrChildCmLists = [];
    const {content, created_at, user, childrens : childLists} = data;
    const {id : userId, name} = user;
    const {userinfo, setUserTag} = states;
    const {user : currentUser = null} = userinfo || {};
    const {id : currentUserId = null} = currentUser || {};    
    const responseLength = childLists ? childLists.length : 0;
    childLists && 
        childLists.map(item => {
        arrChildCmLists.push(<CommentRepItem data = {{item, currentUserId, setUserTag}} />);
    });
    return (
        <div className="group__cm">
            <div className="cm__box">
                <CommentAvatar />
                <div className="cm__content">
                    <CommentName data = {name} />
                    <CommentTime data = {created_at} />
                    <CommentDesc data = {content} />
                    <div className="cm__control">
                        {currentUserId && isDiff(currentUserId, userId) ? (
                            <CommentAnswerButton data = {{ user, setUserTag }} />
                        ) : null}
                        <CommentReplyButton data = {{showRespBox, setShowRespBox, responseLength}} />
                    </div>
                    {arrChildCmLists.length ? (
                        <div className={`cm__mess `.concat(showRespBox ? '__show' : '')}>
                            {arrChildCmLists}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}
