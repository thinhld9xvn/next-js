import React from 'preact/compat'

export default function ProjectInfo({ data, messages }) {
    const {location, dentision, time, team} = data;
    return (
        <>
            <div className="info-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                <img src="/static/images/icons/icon__add.png" alt="icon__add.png" />
                <p>
                    <b>{messages.position}</b><br /> {location}
                </p>
            </div>
            <div className="info-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                <img src="/static/images/icons/icon__area.png" alt="icon__area.png" />
                <p>
                    <b>{messages.densition}</b><br /> {dentision} m2
                </p>
            </div>
            <div className="info-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.7s">
                <img src="/static/images/icons/icon__calendar.png" alt="icon__calendar.png" />
                <p>
                    <b>{messages.duration}</b><br /> {time}
                </p>
            </div>
            <div className="info-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                <img src="/static/images/icons/icon__team.png" alt="icon__team.png" />
                <p>
                    <b>{messages.team}</b><br /> {team}
                </p>
            </div>
        </>
    )
}
