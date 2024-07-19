import {
    RiMoonClearFill,
    RiBriefcase2Fill,
    RiRainbowFill,
    RiGroupFill,
    RiStarSmileFill,
    RiAwardFill,
    RiToolsFill,
  } from 'react-icons/ri';
  
  const COLORS = {
    redOrange: '#ff4500',
    orange: '#ff8c00',
    yellowGreen: '#9acd32',
    green: '#008000',
    teal: '#008080',
    blue: '#0000ff',
    lavender: '#e6e6fa',
    purple: '#800080',
    background: '#f3ece5',
    red: '#da6940',
    darkBrown: '#292524',
  };
  
  export const SECTIONS = [
    {
      name: 'header',
      body: [
        {
          other: [
            'John Doe',
            'mailto:firstlast@gmail.com',
            'yourwebsite.com',
            '(111) 222-3333',
          ],
        },
      ],
      icon: RiStarSmileFill,
      color: COLORS.redOrange,
    },
    {
      name: 'experience',
      body: [
        {
          title: 'Position Title',
          subtitle: 'Company',
          description: 'Location',
          date: 'Date #1 - Date #2',
          other: [
            '- [what did you do at the company? include as many numbers and metrics as you can]',
            '- [what did you learn? what tools did you use and gain proficiency at?]',
            '- [what initiatives did you take?]',
          ],
        },
        {
          title: 'Position Title',
          subtitle: 'Company',
          description: 'Location',
          date: 'Date #1 - Date #2',
          other: [
            '- [what did you do at the company? include as many numbers and metrics as you can]',
            '- [what did you learn? what tools did you use and gain proficiency at?]',
            '- [what initiatives did you take?]',
          ],
        },
      ],
      icon: RiBriefcase2Fill,
      color: COLORS.green,
    },
    {
      name: 'education',
      body: [
        {
          title: 'Degree & Major(s)',
          subtitle: 'Your University',
          date: 'Date #1 - Date #2',
          other: [
            'GPA: [your gpa]/4.0',
            `Relevant Coursework: [briefly list relevant courses to the positions you're applying to; don't have to write full/accurate course names].`,
          ],
        },
      ],
      icon: RiMoonClearFill,
      color: COLORS.yellowGreen,
    },
    {
      name: 'projects',
      body: [
        {
          title: 'Project Name',
          description: '[link the project]',
          date: 'Date #1 - Date #2',
          other: [
            '[what was the project, what did you do for it, and why was it significant?]',
          ],
        },
        {
          title: 'Project Name',
          description: '[link the project]',
          date: 'Date #1 - Date #2',
          other: [
            '[what was the project, what did you do for it, and why was it significant?]',
          ],
        },
      ],
      icon: RiRainbowFill,
      color: COLORS.teal,
    },
    {
      name: 'activities',
      body: [
        {
          title: 'Organization Name',
          subtitle: '[your role in the organization]',
          description: '[any extra affiliation, ex. university]',
          date: 'Date #1 - Date #2',
          other: [
            '[what was the organization, what did you do for it, and why was it significant?]',
          ],
        },
        {
          title: 'Organization Name',
          subtitle: '[your role in the organization]',
          description: '[any extra affiliation, ex. university]',
          date: 'Date #1 - Date #2',
          other: [
            '[what was the organization, what did you do for it, and why was it significant?]',
          ],
        },
      ],
      icon: RiGroupFill,
      color: COLORS.blue,
    },
    {
      name: 'honors',
      body: [
        {
          title: 'Award Name',
          subtitle: '[who gave you this award?]',
          date: 'Date Awarded',
          other: [],
        },
        {
          title: 'Award Name',
          subtitle: '[who gave you this award?]',
          date: 'Date Awarded',
          other: [],
        },
      ],
      icon: RiAwardFill,
      color: COLORS.lavender,
    },
    {
      name: 'skills',
      body: [
        {
          other: [
            'Code: [what programming languages/frameworks do you know? ex. JavaScript, Python, Java]',
            'Design: [what design tools do you know?]',
            '[what miscellaneous tools relevant to your position do you know? list them as well.]',
          ],
        },
      ],
      icon: RiToolsFill,
      color: COLORS.purple,
    },
  ];
  