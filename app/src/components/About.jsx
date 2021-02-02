import React from 'react'

import Pikachu from './pika.png';

export const About = () => {
    return (
        <div className="about-container">
            <h1>Get to know the world of the Pokimen!</h1>
            <h5>This is totally not like animal fighting</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio fugiat illo error quod? Nihil voluptates iste animi repellendus impedit quos nostrum adipisci quasi dignissimos. Beatae obcaecati quibusdam amet reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a incidunt magni fuga optio esse minus iure, rerum possimus quas itaque. Repellat unde nobis possimus explicabo suscipit mollitia laboriosam a quod, facere tempora minima odit pariatur, exercitationem assumenda soluta quia accusamus eius harum voluptatem ex. Totam iusto sit quos voluptatum.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quasi dicta accusamus, repellendus dignissimos nisi illo reiciendis! Porro voluptate obcaecati explicabo ad consequuntur, illum beatae eum magnam ut est fuga!</p>
            <img className="pika-img" src={Pikachu} alt={Pikachu}/>
        </div>
    )
}

export default About;