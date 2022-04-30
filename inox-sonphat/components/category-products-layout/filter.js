import { SORTS } from '@constants/constants';
import React from 'preact/compat'
export default function Filter({ data, messages }) {
    const {filterValue, setFilterValue} = data;
    const onChange_setFilter = (e) => {
        const v = e.target.value;
        setFilterValue(v);
    }
    return (
        <div className="text-md-right text-center pdetail-control">
            <span className="py-3 d-inline-block">{messages['sort_products_label']}:</span>
            <select id="slFilterProducts"
                    onChange={onChange_setFilter}>
                <option value={SORTS.default} selected={filterValue === SORTS.default}>{messages['default_label']}</option>
                <option value={SORTS.price_to_up} selected={filterValue === SORTS.price_to_up}>{messages['price_down_to_up_label']}</option>
                <option value={SORTS.price_to_down} selected={filterValue === SORTS.price_to_down}>{messages['price_up_to_down_label']}</option>
                <option value={SORTS.price_a_to_z} selected={filterValue === SORTS.price_a_to_z}>{messages['name_a_to_z_label']}</option>
                <option value={SORTS.price_z_to_a} selected={filterValue === SORTS.price_z_to_a}>{messages['name_z_to_a_label']}</option>
            </select>
        </div>
    )
}
