import React from 'preact/compat'

export default function HeaderDashboard({data}) {
    const {username = ''} = data;
    return (
        <div className="account-welcome-heading">
            <h2 className="welcome-text">Xin chào {username} !</h2>
            <h4 className="welcome-sm-text">Chào mừng bạn quay trở lại với chúng tôi</h4>
        </div>
    )
}
