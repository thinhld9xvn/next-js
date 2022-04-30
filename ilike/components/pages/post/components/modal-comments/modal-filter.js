import React from 'preact/compat'

export default function ModalFilter({ length }) {
    return (
        <div className="filter">
            <h3 className="filter__total">
                Tất cả ({length})
            </h3>
            <select name="#" id="">
                <option value="">
                    Mới nhất
                </option>
            </select>
        </div>
    )
}
