import React, {useState, useEffect} from 'preact/compat'
import FeaturedMobileArticle from '@templates/featured-mobile-article';
import { isDiff } from '@js_dir/utils/arrayUtils';
import PdLoadingSquare from '@components/loading/pd-loading-square';

export default function MbDiscoveryBox({ data = [], heading = '' }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState([]);
    useEffect(async () => {
        if ( isDiff(data, postsList) ) {
            setPostsList(data);
            setTimeout(() => {
                setLoading(false);
            }, 200);
        }
        else {
            if ( postsList && loading ) {
                setTimeout(() => {
                    setLoading(false);
                }, 200);
            }
        }
    }, [data]);
    return (
        <div className="fullwith-section mb-section mb-discovery-box">
            <div className="container">
                <hr className="mb-hr-line" />
                <h2 className="mb-section-heading flex flex-align-center">
                    <strong className="upper">{heading}</strong>
                </h2>
                <div className="mb-section-judges">
                    <div className="grid-snap-scroll">
                        <div className="post-row">
                            {loading ? (
                                <>
                                    <div className="mtop10">
                                        <PdLoadingSquare size="large" />
                                    </div>
                                    <div className="mtop10">
                                        <PdLoadingSquare size="large" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <FeaturedMobileArticle data = {data}
                                                            index = {0}                                            
                                                            showexcerpt = {false}
                                                            showthumbnail = {true} />
                                    <FeaturedMobileArticle data = {data}
                                                            index = {1}                                            
                                                            showexcerpt = {false}
                                                            showthumbnail = {true} />
                                </>
                            )}
                        </div>
                        <div className="post-row">
                            {loading ? (
                                <>
                                    <div className="mtop10">
                                        <PdLoadingSquare size="large" />
                                    </div>
                                    <div className="mtop10">
                                        <PdLoadingSquare size="large" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <FeaturedMobileArticle data = {data}
                                                            index = {2}                                            
                                                            showexcerpt = {false}
                                                            showthumbnail = {true} />
                                    <FeaturedMobileArticle data = {data}
                                                            index = {3}                                            
                                                            showexcerpt = {false}
                                                            showthumbnail = {true} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
