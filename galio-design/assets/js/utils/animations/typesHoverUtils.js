function addOpacity(nearbys) {

    nearbys.forEach(function(el) {
        el.classList.add('card_opacity');
    });

}

function currentBg(els, index) {

    const elsList = Array.from(els),
          elc = elsList[index];

    els.forEach(el => el.classList.remove('types__img_active'));    
    elc.classList.add('types__img_active');

}

function removeOpacity(els) {
    els.forEach(el => el.classList.remove('card_opacity'));
}

export function init() {

    const cards = document.querySelectorAll('*[data-types-card]');
    const bgWraps = document.querySelectorAll('*[data-bg-wrap]');
    const bgImgs = document.querySelectorAll('*[data-types-bg]');
    const lists = document.querySelectorAll('*[data-types-list]');

    const cardsList = Array.from(cards);

    cards.forEach(function(card, i){
        card.addEventListener('mouseover', function() {
            if (!client.isMobile) {
                var index = cardsList.indexOf(card);
                var nearbys = cardsList.filter((e, k) => k !== i);
                addOpacity(nearbys);
                currentBg(bgImgs, index);
            }
        });
        card.addEventListener('mouseout', function() {
            if (!client.isMobile) {
                removeOpacity(cards);
            }
        });
    });

    lists.forEach(function(list, i) {

        list.addEventListener('mouseover', function() {

            if (!client.isMobile) {
				list.classList.add('types__list_active');
				list.classList.add('types__bg_active');
			}

        });

        list.addEventListener('mouseout', function() {

            if (!client.isMobile) {
				list.classList.remove('types__list_active');
				bgImgs.forEach(bgImg => bgImg.classList.remove('types__img_active'));
				bgWraps.forEach(bgWrap => bgWrap.classList.remove('types__bg_active'));
			}

        });

    });

}