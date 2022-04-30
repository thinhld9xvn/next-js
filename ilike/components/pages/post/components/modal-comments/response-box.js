import React from 'preact/compat'
import { SEND_BUTTON_THUMBNAIL, USER_THUMBNAIL } from '@constants/constants'

import toastr from 'toastr';

import { onKeyDown_captureComment } from '@postpage/events/onKeyDown_captureComment';
import { onSubmit_publishComment } from '@postpage/events/onSubmit_publishComment';
import { onClick_removeUserTag } from '@postpage/events/onClick_removeUserTag';

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export default function ResponseBox({ article_id = null, states = null }) {

    const {userTag, setUserTag} = states;
    const indent = userTag ? (userTag.name.length + 1) * 9 : 0;
    return (
        <div className="cm__reply">
            <div className="form__group">

                <div className="cm__avatar">
                    <img src={USER_THUMBNAIL} alt="user" />
                </div>

                <form id="frmPublishComment"
                      className="from"
                      onSubmit={e=> onSubmit_publishComment(e, {article_id, userTag, toastr})}>

                    <textarea className="cm__textarea"
                              placeholder="Nội dung"
                              onKeyDown={e => onKeyDown_captureComment(e, {article_id, userTag, toastr})}
                              style={{ paddingLeft : indent > 0 ? indent + 'px' : '' }}></textarea>

                    {userTag ? (
                        <a className="user-tag"
                            href="#"
                            onClick={e => onClick_removeUserTag(e, {setUserTag})}>
                                @{userTag.name}
                        </a>
                    ) : null}

                    <button className="btn btn__send">
                        <img src={SEND_BUTTON_THUMBNAIL} alt="send button" />
                    </button>

                </form>

            </div>

        </div>
    )
}
