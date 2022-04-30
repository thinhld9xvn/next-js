import React, {useState} from 'preact/compat'
import TemplateNavigationBar from './template-navigation-bar';

export default function TemplateTreeCat({ data, activeCat }) {
    const {data : treeCategoriesData} = data;
    return (
        <TemplateNavigationBar data = {treeCategoriesData}
                                 activeCat = {activeCat} />
    )
}
