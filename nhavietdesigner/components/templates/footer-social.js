import React from 'preact/compat'

function getTempContactItem(url, key) {

    return (
        <li key={key}>
            <a href={url}>
                <i className={`fa fa-${key}`}></i>
            </a>
        </li>    
    )

}

export default function FooterSocial({ data }) {

    const arrContactItems = [];
    
    const keys = Object.keys(data);

    for( let i = 0; i < keys.length; i++ ) {

        const key = keys[i],
              url = data[key];

        arrContactItems.push(getTempContactItem(url, key));

    }

    return (
        <ul className="vk-footer__list">
            {arrContactItems}
        </ul>
    )
}
