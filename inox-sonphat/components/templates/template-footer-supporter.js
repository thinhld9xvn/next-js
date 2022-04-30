import React from 'preact/compat'
export default function TemplateFooterSupporter({data, index = 0}) {
    const image = index === 0 ? '/static/images/headphones.png' : '/static/images/smile.png';
    const phones = data.split(',').map(e => e.split('|'));
    const arrCskhItems = phones.map((e, i) => {   
        return (
            <a key = {e[0]} href={`tel:${e[0]}`}>{e[1]}</a>
        );
    });
    return (
        <li>
            <img src={image} />
            <span>
                {arrCskhItems}
            </span>
        </li>
    )
}
