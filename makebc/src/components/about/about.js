import React from 'react';

function about(props){
    return(
        <div className ="about-page">
            <header className="about-header">
                <h1>Introducing MakeBC</h1>
                <p>
                    A club aiming to create a community of makers here at Boston College, through a plethora of activities and workshops on electrical engineering. 
                    We plan on creating interdisciplinary collaborations between technology and the arts here on campus, and you can expect to see and participate in: 
                    projects for the social good, robotics, 3D printing and design, visits to makerspaces, and much more!
                </p>

            </header>
            <section className="about-body">
                <h2 className="about-body-header">Meet the eBoard!</h2>
                <div>
                    <h3>Jolene Lozano - Co-Founder, President</h3>
                    <p>
                    Jolene is an incoming junior at Boston College majoring in Computer Science, who is passionate about music and technology. 
                    Outside class, she is also the incoming Vice President of the Computer Science Society and a singer in the Bostonians. 
                    In the past, she interned at Sony Music Entertainment and this year, 
                    she will be interning at NBCUniversal’s CNBC division in Product Management. She is very eager to build new projects with members of MakeBC, and especially make more music-art-tech fusion hardware projects!
                    </p>
                    <h3>Jay Agrawal - Co-Founder, Vice President</h3>
                    <p>
                    Jay is an incoming senior majoring in Computer Science with a minor in Finance. He is particularly interested in seeing how technology can affect our growing economy. 
                    Apart from MakeBC, Jay is the Culture Show Coordinator for SASA and an Outreach Coordinator for the Computer Science Society. In the past, he has been involved with developing startups as Chief Technology Officer. 
                    This upcoming summer, he will be interning as a Markets Analyst at Société Générale, a French Investment Bank, in NYC. In particular, he is excited to be able to help liberal arts students become more comfortable and skilled with computer hardware!
                    </p>
                    <h3>Estevan Feliz - Treasurer</h3>
                    <p>
                    Estevan Feliz is an incoming Junior at Boston College, majoring in Communications with a Computer Science minor. He’s very passionate about technology and loves to build engineering projects. 
                    Outside of class, he crafts new software solutions for our communities. He’s the co-creator of EagleVision, and loves to develop products which aid the members of our society. 
                    This includes working with hardware, electronics, and code to deliver engaging experiences. In the past, Estevan interned at TripAdvisor as an IT intern. 
                    He’s excited to teach MakeBC members how they can leverage electronics and coding to develop the skills essential in this technological era.
                    </p>
                    <h3>Jess Olivieri - Director of Marketing</h3>
                    <p>
                    Jess is an incoming senior at Boston College studying information systems and economics, who is passionate about traveling and technology. Along with being the director of marketing for MakeBC, Jess is also a member of the women's club ice hockey team.
                     She is very excited to start building more projects for MakeBC.
                    </p>
                </div>
            </section>
        </div>

    );
}
export default about;