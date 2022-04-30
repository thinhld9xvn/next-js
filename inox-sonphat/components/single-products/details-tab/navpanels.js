import TemplatePanelItem from '@components/templates/template-panel-item';
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'preact/compat'
export default function NavPanels({ data, props }) {
    const router = useRouter();
    const {tabActiveId} = props;
    const [tabPanels, setTabPanels] = useState(null);
    useEffect(() => {
        setTabPanels(data.map(item => <TemplatePanelItem key = {`panel__${item.id}`}
                                                         data = {item}
                                                         props = {props} />));
    }, [router.query.slug, tabActiveId]);
    return (
        <div className="tab-panels">
            {tabPanels}
        </div>
    )
}
