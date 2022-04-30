import React from 'preact/compat'
import { LOADING_SRC } from '@constants/constants';

export default function TemplateBgImage({ data, index, props }) {
    const {thumbnail} = data;
    const {bgImageShowIdx, setBgImageShowIdx} = props;
    return (
        <img src={bgImageShowIdx !== index ? LOADING_SRC : thumbnail} 
             data-src={bgImageShowIdx !== index ? thumbnail : LOADING_SRC} loading="lazy"
             style={{
                 display : bgImageShowIdx !== index ? 'none' : ''
             }} />
    )
}
