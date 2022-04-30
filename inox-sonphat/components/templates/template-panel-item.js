import React from 'preact/compat'
export default function TemplatePanelItem({ data, props }) {
    const {id, contents} = data;
    const {tabActiveId} = props;
    return (
        <div className={`text-justify ${tabActiveId === id ? 'active' : ''}`} dangerouslySetInnerHTML={{
            __html : contents
        }}>
        </div>
    )
}
