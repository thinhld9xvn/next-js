import { SESSION_EXPIRES_WARNING, TOASTR_DEF_OPTIONS, WARNING_TITLE } from "@constants/constants";
import { getUserLoginToken, logout } from "@js_dir/utils/membership";
import { publishComment } from '@lib/publishCommentApi';

export async function onSubmit_publishComment(e, data) {
    
    e.preventDefault();
    const {article_id, userTag, toastr} = data;
    const {id = '', parent_id = ''} = userTag || {};

    const token = getUserLoginToken();

    const textarea = document.querySelector('.cm__textarea'),
          content = textarea.value;

    if ( !content || content.length < 15 ) {
        toastr.error('Mời nhập nội dung bình luận, nội dung bình luận tối thiểu 15 ký tự !!!', 'Lỗi', TOASTR_DEF_OPTIONS);
        return false;
    }

    const results = await publishComment({
        parent_id : parent_id ? (parseInt(parent_id) === 0 ? id : parent_id) : 0,
        article_id,
        content
    }, token);

    if ( ! results ) {

        toastr.warning(SESSION_EXPIRES_WARNING, WARNING_TITLE, TOASTR_DEF_OPTIONS);

        logout(true);

        return false;

    }

    toastr.info('Bạn đã đăng bình luận thành công. Bình luận của bạn sẽ được xét duyệt trong vòng 24h tới ...', 'Thông báo', TOASTR_DEF_OPTIONS);

    textarea.value = '';

    return true;

}