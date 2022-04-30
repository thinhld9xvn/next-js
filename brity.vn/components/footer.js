import React from 'preact/compat'

export default function Footer({ data }) {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 footer-info">
                        <div dangerouslySetInnerHTML={{
                            __html : data.description
                        }}>
                        </div>
                        <div className="copyright">
                            <div dangerouslySetInnerHTML={{
                                __html : data.copyright
                            }}>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 text-right">
                        <div className="uptotop" 
                            data-cursor-type="medium"
                            onClick={(e) => window.scrollTo(0,0)}>
                                Back to top
                                <i className="fas fa-angle-up"></i>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
