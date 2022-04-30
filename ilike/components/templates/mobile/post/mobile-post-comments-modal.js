import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux'
import { USER_ICON } from '@constants/constants';
import { hideBodyScroll, showBodyScroll } from '@js_dir/utils/deviceUtils';

function MobilePostCommentsModal({ showPostCommentsModal, updateShowPostCommentsModal, updateShowLoginModal, isLoggedIn }) {
    const handleCloseModal = (e) => {
        e.preventDefault();
        updateShowPostCommentsModal(false);
    }
    const handleShowLoginModal = (e) => {
        e.preventDefault();
        updateShowLoginModal(true);
    }
    useEffect(() => {
        if ( showPostCommentsModal ) {
            hideBodyScroll();
        }
        else {
            showBodyScroll();
        }
    }, [showPostCommentsModal]);
    return (
        <div className={"mobile-modal single-comments-modal ".concat(showPostCommentsModal ? ' show' : '', 
                                                            isLoggedIn ? ' loggined' : '')}>
            <div className="container">
                <a className="close modal-close-button" 
                    href="#"
                    onClick={handleCloseModal}>
                    <span className="fa fa-times"></span>
                </a>
                <h2 className="modal-heading single-modal-heading mtop20">Bình luận</h2>
                {!isLoggedIn ? (
                    <p className="modal-cm-text mtop10">
                        Bạn phải đăng nhập để sử dụng tính năng bình luận. <br />
                        <a href="#"
                           onClick={handleShowLoginModal}><strong>Đăng nhập</strong></a>
                    </p>
                ) : null}
                <div className="modal-cm-panel mtop30">
                    <div className="modal-cm-sorts flex flex-align-center flex-justify-space-between">
                        <strong>Tất cả (10)</strong>
                        <select>
                            <option value="newest">Mới nhất</option>
                        </select>
                    </div>
                    <ul className={"mb-def-lists modal-cm-lists pt20 ".concat(isLoggedIn ? '__loggined' : '')}>
                        {isLoggedIn ? (
                            <li>
                                <div className="mb-element-metadata mb-element-harquant-metadata flex flex-align-center flex-justify-space-between">
                                    <div className="flex flex-align-center">
                                        <span className="avatar mb-cm-avatar"><img className="mb-default-avatar" src={USER_ICON} alt="" /></span><strong className="mb-author-name mb-cm-author-name padleft10">Trần Văn Hoàng</strong>
                                    </div>
                                </div>
                                <div className="mb-user-comment-form mtop10">
                                    <div className="field"><input type="text" className="mb-form-field mb-form-comment-field" placeholder="Viết bình luận" value="" /></div>
                                    <div className="field flex flex-end mtop10">
                                        <a href="#" className="mb-button mb-green-button mb-button-defpad mb-5rounded mb-send-button"> <span className="fa fa-send"></span> <span className="padleft5">Gửi</span> </a>
                                    </div>
                                </div>
                            </li>
                        ) : null}
                        <li>
                            <div className="mb-element-metadata mb-element-harquant-metadata flex flex-align-center flex-justify-space-between">
                                <div className="flex flex-align-center">
                                    <span className="avatar mb-cm-avatar"><img className="mb-default-avatar" src={USER_ICON} alt="" /></span><strong className="mb-author-name mb-cm-author-name padleft10">Trần Văn Hoàng</strong>
                                </div>
                                <div>
                                    <strong className="mb-post-category mb-cm-timespan flex flex-align-center"><a href="/post.html">23 Sep, 2021</a></strong>
                                </div>
                            </div>
                            <div className="mtop5 cm-text modal-cm-text">
                                <div className="cm-myans">Tin nhanh, hình ảnh, video clip, bình luận mới về giá vàng.</div>
                                <div className="cm-response mtop5">
                                    <a className="" href="#"><strong>Trả lời</strong></a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="mb-element-metadata mb-element-harquant-metadata flex flex-align-center flex-justify-space-between">
                                <div className="flex flex-align-center">
                                    <span className="avatar mb-cm-avatar"><img className="mb-default-avatar" src={USER_ICON} alt="" /></span><strong className="mb-author-name mb-cm-author-name padleft10">Phạm Văn Anh</strong>
                                </div>
                                <div>
                                    <strong className="mb-post-category mb-cm-timespan flex flex-align-center"><a href="/post.html">23 Sep, 2021</a></strong>
                                </div>
                            </div>
                            <div className="mtop5 cm-text modal-cm-text">
                                <div className="cm-myans">Phân tích biến động giá vàng 9999 nhằm giúp độc giả nắm bắt</div>
                                <div className="cm-response mtop5">
                                    <a className="" href="#"><strong>Trả lời</strong></a>
                                </div>
                            </div>
                            <ul className="mb-cm-child-lists">
                                <li>
                                    <div className="mb-element-metadata mb-element-harquant-metadata flex flex-align-center flex-justify-space-between">
                                        <div className="flex flex-align-center">
                                            <span className="avatar mb-cm-avatar"><img className="mb-default-avatar" src={USER_ICON} alt="" /></span><strong className="mb-author-name mb-cm-author-name padleft10">Phạm Văn Anh</strong>
                                        </div>
                                        <div>
                                            <strong className="mb-post-category mb-cm-timespan flex flex-align-center"><a href="/post.html">23 Sep, 2021</a></strong>
                                        </div>
                                    </div>
                                    <div className="mtop5 cm-text modal-cm-text">
                                        <div className="cm-myans">Chênh lệch giá bán vàng đang cao hơn giá mua 700.000 đồng/lượng</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="mb-element-metadata mb-element-harquant-metadata flex flex-align-center flex-justify-space-between">
                                <div className="flex flex-align-center">
                                    <span className="avatar mb-cm-avatar"><img className="mb-default-avatar" src={USER_ICON} alt="" /></span><strong className="mb-author-name mb-cm-author-name padleft10">Trần Tiến</strong>
                                </div>
                                <div>
                                    <strong className="mb-post-category mb-cm-timespan flex flex-align-center"><a href="/post.html">23 Sep, 2021</a></strong>
                                </div>
                            </div>
                            <div className="mtop5 cm-text modal-cm-text">
                                <div className="cm-myans">Chuyên gia Haberkorn cho rằng các thông tin phiên trước đó tiếp tục hỗ trợ</div>
                                <div className="cm-response mtop5">
                                    <a className="" href="#"><strong>Trả lời</strong></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {   
    return {
        showPostCommentsModal : state.globalReducer.showPostCommentsModal,
        isLoggedIn : state.globalReducer.isLoggedIn
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updateShowPostCommentsModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_POST_COMMENTS_MODAL",
            payload : v
        }),
        updateShowLoginModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_LOGIN_MODAL",
            payload : v
        }),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(MobilePostCommentsModal);

