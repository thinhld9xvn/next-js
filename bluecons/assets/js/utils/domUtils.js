export function toggleBodyScroll() {
    const elem = document.querySelector('html');
    const v = elem.style.overflow;
    if ( v === 'hidden' ) {
        elem.style.overflow = '';
    }
    else {
        elem.style.overflow = 'hidden';
    }   
}
export function showBodyScroll() {
    const elem = document.querySelector('html');
    elem.style.overflow = '';
}
export function hideBodyScroll() {
    const elem = document.querySelector('html');
    elem.style.overflow = 'hidden';
}
function convertStrToSlug(s) {
    return s.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "") //remove diacritics
            .toLowerCase()
            .replace(/\s+/g, '-') //spaces to dashes
            .replace(/&/g, '-and-') //ampersand to and
            .replace(/[^\w\-]+/g, '') //remove non-words
            .replace(/\-\-+/g, '-') //collapse multiple dashes
            .replace(/^-+/, '') //trim starting dash
            .replace(/-+$/, ''); //trim ending dash
}
export function getHeadingsOfContents() {    
    try {
        const headings = [];
        const ids = [];
        Array.from(document.querySelector('.new-content')
                           .querySelectorAll('h2,h3'))
             .forEach((elem, i) => {
                let id = '';
                const content = elem.textContent.trim().replace(/^[0-9]{1,}\.\s/ig, '')
                                                       .replace(/(<([^>]+)>)/gi, "")
                                                       .replace(/(<style[\w\W]+style>)/g, "");
                if (elem.nodeName === 'H2' ) {
                    id = 'h2_' + convertStrToSlug(content);
                    if ( ids.indexOf(id) !== -1 ) {
                        id = id + '_' + ids.length;
                    }
                    ids.push(id);
                    headings.push({
                        type : 'h2',
                        id,
                        content,
                        childrens : []
                    });
                }
                else {
                    const largeHeading = headings[headings.length - 1];
                    id = 'h3_' + convertStrToSlug(content);
                    if ( ids.indexOf(id) !== -1 ) {
                        id = id + '_' + ids.length;
                    }
                    ids.push(id);
                    largeHeading.childrens.push({
                        type : 'h3',
                        id,
                        content
                    });
                }
                elem.setAttribute('id', id);
             });
        return headings;
    } catch {
        return null;
    }
}
export function formatPostContents() {
    try {
        document.querySelectorAll('span[style]')
                .forEach(e => e.removeAttribute('style'));
        document.querySelectorAll('br')
                .forEach(e => e.remove());
        Array.from(document.querySelectorAll('p')).filter(elem => elem.textContent.trim() === '')
                                                  .forEach(e => e.remove());
    } catch {

    }
}