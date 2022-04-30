import React from 'preact/compat'
export default function TemplateNavTabItem({ data, props }) {
    const {id, title} = data;
    const {tabActiveId, setTabActiveId} = props;
    const handleChooseTab = (e) => {
        e.preventDefault();
        setTabActiveId(id);
    };
    return (
        <li className={tabActiveId === id ? 'active' : ''}>
            <a href="#"
                onClick={handleChooseTab}>
                {title}
            </a>
        </li>
    )
}
