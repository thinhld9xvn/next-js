import React, {useState,useRef, useEffect} from "preact/compat"

import PdLoadingSquare from "@components/loading/pd-loading-square";
import { isDiff } from "@js_dir/utils/arrayUtils";

import Pagination from 'react-bootstrap/Pagination'
import { DEFAULT_PAGE } from "@constants/constants";

const PAG_NUM_SHOWN = 10;
const PAG_FIRST_NUM_SHOWN = 3;
const PAG_LAST_NUM_SHOWN = 3;
const PAG_NUM_PREV_STEP = 3;

const onClick_choosePage = async (n, setPaged, e) => {

    await setPaged(n);    
    
} 

export default function TemplatePaginationBar({ data }) {

    const { loading, paged, numPerPage, total, setPaged } = data; 
    
    const curPaged = useRef(-1);
    const curTotal = useRef(-1);
    const curNumPerPage = useRef(-1);
    const [itemsPag, setItemsPag] = useState([]);

    useEffect(() => {

        const items = [];

        if ( !loading && total && numPerPage ) {

            if ( isDiff(curPaged.current, paged) || 
                    isDiff(curTotal.current, total) || 
                        isDiff(curNumPerPage.current, numPerPage) ) {

                if ( total <= numPerPage ) {

                    items.push(<Pagination.Item key={1} 
                                                active={true}
                                                onClick={e => onClick_choosePage(1, setPaged, e)}>
                                            1
                                </Pagination.Item>);

                }

                if ( total > numPerPage ) {

                    const n = total % numPerPage,
                        k = Math.floor(total / numPerPage),
                        pageCount = n > 0 ? k + 1 : k;  
                        
                    const firstI = paged - PAG_NUM_SHOWN / 2,
                        endI = paged + PAG_NUM_SHOWN / 2;
                    
                    var count = 0,
                        lastEntryNumber = 0;
                        
                    const lastEntryIdx = pageCount - (PAG_LAST_NUM_SHOWN - 1);

                    items.push(<Pagination.First onClick={e => onClick_choosePage(1, setPaged, e)} />);            
                    items.push(<Pagination.Prev onClick={e => onClick_choosePage(paged - 1 > 0 ? paged - 1 : 1, setPaged, e)} />);
                    
                    for (let number = 1; number <= PAG_FIRST_NUM_SHOWN; number++) {
            
                        items.push(<Pagination.Item key={number} 
                                                    active={number === paged}
                                                    onClick={e => onClick_choosePage(number, setPaged, e)}>
                                                {number}
                                    </Pagination.Item>);
            
                    }

                    for ( let number = firstI; number < endI; number++ ) {

                        const boolValidate = (number > PAG_FIRST_NUM_SHOWN) &&
                                            (number < lastEntryIdx);

                        if ( boolValidate) {

                            if ( number === firstI && number > PAG_FIRST_NUM_SHOWN + 1 ) {

                                items.push(<Pagination.Ellipsis disabled />);

                            }

                            items.push(<Pagination.Item key={number} 
                                                        active={number === paged}
                                                        onClick={e => onClick_choosePage(number, setPaged, e)}>
                                                    {number}
                                            </Pagination.Item>);

                            lastEntryNumber = number;

                            count++;

                        }

                    }
                    
                    if ( count < PAG_NUM_SHOWN ) {

                        let length = PAG_NUM_SHOWN - count;  
                        
                        const boolIncr = Math.abs(lastEntryNumber - lastEntryIdx) > 5;

                        for ( let k = 0; k < length; k++ ) {

                            const x = boolIncr ? paged + k + 6 : paged - k - 6;

                            if ( boolIncr ) {

                                if ( x < lastEntryIdx ) {

                                    items.push(<Pagination.Item key={x} 
                                                            active={x === paged}
                                                            onClick={e => onClick_choosePage(x, setPaged, e)}>
                                                        {x}
                                                </Pagination.Item>); 

                                    lastEntryNumber = x;

                                }

                            }

                            else {

                                if ( x > PAG_FIRST_NUM_SHOWN && x < lastEntryIdx ) {

                                    items.splice(6, 0, <Pagination.Item key={x} 
                                                                    active={x === paged}
                                                                    onClick={e => onClick_choosePage(x, setPaged, e)}>
                                                                {x}
                                                        </Pagination.Item>); 

                                }

                            }

                        }

                    }
                    
                    if ( lastEntryNumber > 0 && lastEntryNumber < lastEntryIdx - 1 ) {

                        items.push(<Pagination.Ellipsis disabled />);

                    }           

                    if ( lastEntryIdx > 0 ) { //
            
                        for (let number = lastEntryIdx; number <= pageCount; number++) {

                            if ( number > PAG_FIRST_NUM_SHOWN ) {
                
                                items.push(<Pagination.Item key={number} 
                                                            active={number === paged}
                                                            onClick={e => onClick_choosePage(number, setPaged, e)}>
                                                        {number}
                                                </Pagination.Item>);

                            }
                
                        }

                    }
            
                    items.push(<Pagination.Next onClick={e => onClick_choosePage(paged + 1 <= pageCount ? paged + 1 : pageCount, setPaged, e)}  />);
                    items.push(<Pagination.Last onClick={e => onClick_choosePage(pageCount, setPaged, e)}  />);

                }

                curPaged.current = paged;
                curTotal.current = total;
                curNumPerPage.current = numPerPage;

                setItemsPag(items);

            }
    
        }

    }); 

    return (

        <div className="paginations">

            <div className="container">

                {total ? (

                    <Pagination className={loading ? 'disabled' : ''}>
                        {itemsPag}
                    </Pagination>

                ) : (
                    <>
                        {loading ? (

                            <PdLoadingSquare size="small" />

                        ) : null}
                    </>
                )}

            </div>
        
        </div>
    )
}
