import React from 'preact/compat'
import {injectIntl} from 'react-intl'
import Galleries from './project-details/galleries';
import Navigation from './project-details/navigation';
import ProjectInfo from './project-details/project-info';
import Share from './project-details/share';
function ProjectDetails({ data, navigation, intl }) {
    const {messages} = intl;
    const {title, description, location, dentision, time, team, galleries} = data;
    const project_info = {location, dentision, time, team};
    return (
        <section className="detai__project">
            <div className="container">
                <div className="container__content">
                    <h1 className="bg-title">
                        <span data-split-letters-big>about</span>
                    </h1>
                    <div className="info__project">
                        <h2 className="title_global" data-split-letters="1000">{title}</h2>
                        <div className="desc__global">
                            <div dangerouslySetInnerHTML={{
                                __html : description
                            }}>
                            </div>
                            <div className="info">
                                <ProjectInfo data = {project_info}                                             
                                             messages = {messages} />
                                <Share />
                            </div>
                        </div>
                    </div>
                </div>
                <Galleries data = {galleries} />
                <Navigation messages = {messages}
                            data = {navigation} />
            </div>
        </section>
    )
}
export default injectIntl(ProjectDetails);
