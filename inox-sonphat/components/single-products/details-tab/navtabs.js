import React, {useState, useEffect} from 'preact/compat'
import { useRouter } from 'next/router';
import TemplateNavTabItem from '@templates/template-tab-navitem';
export default function NavTabs({ data, props }) {
    const router = useRouter();
    const {tabActiveId} = props;
    const [tabsList, setTabLists] = useState(null);
    useEffect(() => {
        setTabLists(data.map(item => <TemplateNavTabItem key = {`tab__${item.id}`}
                                                         data = {item}
                                                         props = {props} />));
    }, [tabActiveId, router.query.slug]);    
    return (
        <nav>
            <ul>
                {tabsList}
            </ul>
        </nav>
    )
}
