import { cloneArray } from '@js_dir/utils/arrayUtils';
import { hideBodyScroll, showBodyScroll, toggleBodyScroll } from '@js_dir/utils/domUtils';
import React, {useEffect, useCallback, useState, useRef} from 'preact/compat'
function TemplateEntryItem({ data, props }) {
    const {type, id, content, childrens} = data;
    const {isFixedTocMinimize, setFixedTocMinimize, entriesActive, setEntriesActive, handleFixedTocScroll} = props;
    const arrChildrens = childrens && childrens.length ? childrens.map(item => <TemplateEntryItem key = {item.id} data = {item} props = {props} />) : null;
    const handleJumpToSection = useCallback((e) => {
        e.preventDefault();
        setTimeout(() => {
            //document.removeEventListener('scroll', handleFixedTocScroll);
            const elem = document.querySelector(e.target.getAttribute('href'));
            const top = elem.getClientRects()[0].top;
            const Y = window.scrollY + top - 100;
            window.scrollTo(0, Y);
            setFixedTocMinimize(true);
            showBodyScroll();
            //
            const myEntriesData = [];
            entriesActive.map(item => travselActiveEntries(myEntriesData, item, id));
            setEntriesActive(cloneArray(myEntriesData));
        }, 200);
    }, [, props]);
    let entry = null;
    const results = entriesActive.filter(e => e.id === id);
    if ( results ) {
        entry = results[0];
    }
    return (
        <li>
            <a href={`#${id}`} className={entry && entry.value ? 'active' : ''} onClick={handleJumpToSection}>{content}</a>  
            {arrChildrens ? (   
                <ol>
                    {arrChildrens}
                </ol>
            ) : null}  
        </li>
    );
}
function travselActiveEntries(data, item, id) {
    if ( item.id === id ) {
        item.value = true;
    }
    else {
        item.value = false;
    }
    data.push(item);
    if ( item.childrens ) {
        item.childrens.map(i => travselActiveEntries(data, i, id));
    }
}
function travselEntries(data, item) {
    data.push({
        id : item.id,
        value : false
    });
    if (item.childrens) {
        item.childrens.map(i => travselEntries(data, i));
    }    
}
export default function TablesOfContents({ data }) {
    const [entriesActive, setEntriesActive] = useState([]);
    const [isFixedTocMinimize, setFixedTocMinimize] = useState(true);
    const [isFixedTocMinShow, setFixedTocMinShow] = useState(false);
    const [tablesOfContents, setTableOfContents] = useState([]);    
    useEffect(() => {
        if ( data && data.length ) {
            const myEntriesData = [];
            data.map(item => travselEntries(myEntriesData, item));
            setEntriesActive(cloneArray(myEntriesData));            
        }
    }, [, data]);  
    useEffect(() => {
        if ( data && data.length ) {
            setTableOfContents(data.map(item => <TemplateEntryItem key = {item.id} data = {item} props={{isFixedTocMinimize, entriesActive, setEntriesActive, setFixedTocMinimize, handleFixedTocScroll}} />));
        }
    }, [, entriesActive]);
    const handleFixedTocScroll = useCallback((e) => {
        try {
            const fixedToc = document.querySelector('.fixed-toc');
            const bottom = window.scrollY + fixedToc.getClientRects()[0].top + fixedToc.clientHeight;
            if (window.scrollY > bottom) {
                setFixedTocMinShow(true);
            }
            else {
                setFixedTocMinShow(false);
            }
        } catch {
        }
    }, []);
    const handleFixedTocClick = useCallback((e) => {
        e.preventDefault();
        setFixedTocMinimize(false);            
        if (window.innerWidth < 768) {
            hideBodyScroll();   
        }
    }, [,isFixedTocMinimize]);
    const handleMinimizeFixedToc = useCallback((e) => {
        e.preventDefault();
        setFixedTocMinimize(true);
        showBodyScroll();
    }, [,isFixedTocMinimize]);
    useEffect(() => {
        document.addEventListener('scroll', handleFixedTocScroll);
        return () => {
        }
    }, []);
    return (
        <>
            {tablesOfContents && tablesOfContents.length ? (
                <>
                    <ol className="fixed-toc">
                        <span></span>
                        {tablesOfContents}
                    </ol>
                    <div className={"fixed-toc sticky ".concat(isFixedTocMinimize ? 'none' : 'expand ')}>
                        <span onClick={handleMinimizeFixedToc}></span>
                        <ol className="stt">
                            {tablesOfContents}
                        </ol>
                    </div>
                    {isFixedTocMinShow ? (
                        <div className="fixed-toc-sticky" onClick={handleFixedTocClick}></div>
                    ) : null}
                </>
            ) : null}
        </>
    )
}
