import React from 'react';
import { Icon } from '@iconify/react';
import './TechnicalSkills.css';

const TechnicalSkills = ({ skills }) => {
  return (
    <ul className="skills-icons">
      {skills.map((skill, index) => (
        <li key={index}>
          <span className="iconify-icon">
            <Icon icon={skill.icon} />
          </span>
          <span className="label">{skill.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default TechnicalSkills;
