"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClick_scrollToTop = onClick_scrollToTop;

function onClick_scrollToTop(e) {
  e.preventDefault();

  if (typeof window !== 'undefined') {
    window.scroll(0, 0);
  }
}