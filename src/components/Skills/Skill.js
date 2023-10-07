import React from 'react';
import TechnicalSkills from './TechnicalSkills';
import { Icon } from '@iconify/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import './Skills.css';

export const Skills = () => {
  const skills = [
    { icon: javascriptIcon, label: 'JavaScript' },
    { icon: reactIcon, label: 'React' },
    { icon: nodejsIcon, label: 'Node.js' },
    // ...add all other skills here
  ];

  return (
    <section id="skills" className="skills">
      <div className="seperator-skew-top">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div className="container" data-aos="fade-in">
        <h2 className="text-white main-font">Technical <span className="text-blue main-font">Skills</span></h2>
        <TechnicalSkills skills={skills} />
      </div>
    </section>
  );
}

export default Skills;
