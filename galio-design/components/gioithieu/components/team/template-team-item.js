import React from 'preact/compat'

export default function TemplateTeamItem({data, isTitle = false}) {    
    const {name, type, avatar, professor} = data;
    return (
        <>  
            {isTitle ? (
                <div className="team-item">
                    <p className="title">{name}</p>
                </div>
            ) : null}
            {!isTitle ? (
                <div className="team-item">
                    <img src={avatar} alt="team" />
                    <div className="team-desc">
                        <p>
                            {name}
                        </p>
                        <span>
                            {professor}
                        </span>
                    </div>
                </div>
            ) : null}
        </>
    )
}
