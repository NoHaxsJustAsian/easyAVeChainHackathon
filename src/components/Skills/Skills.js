import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import TechnicalSkills from './TechnicalSkills';

//Icons

import swiftIcon from '@iconify/icons-logos/swift';
import javaIcon from '@iconify/icons-logos/java';
import firebaseIcon from '@iconify/icons-logos/firebase';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import htmlIcon from '@iconify/icons-vscode-icons/file-type-html';
import cssIcon from '@iconify/icons-vscode-icons/file-type-css';
import tailwindIcon from '@iconify/icons-vscode-icons/file-type-tailwind';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import sqlIcon from '@iconify/icons-skill-icons/mysql-dark';
import linuxIcon from '@iconify/icons-logos/linux-tux';
import drRacketIcon from '@iconify/icons-vscode-icons/file-type-racket';
import latexDark from '@iconify/icons-skill-icons/latex-dark';


export const Skills = () => {
    const skills = [
        { icon: swiftIcon, label: 'Swift' },
        { icon: javaIcon, label: 'Java' },
        { icon: firebaseIcon, label: 'Firebase' },
        { icon: typescriptIcon, label: 'TypeScript' },
        { icon: javascriptIcon, label: 'JavaScript' },
        { icon: reactIcon, label: 'React' },
        { icon: nodejsIcon, label: 'Node.js' },
        { icon: htmlIcon, label: 'HTML' },
        { icon: cssIcon, label: 'CSS' },
        { icon: tailwindIcon, label: 'Tailwind' },
        { icon: bootstrapIcon, label: 'Bootstrap' },
        { icon: sqlIcon, label: 'SQL' },
        { icon: latexDark, label: 'LaTeX' },
        { icon: linuxIcon, label: 'Linux' },
        { icon: drRacketIcon, label: 'DrRacket' },
    ];
  
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Technical Skills
                        </h2>
                        <TechnicalSkills skills={skills}/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;
