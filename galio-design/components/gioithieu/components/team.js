import React from 'preact/compat'
import TemplateTeamItem from './team/template-team-item';

function parseUserLists(data) {
    const usersList = {};
    data.map(user => {
        const {type} = user;
        if ( !usersList[type] ) {
            usersList[type] = [];
        }
        usersList[type].push(user);
    });
    return usersList;
}

export default function Team({ data }) {
    const usersListData = [];
    const usersList = parseUserLists(data);    
    Object.keys(usersList)
          .map((key, i) => {
        
        const userList = usersList[key];  
        usersListData.push(<TemplateTeamItem data = {{ name : key}}
                                            isTitle = {true}
                                            key = {i} />);
        userList.map((user, i) => {
            usersListData.push(<TemplateTeamItem data = {user}
                                                  key = {i} />);
        });
        
    });
    return (
        <div className="team wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s">
            <div className="container">
                <h1 className="team__header">
                    <span className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">Team</span>
                </h1>
                <div className="team-group wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                    {usersListData}
                </div>
            </div>
        </div>
    )
}
