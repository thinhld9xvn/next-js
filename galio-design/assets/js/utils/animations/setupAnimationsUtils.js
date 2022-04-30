import {init as letterAnimationInit, start as letterAnimationStart} from '@js_utils/animations/letterAnimationUtils';
import {init as ScrollAnimationInit} from '@js_utils/animations/scrollAnimationUtils';
import {init as buttonAnimationInit} from '@js_utils/animations/buttonAnimationsUtils';
import { setupWow } from '@js_dir/utils/setupWowUtils';

export function resetLinesAnimation() {
    const splitLetters = document.querySelectorAll("*[data-split-letters]");
    const splitLettersBig = document.querySelectorAll("*[data-split-letters-big]");
    const typeCards = document.querySelectorAll("*[data-types-card]");
    const buttons = document.querySelectorAll(".button");
    const wowes = document.querySelectorAll(".wow");

    const els = document.querySelectorAll('.line');
    els && els.forEach(el => el.remove());

    splitLetters.forEach(el => el.classList.remove('show'));
    splitLettersBig.forEach(el => el.classList.remove('show'));

    typeCards.forEach(el => el.removeAttribute('style'));
    buttons.forEach(el => {
        el.classList.remove('button_active');
        el.classList.remove('button_hover');
    });

}

export function removeLinesAnimation() {
    const els = document.querySelectorAll('.line');
    els && els.forEach(el => el.remove());
}

export function setupAnimationsUtils() { 
    resetLinesAnimation();
    setTimeout(function() {  
        setupWow();      
        letterAnimationInit();
        ScrollAnimationInit();
        letterAnimationStart();
        buttonAnimationInit();
    }, 200);
}   