import { useState } from 'react';
import {
  RiMoonClearFill,
  RiBriefcase2Fill,
  RiRainbowFill,
  RiGroupFill,
  RiStarSmileFill,
  RiAwardFill,
  RiToolsFill,
} from 'react-icons/ri';
import styles from '../styles/Home.module.css';
import COLORS from './colors';

const SECTIONS = [
  {
    name: 'Header',
    icon: RiStarSmileFill,
    color: COLORS.redOrange,
    fields: ['Name', 'Email', 'Phone'],
  },
  {
    name: 'Experience',
    icon: RiBriefcase2Fill,
    color: COLORS.green,
    fields: ['Position Title', 'Company', 'Location', 'Date', 'Description'],
  },
  {
    name: 'Education',
    icon: RiMoonClearFill,
    color: COLORS.yellowGreen,
    fields: ['Degree & Major(s)', 'University', 'Date', 'GPA', 'Coursework'],
  },
  {
    name: 'Projects',
    icon: RiRainbowFill,
    color: COLORS.teal,
    fields: ['Project Name', 'Link', 'Date', 'Description'],
  },
  {
    name: 'Activities',
    icon: RiGroupFill,
    color: COLORS.blue,
    fields: ['Organization Name', 'Role', 'Affiliation', 'Date', 'Description'],
  },
  {
    name: 'Honors',
    icon: RiAwardFill,
    color: COLORS.lavender,
    fields: ['Award Name', 'Giver', 'Date'],
  },
  {
    name: 'Skills',
    icon: RiToolsFill,
    color: COLORS.purple,
    fields: ['Code', 'Design', 'Miscellaneous'],
  },
];

const Home = () => {
  const [resumeData, setResumeData] = useState({});

  const handleSectionClick = (sectionName) => {
    setResumeData((prevData) => ({
      ...prevData,
      [sectionName]: prevData[sectionName] || {},
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        {SECTIONS.map((section) => (
          <button
            key={section.name}
            className={styles.sectionButton}
            onClick={() => handleSectionClick(section.name)}
          >
            <section.icon size={24} color={section.color} />
            {section.name}
          </button>
        ))}
      </div>
      <div className={styles.rightSide}>
        <h1>Resume Builder</h1>
        {Object.entries(resumeData).map(([sectionName, sectionData]) => (
          <div key={sectionName}>
            <h2>{sectionName}</h2>
            {SECTIONS.find((sec) => sec.name === sectionName).fields.map(
              (field) => (
                <p key={field}>
                  <strong>{field}:</strong> {sectionData[field] || ''}
                </p>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
