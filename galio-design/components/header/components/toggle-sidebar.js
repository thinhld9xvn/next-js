import React from 'preact/compat'

export default function ToggleSidebar({ props }) {
    const {showSidebar, setShowSidebar} = props;
    const toggleSidebar = (e) => {
        e.preventDefault();
        setShowSidebar(!showSidebar);
    }
    return (
        <button className={"btn toggle__menu ".concat(showSidebar ? 'active' : '')}
                onClick={toggleSidebar}>
            <div className="bar">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </button>
    )
}
