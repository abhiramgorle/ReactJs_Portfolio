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
        "Developed an Interview platform named Interview Buddy where users can sign up and get interview experience from interviewers which will be integrated to a B2B system that uses Angular",
        "Used Hasura GraphQL for integrations and getting data from the backend.",
        "Technologies Used: Angular, Hasura, GraphQL, Postman, Git"
      ];
    const description2 = [
        "Led the team for test automation and was involved in writing automation scripts.",
        "Prepared and executed Automation test scripts using Playwright and Pytest",
        "Technologies Used: Playwright, Pytest, Lambda Test"
      ];
    const description3 = [
        "Led the Team of 4 Developers in Developing Application Management Software",
        "Technologies Used: ReactJS, Bootstrap, Supabase, GraphQL"
      ];
    const description4 = [
        "Conducted Automated, functional, regression, and usability testing on mobile and web Applications.",
        "Conducted regression testing, analyzed results and submitted observations to the development team",
        "Analyzing test results on database impacts, errors or bugs, and usability"
      ]

    const events1 = [
        { Title: 'Software Developer Intern - AlcoveX Product Studio', TimeLine: 'July 2023 - Present', icon: FaAngular,description: description1  },
        { Title: 'QA Automation Intern - AlcoveX Product Studio', TimeLine: 'May 2023 - July 2023', icon:SiPlaywright, description:description2 },
        { Title: 'Software Developer Intern - AdmitMe International', TimeLine: 'April 2023 - July 2023', icon: FaReact, description:description3  },
        { Title: 'QA Intern - MeetWorks', TimeLine: 'June 2022 - December 2022',icon: SiReadthedocs, description:description4  }
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
