import { isDiff, isUndefined } from '@js_dir/utils/arrayUtils';
import React, {useEffect, useState} from 'preact/compat'
import TemplateTreeCatItem from './template-tree-cat-item'
function handleToggleChildMoreCatList(props, e) {
    e.preventDefault();
    const {showMores, i, setShowMores} = props;
    const boolMores = showMores.map((e, k) => {
        if (k === i) {
            e = !e;
        }
        else {
            if ( e ) {
                e = false;
            }
        }
        return e;
    });
    setShowMores([...boolMores]);
}
export default function TemplateNavigationBar({ data, activeCat }) {
    const [showMores, setShowMores] = useState([]);
    const [navigationBar, setNavigationBar] = useState(null);
    useEffect(() => {
        const onMouseUpCloseMoreCatLists = (e) => {
            const moreListsNodes = document.querySelectorAll('li.more-lists');
            const boolMores = [...showMores];
            let boolValidate = false;
            moreListsNodes.forEach((moreListNode, i) => {
                if ( moreListNode.contains(e.target) ) {
                    boolValidate = true;
                }
            }); 
            if ( !boolValidate ) {
                setShowMores(boolMores.map(e => false));
            }
        }
        document.addEventListener('mouseup', onMouseUpCloseMoreCatLists);
        return () => {
            document.removeEventListener('mouseup', onMouseUpCloseMoreCatLists);
        }   
    }, []);
    useEffect(() => {
        const boolMores = [...showMores];
        const arrNavigationBar = data.map((item, i) => {
            let arrChildLists = [];
            if ( item.data.length === 1 ) {
                const cat = item.data[0];
                arrChildLists = cat.childrens ? cat.childrens.map(item => <TemplateTreeCatItem data = {item}
                                                                                                key = {item.id}
                                                                                                activeCat = {activeCat} />) : null;
            }
            else {
                arrChildLists = item.data.map(item => <TemplateTreeCatItem data = {item}
                                                                            key = {item.id}
                                                                            activeCat = {activeCat} />);
            }
            const arrMoreTreeLists = arrChildLists.splice(3);
            if (isUndefined(boolMores[i])) {
                boolMores[i] = false;
            }
            if ( arrMoreTreeLists.length ) {
                const index = arrMoreTreeLists.findIndex(cat => cat.key === activeCat.id);
                if ( index !== -1 ) {
                    const source = (arrMoreTreeLists.splice(index, 1))[0];
                    const dest = (arrChildLists.splice(0, 1))[0];
                    arrChildLists.splice(0, 0, source);
                    arrMoreTreeLists.splice(0, index, dest);
                }
            }
            arrChildLists.push(<li className={"more-lists ".concat(showMores[i] ? 'active' : '')}>
                                    {arrMoreTreeLists.length ? (
                                        <>
                                            <a href="#"
                                                onClick={handleToggleChildMoreCatList.bind(this, {showMores, i, setShowMores})}>
                                                Thêm
                                            </a>
                                            <ul className={"mb-def-lists ".concat(showMores[i] ? 'show' : '')}>
                                                {arrMoreTreeLists}
                                            </ul>
                                        </>
                                    ) : null}
                            </li>);
            return (
                <div className="mb-navigation-page mb-navigation-lists mb-cat-navigation-page"
                    key = {i}>
                    <ul className="mb-def-lists flex flex-justify-space-between">
                        {arrChildLists}
                    </ul>
                </div>
            )
        });
        setNavigationBar(arrNavigationBar);
        if ( isDiff(showMores, boolMores)) {
            setShowMores([...boolMores]);        
        }
    }, [data, showMores]);
    useEffect(() => {
        setTimeout(() => {
            const lists = document.querySelector('.mb-def-lists.show');
            if ( lists ) {
                lists.setAttribute('style', '');
                const rect = lists.getClientRects()[0],
                      left = rect.left,
                      right = rect.right;
                if ( left < 0 ) {
                    lists.setAttribute('style', `left : 0`);
                }

            }
        }, 200);
    }, [showMores]);
    return (
        <>
            {navigationBar}
        </>
    )
}
