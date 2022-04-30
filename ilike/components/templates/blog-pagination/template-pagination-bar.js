import React, {useState, useEffect, useRef} from "preact/compat"
import PdLoadingSquare from "@components/loading/pd-loading-square";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import { isDiff } from "@js_dir/utils/arrayUtils";
import { useRouter } from "next/router";
var tmrWaitLoadSuccess = null;
const override = css`
  display: flex;
  justify-content: center;
`;
function getRefValue(ref) {
    return ref.current;
}
function setRefValue(ref, v) {
    return ref.current = v;
}
export default function TemplatePaginationBar({ data, props }) {
    const router = useRouter();
    const [pageLoading, setPageLoading] = useState(true);
    const myPagedRef = useRef(1);
    const loadSuccessRef = useRef(false);
    const loadEndRef = useRef(false);
    const disabledLoadMoreRef = useRef(false);
    const [loadingMore, setLoadingMore] = useState(false); 
    const { loading } = data; 
    const {paged, loadMoreSuccess, loadMoreEnd, setPaged} = props; 
    useEffect(() => {
        const oldPosts = document.querySelector('.old-post') || document.querySelector('.global__bottom');
        const onScrollEvents = (e) => {
            try {
                const topOffset = oldPosts.getClientRects()[0].top;
                const bottomOffset = window.scrollY + topOffset + oldPosts.clientHeight;
                if (!getRefValue(loadEndRef) && window.scrollY >= bottomOffset - 800) {         
                    if ( !getRefValue(disabledLoadMoreRef)) {
                        setRefValue(disabledLoadMoreRef, true);
                        setLoadingMore(true);
                        setPaged(getRefValue(myPagedRef) + 1);
                        tmrWaitLoadSuccess = setInterval(function() {
                            if ( getRefValue(loadSuccessRef) ) {
                                clearInterval(tmrWaitLoadSuccess);
                                setRefValue(disabledLoadMoreRef, false);
                                setLoadingMore(false);          
                            }
                        }, 100);
                    }       
                }
            } catch (err) {
            }
        }
        if ( !pageLoading ) {
            setTimeout(function() {
                document.addEventListener('scroll', onScrollEvents);    
            }, 500);
        }        
        return () => {
            document.removeEventListener('scroll', onScrollEvents);     
        }    
    }, [pageLoading]);
    useEffect(() => {
        if ( isDiff(myPagedRef.current, paged )) {
            myPagedRef.current = paged;
        }
        if ( isDiff(loadSuccessRef.current, loadMoreSuccess )) {
            loadSuccessRef.current = loadMoreSuccess;
        }
        if ( isDiff(loadEndRef.current, loadMoreEnd )) {
            loadEndRef.current = loadMoreEnd;
        }
        if ( isDiff(pageLoading, loading )) {
            setPageLoading(loading);
        }
    });
    return (
        <div className="paginations">
            <div className="container">
                {loading ? (
                    <div className="mtop10">
                        <PdLoadingSquare size="small" />
                    </div>
                ) : null}
                {loadingMore ? (
                    <BeatLoader size={15} margin={2} css={override} />
                ) : null}
            </div>
        </div>
    )
}
