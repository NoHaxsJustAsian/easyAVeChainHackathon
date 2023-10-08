import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import TechnicalSkills from './TechnicalSkills';

//Icons

import firebaseIcon from '@iconify/icons-logos/firebase';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import htmlIcon from '@iconify/icons-vscode-icons/file-type-html';
import cssIcon from '@iconify/icons-vscode-icons/file-type-css';
import tailwindIcon from '@iconify/icons-vscode-icons/file-type-tailwind';
import solidityIcon from '@iconify/icons-vscode-icons/file-type-solidity';
import vechainIcon from '../../assets/img/vechain.jpeg';


export const Skills = () => {
    const skills = [

        { icon: firebaseIcon, label: 'Firebase' },
        { icon: typescriptIcon, label: 'TypeScript' },
        { icon: javascriptIcon, label: 'JavaScript' },
        { icon: reactIcon, label: 'React' },
        { icon: nodejsIcon, label: 'Node.js' },
        { icon: htmlIcon, label: 'HTML' },
        { icon: cssIcon, label: 'CSS' },
        { icon: tailwindIcon, label: 'Tailwind' },
        { icon: solidityIcon, label: 'Solidity' },
        { icon: vechainIcon, label: 'VeChain'}
    ];
  
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Technologies Used
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
