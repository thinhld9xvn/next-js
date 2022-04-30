import React, {useState} from 'preact/compat'
import NavPanels from './details-tab/navpanels'
import NavTabs from './details-tab/navtabs'
export default function DetailsTab({ data }) {
    const [tabActiveId, setTabActiveId] = useState(data[0].id);
    return (
        <div className="pdetail-tabs">
            <NavTabs data = {data}
                     props = {{tabActiveId, setTabActiveId}} />
            <NavPanels data = {data}
                        props = {{tabActiveId, setTabActiveId}} />
        </div>
    )
}
