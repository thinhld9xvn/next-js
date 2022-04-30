import { isValidateSub } from '@js_dir/utils/menuUtils';
import React, {useState, useCallback} from 'preact/compat';
import Link from 'next/link';
export default function TemplateMobileItem({ data, expandDefault = true, isChild = false }) {
  const [showChild, setShowChild] = useState(expandDefault);
  const {text, url, childrens} = data;
  const hasChildrens = isValidateSub(data);
  const handleToggleShowChild = useCallback((e) => {
    e.preventDefault();
    setShowChild(!showChild);
  }, [,showChild]);
  const arrChildrens = hasChildrens ? childrens.map(item => <TemplateMobileItem data = {item}
                                                                                key = {item.id}
                                                                                isChild = {true}
                                                                                expandDefault = {false} />) : null;
  return (
    <>
        <li className={showChild ? 'active' : ''}>
            <>
                {url !== '#' ? (
                    <Link href={url}>{text}</Link>
                ) : <a href="#">{text}</a>}
                {hasChildrens ? (
                    <>
                        <i className={"fas fa-caret-".concat(showChild ? 'up' : 'down')}
                            onClick={handleToggleShowChild}></i>
                        <ul>
                            {arrChildrens}
                        </ul>
                    </>
                ) : null}
            </>
        </li>
    </>
  );
}
