function splitLines(blockElement) {

    try {
        const getBlockChar = function(c, i){
            if ( c.trim() === '' ) return '<span> </span>';
            return c.replace(/(\S+\s*)/g, '<span>$1</span>');
        }
        const linesBlock = blockElement.innerHTML.split('__');
        const results = linesBlock.map(line => '<span class="line">' + line  + '</span>');
        blockElement.innerHTML = results.join('');

    } catch(error) {
        console.log('error');
    }
  
}

function parseLineElem(el, settings) {

    var arrayLetters = el.innerHTML.split(''),
        length = arrayLetters.length,
        string = '',
        {delay, step, tr, trStep} = settings;

    for (let i = 0; i < length; i++) {

        let letter = arrayLetters[i],
            transition = 'transition: all ' + 
                            (tr + trStep) + 
                                's ease ' + 
                                    (delay + step) + 
                                        's; -webkit-transition: all ' + 
                                            (tr + trStep)+'s ease ' +
                                                (delay + step) + 
                                                    's; -o-transition: all ' + 
                                                        (tr+trStep) + 
                                                            's ease ' + 
                                                                (delay+step) + 's;';
        
        delay = delay + step;
        tr = tr + trStep;

        let element = '<span class="letter" style="' +
                            transition+'">' + 
                                letter +
                                    '</span>',
            next = i + 1,
            letter_next = arrayLetters[next];

        if (next < length && letter_next == ' ') {
            element = '<span class="letter" style="'+transition+'">'+ letter +'&nbsp;</span>';
        }

        if (letter == ' ') {
            element = '';
        }

        string += element;

    };

    el.innerHTML = string;

}

function isElementInViewport(el) {
    var rect = el.getClientRects()[0];

    if ( rect.top <= window.innerHeight ) {
        return true;
    }

    return window.scrollY > rect.top + 200;
}

export function showAnimationElement(el, t) {
    var delay = !t ? parseInt(el.dataset['splitLetters']) : t;
    setTimeout(function(){
        el.classList.add('show');
    }, delay);
}

function showElement() {

    try {
        const _parse = function(el, i) {
            if (isElementInViewport(el)) {
                showAnimationElement(el);
            }
        }
        const splitLetters = document.querySelectorAll("*[data-split-letters]");
        const splitLettersBig = document.querySelectorAll("*[data-split-letters-big]");
    
        splitLetters.forEach((el, i) => _parse(el));
        splitLettersBig.forEach((el, i) => _parse(el));
    }catch(error) {} 

}

function _parseElement(elem, settings) {
    splitLines(elem);
    var linesElem = elem.querySelectorAll('.line');
    linesElem.forEach(el => parseLineElem(el, settings));
}

export function splitLetterElement(e) {
    const linesSettings = {
        delay : 0,
        step : .05,
        tr : .5,
        trStep : .03
    };
    if ( !e.dataset['text'] ) {
        e.dataset['text'] = e.innerHTML;
    }
    _parseElement(e, linesSettings);
}

export function splitLetterBigElement(e) {
    const splitBigSettings = {
        delay : 0,
        step : .1,
        tr : 1,
        trStep : .03
    };
    _parseElement(e, splitBigSettings);
}

export function start() {

    showElement();

    document.addEventListener('scroll', function(){
        showElement();
    })

}

export function init() {
    const splitLetters = document.querySelectorAll("*[data-split-letters]");
    const splitLettersBig = document.querySelectorAll("*[data-split-letters-big]");

    splitLetters.forEach(e => splitLetterElement(e));
    splitLettersBig.forEach(e => splitLetterBigElement(e));
}