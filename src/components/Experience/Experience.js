import React from 'react'
import {FaAngular,FaReact} from 'react-icons/fa'
import {SiPlaywright,SiReadthedocs} from 'react-icons/si'
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Container } from 'react-bootstrap';
import './Experience.css';
import Particle from '../Particle';

const Experience = () => {
    const description1 = [
        "Developed ReactJS dashboards with dynamic data visualization (D3.js integration) that consumed Flask APIs, improving real-timedecision-making efficiency by 35% through WebSocket implementation and memoized component rendering",
        "Designed and optimized high-throughput Flask REST APIs handling 50k+ transactions/sec, implementing Redis caching andPostgreSQL query tuning to reduce latency by 40%.",
        "Technologies Used: ReactJS, Python, PostgreSQL, Flask, Postman, Git, Docker, AWS S3"
      ];
    const description2 = [
        "Developed an Interview platform named Interview Buddy where users can sign up and get interview experience from interviewers which will be integrated to a B2B system that uses Angular",
        "Used Hasura GraphQL for integrations and getting data from the backend.",
        "Technologies Used: Angular, Hasura, GraphQL, Postman, Git"
      ];
    const description3 = [
        "Led the team for test automation and was involved in writing automation scripts.",
        "Prepared and executed Automation test scripts using Playwright and Pytest",
        "Technologies Used: Playwright, Pytest, Lambda Test"
      ];
    const description4 = [
        "Led the Team of 4 Developers in Developing Application Management Software",
        "Technologies Used: ReactJS, Bootstrap, Supabase, GraphQL"
      ];
    const description5 = [
        "Conducted Automated, functional, regression, and usability testing on mobile and web Applications.",
        "Conducted regression testing, analyzed results and submitted observations to the development team",
        "Analyzing test results on database impacts, errors or bugs, and usability"
      ]

    const events1 = [
        { Title: 'Software Developer - University of Florida', TimeLine: 'October 2024 - Present', icon: FaAngular,description: description1  },
        { Title: 'Software Developer Intern - AlcoveX Product Studio', TimeLine: 'July 2023 - Nov 2023', icon: FaAngular,description: description2  },
        { Title: 'QA Automation Intern - AlcoveX Product Studio', TimeLine: 'May 2023 - July 2023', icon:SiPlaywright, description:description3 },
        { Title: 'Software Developer Intern - AdmitMe International', TimeLine: 'April 2023 - July 2023', icon: FaReact, description:description4  },
        { Title: 'QA Intern - MeetWorks', TimeLine: 'June 2022 - December 2022',icon: SiReadthedocs, description:description5  }
    ];

    

    const customizedMarker = (item) => {
        const Icon = item.icon
        return (
            <span >
                <Icon size='2em'/>
            </span>
        );
    };

    const customizedContent = (item, index) => {
        return (
            <Card
                title={item.Title}
                subTitle={item.TimeLine}
                className="project-card-view"
                
            >
                <ul style={{ textAlign: "left" }}>
                    {item.description.map((paragraph, index) => (
                        <li key={index}>{paragraph}</li>
                    ))}
                </ul>
            </Card>
        );
    };

  return (
    <section>
        <Container fluid className='about-section'>
            <Particle  />
            <Container>
                <h1 className="project-heading">
                My Industrial <strong className="purple">Experience </strong>
                </h1>
                <div >
                    <Timeline value={events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                </div>
            </Container>

        </Container>
    </section>
  )
}

export default Experience
