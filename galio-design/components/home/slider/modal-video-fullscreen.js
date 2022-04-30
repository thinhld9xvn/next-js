import React from 'preact/compat'

export default function ModalVideoFullscreen({ showVdModal, setShowVdModal, videoUrl }) {
    const closeVdModalEvent = (e) => {
        e.preventDefault();
        setShowVdModal(false);
    }  
    return (
        <>
            {showVdModal ? (
                <div className="modal-video modal-video-fs">
                    <div className="modal-video-body modal-video-body-fs">
                        <div className="modal-video-inner modal-video-inner-fs">
                            <div className="modal-video-wrap modal-video-movie-wrap-fs">
                                <button className="modal-video-close-btn modal-video-close-btn-fs"
                                        onClick={closeVdModalEvent}></button>
                                <video controls autoPlay loop name="media">
                                    <source src={videoUrl} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
