import React from 'preact/compat'
import Architectural from './components/architectural'
import Introduce from './components/introduce'
import Opening from './components/opening'
import Team from './components/team'
import WeBest from './components/we-best'
import Work from './components/work'
export default function AboutSection({ data }) {
    const {openingUs, slider, strengthUs, users_list, price_box, duration_working} = data;
    return (
        <section className="home__about">
            <div className="container">
                <Opening data = {openingUs} />
                <Introduce data = {slider} />
                <WeBest data = {strengthUs} />                
                <Team data = {users_list} />
                <Architectural data = {price_box} />              
                <Work data = {duration_working} />
            </div>
        </section>
    )
}
