import React from 'preact/compat'
import CommentAvatar from './templates/comment-avatar';
import CommentDesc from './templates/comment-desc';
import CommentName from './templates/comment-name';
import CommentAnswerButton from './templates/comment-answer-button';
import CommentTime from './templates/comment-time';
import { isDiff } from '@js_dir/utils/arrayUtils';

export default function CommentRepItem({ data }) {

    const {item, currentUserId, setUserTag} = data;
    const {content, created_at, user} = item;
    const {id : userId, name} = user;    

    return (
        <div className="reply__box">

            <CommentAvatar />
            
            <div className="reply__comment">

                <CommentName data = {name} />
                
                <CommentTime data = {created_at} />
 
                <CommentDesc data = {content} />

                <div className="cm__control">

                    {currentUserId && isDiff(userId, currentUserId) ? (

                        <CommentAnswerButton data = {{user, setUserTag}} />

                    ) : null}

                </div>

            </div>

        </div>

    )
}
