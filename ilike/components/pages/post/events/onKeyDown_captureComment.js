import { onSubmit_publishComment } from "./onSubmit_publishComment";

export function onKeyDown_captureComment(e, data) {

    const keyCode = e.which;

    if ( keyCode === 13 ) {

        e.preventDefault();

        onSubmit_publishComment(e, data);

    }
    
}