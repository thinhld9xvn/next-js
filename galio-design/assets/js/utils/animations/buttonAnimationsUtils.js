export function init() {

    const btns = document.querySelectorAll('*[data-button]');
    if (!btns) return;

    check(btns);
    events(btns);
}

function check(els) {
    try {
        var scrollTop = window.scrollY;
        var checkpoint = scrollTop + window.innerHeight - 30;
        els.forEach(function(el) {
            const rect = el.getClientRects()[0];
            const topPosition = rect ? rect.top : null;
            if ( topPosition ) {
                const delay = parseInt(el.dataset['button']);
                const hoverDelay = delay + 2000;

                if (checkpoint >= topPosition && !el.classList.contains('button_active')) {

                    setTimeout(function(){
                        el.classList.add('button_active');
                    }, delay);
                    setTimeout(function(){
                        el.classList.add('button_hover');
                    }, hoverDelay);
                };
            }
        })
    }catch(error) {}

}

function events(els) {
    window.addEventListener('scroll', function(){
        check(els);
    });
    window.addEventListener('resize', function(){
        check(els);
    });
}